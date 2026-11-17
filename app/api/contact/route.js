import { cleanText, validateDetails } from '@/lib/booking';
import { enquiryCustomerEmail, enquiryInternalEmail, sendEmail } from '@/lib/email';
import { clientIp, rateLimited } from '@/lib/rateLimit';
import { siteConfig } from '@/lib/siteConfig';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (rateLimited(`contact:${clientIp(request)}`)) {
    return Response.json({ ok: false, error: 'Too many messages. Please call or WhatsApp us.' }, { status: 429 });
  }
  if (body.website) return Response.json({ ok: true }); // honeypot

  const q = {
    name: cleanText(body.name, 120),
    email: cleanText(body.email, 160),
    phone: cleanText(body.phone, 30),
    company: cleanText(body.company, 160),
    topic: cleanText(body.topic, 80),
    message: cleanText(body.message, 4000, { multiline: true }),
  };

  const errors = validateDetails(q);
  if (q.message.length < 10) errors.message = 'Tell us a little more — at least a sentence.';
  if (body.consent !== true) errors.consent = "Please tick the box so we're allowed to reply to you.";
  if (Object.keys(errors).length) return Response.json({ ok: false, errors }, { status: 422 });

  // The lead (our copy) decides success. A failed confirmation to the visitor is logged, not reported:
  // reporting it made people resend, and we got the same enquiry twice.
  try {
    await sendEmail({ to: siteConfig.email, replyTo: q.email, ...enquiryInternalEmail(q) });
  } catch (err) {
    console.error('[contact] send failed', err);
    return Response.json({ ok: false, error: 'We could not send your message. Please call or WhatsApp us.' }, { status: 502 });
  }
  await sendEmail({ to: q.email, replyTo: siteConfig.email, ...enquiryCustomerEmail(q) }).catch((err) =>
    console.error('[contact] confirmation failed', err)
  );

  return Response.json({ ok: true });
}
