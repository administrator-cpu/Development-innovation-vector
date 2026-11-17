import { cleanText, isSlotValid, validateDetails } from '@/lib/booking';
import { customerEmail, internalEmail, sendEmail } from '@/lib/email';
import { siteConfig } from '@/lib/siteConfig';
import { clientIp, rateLimited } from '@/lib/rateLimit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (rateLimited(`booking:${clientIp(request)}`)) {
    return Response.json(
      { ok: false, error: 'Too many requests. Please email us instead.' },
      { status: 429 }
    );
  }

  // Honeypot — bots fill hidden fields, humans never see them.
  if (body.company) return Response.json({ ok: true });

  const name = cleanText(body.name, 120);
  const email = cleanText(body.email, 160);
  const phone = cleanText(body.phone, 30);
  const { date, time } = body;

  const errors = validateDetails({ name, email, phone });
  if (body.consent !== true) errors.consent = "Please tick the box so we're allowed to reply to you.";
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }
  if (!isSlotValid(date, time)) {
    return Response.json(
      { ok: false, errors: { slot: 'That slot is no longer available. Please pick another.' } },
      { status: 409 }
    );
  }

  const booking = {
    name,
    email,
    phone,
    date,
    time,
    note: cleanText(body.note, 1000, { multiline: true }),
    source: cleanText(body.source || 'site', 60),
  };

  // Our copy decides success; a failed confirmation is logged so the visitor does not book the slot twice.
  try {
    await sendEmail({ to: siteConfig.email, replyTo: email, ...internalEmail(booking) });
    await sendEmail({ to: email, replyTo: siteConfig.email, ...customerEmail(booking) }).catch((err) =>
      console.error('[booking] confirmation failed', err)
    );
  } catch (err) {
    console.error('[booking] send failed', err);
    return Response.json(
      { ok: false, error: 'We could not send the confirmation. Please try WhatsApp.' },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
