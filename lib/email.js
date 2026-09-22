import { siteConfig } from './siteConfig';
import { formatDateLabel, formatTimeLabel, BOOKING } from './booking';

const wrap = (title, body) => `<!doctype html>
<html><body style="margin:0;background:#FBFAF8;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#16151A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBFAF8;padding:32px 16px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border:1px solid #EDEAE3;border-radius:18px;overflow:hidden">
<tr><td style="padding:28px 28px 0"><div style="font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#6B6577">DIV</div>
<h1 style="margin:10px 0 0;font-size:24px;line-height:1.2;font-weight:500;letter-spacing:-.02em">${title}</h1></td></tr>
<tr><td style="padding:18px 28px 28px;font-size:15px;line-height:1.6;color:#3A3745">${body}</td></tr>
<tr><td style="padding:18px 28px;border-top:1px solid #EDEAE3;font-size:12.5px;color:#6B6577">
${siteConfig.legalName} · <a href="${siteConfig.url}" style="color:#6B6577">${siteConfig.url.replace('https://', '')}</a>
</td></tr>
</table></td></tr></table></body></html>`;

const row = (k, v) =>
  `<tr><td style="padding:6px 0;font-size:13px;color:#6B6577;width:110px">${k}</td><td style="padding:6px 0;font-size:14px;color:#16151A">${v}</td></tr>`;

const esc = (s = '') =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function customerEmail(b) {
  const when = `${formatDateLabel(b.date, { long: true })}, ${formatTimeLabel(b.time)} ${BOOKING.timeZoneLabel}`;
  return {
    subject: `Your call with DIV — ${formatDateLabel(b.date)} at ${formatTimeLabel(b.time)}`,
    html: wrap(
      'Your call is booked',
      `<p style="margin:0 0 16px">Hi ${esc(b.name.split(' ')[0])}, thanks for reaching out. Here are the details:</p>
       <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px">
       ${row('When', when)}${row('Duration', `${BOOKING.durationMins} minutes`)}${row('Call on', esc(b.phone))}
       </table>
       <p style="margin:0 0 16px">We&rsquo;ll call you on that number. Before the call it helps to know what you run today — sheets, an existing system, or nothing yet.</p>
       <p style="margin:0">Need to move it? Reply to this email or message us on WhatsApp.</p>`
    ),
  };
}

export function internalEmail(b) {
  return {
    subject: `New call booked — ${b.name} · ${formatDateLabel(b.date)} ${formatTimeLabel(b.time)}`,
    html: wrap(
      'New call booked',
      `<table role="presentation" cellpadding="0" cellspacing="0">
       ${row('Name', esc(b.name))}${row('Email', `<a href="mailto:${esc(b.email)}">${esc(b.email)}</a>`)}
       ${row('Phone', `<a href="tel:${esc(b.phone)}">${esc(b.phone)}</a>`)}
       ${row('When', `${formatDateLabel(b.date, { long: true })} · ${formatTimeLabel(b.time)} ${BOOKING.timeZoneLabel}`)}
       ${row('Note', esc(b.note) || '—')}${row('Source', esc(b.source) || 'site')}
       </table>`
    ),
  };
}

/**
 * Resend over plain fetch — no SDK dependency. Swap this one function for
 * SES/Postmark/SMTP without touching the route or the emails.
 */
export async function sendEmail({ to, subject, html, replyTo }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn('[booking] RESEND_API_KEY missing — email skipped:', subject);
    return { skipped: true };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.BOOKING_FROM_EMAIL || `DIV <bookings@${siteConfig.url.replace('https://', '')}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  return res.json();
}
