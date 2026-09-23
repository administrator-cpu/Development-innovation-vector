import { isSlotValid, validateDetails } from '@/lib/booking';
import { customerEmail, internalEmail, sendEmail } from '@/lib/email';
import { siteConfig } from '@/lib/siteConfig';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Tiny in-memory rate limit. Good enough for a single-region deploy; move to
// Upstash/KV if the site scales to multiple instances.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (limited(ip)) {
    return Response.json(
      { ok: false, error: 'Too many requests. Please email us instead.' },
      { status: 429 }
    );
  }

  // Honeypot — bots fill hidden fields, humans never see them.
  if (body.company) return Response.json({ ok: true });

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const { date, time } = body;

  const errors = validateDetails({ name, email, phone });
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
    note: String(body.note || '').slice(0, 1000),
    source: String(body.source || 'site').slice(0, 60),
  };

  try {
    const internal = internalEmail(booking);
    const customer = customerEmail(booking);
    await Promise.all([
      sendEmail({ to: siteConfig.email, replyTo: email, ...internal }),
      sendEmail({ to: email, replyTo: siteConfig.email, ...customer }),
    ]);
  } catch (err) {
    console.error('[booking] send failed', err);
    return Response.json(
      { ok: false, error: 'We could not send the confirmation. Please try WhatsApp.' },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
