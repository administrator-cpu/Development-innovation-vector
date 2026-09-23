import { validateDetails } from '@/lib/booking';
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
    name: String(body.name || '').trim().slice(0, 120),
    email: String(body.email || '').trim().slice(0, 160),
    phone: String(body.phone || '').trim().slice(0, 30),
    company: String(body.company || '').trim().slice(0, 160),
    topic: String(body.topic || '').trim().slice(0, 80),
    message: String(body.message || '').trim().slice(0, 4000),
  };

  const errors = validateDetails(q);
  if (q.message.length < 10) errors.message = 'Tell us a little more — at least a sentence.';
  if (Object.keys(errors).length) return Response.json({ ok: false, errors }, { status: 422 });

  try {
    await Promise.all([
      sendEmail({ to: siteConfig.email, replyTo: q.email, ...enquiryInternalEmail(q) }),
      sendEmail({ to: q.email, replyTo: siteConfig.email, ...enquiryCustomerEmail(q) }),
    ]);
  } catch (err) {
    console.error('[contact] send failed', err);
    return Response.json({ ok: false, error: 'We could not send your message. Please call or WhatsApp us.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
