'use client';

import { useState } from 'react';
import Link from 'next/link';
import { validateDetails } from '@/lib/booking';
import { siteConfig } from '@/lib/siteConfig';

const TOPICS = [
  'Cloud native deployments',
  'API-driven backend',
  'Microservices / monolith breakup',
  'Database & integration',
  'A platform product (CRM, billing, support…)',
  'Something else',
];

const input =
  'w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-ink';

function Field({ id, label, error, optional, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-[12px] font-medium tracking-[0.08em] text-muted uppercase">
        {label}
        {optional ? <span className="ml-1.5 tracking-normal normal-case opacity-70">(optional)</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] text-rose">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const empty = { name: '', email: '', phone: '', company: '', topic: '', message: '', website: '' };
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [formError, setFormError] = useState('');

  const set = (k) => (e) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const a11y = (k) => ({
    'aria-invalid': !!errors[k],
    'aria-describedby': errors[k] ? `ct-${k}-error` : undefined,
    className: `${input} ${errors[k] ? 'border-rose' : 'border-line'}`,
  });

  const submit = async (e) => {
    e.preventDefault();
    const next = validateDetails(v);
    if (v.message.trim().length < 10) next.message = 'Tell us a little more — at least a sentence.';
    setErrors(next);
    if (Object.keys(next).length) {
      setFormError('Please fix the highlighted fields and try again.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(data.error || (data.errors ? 'Please fix the highlighted fields and try again.' : 'Something went wrong. Please try again.'));
        setStatus('error');
        return;
      }
      setStatus('sent');
    } catch {
      setFormError('Network error. Please try again, or call us.');
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" aria-live="polite" className="rounded-[22px] border border-line bg-white p-8 text-center sm:p-12">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-[22px] text-ink">
          <span aria-hidden="true">✓</span>
        </div>
        <h2 className="mt-6 text-[26px] leading-[1.1] font-medium tracking-[-0.03em]">
          Message <span className="font-serif font-normal italic">received</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[40ch] text-[14.5px] leading-[1.6] text-muted">
          Thanks, {v.name.split(' ')[0]}. A copy is on its way to {v.email}. An engineer will reply within one business day.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              setV(empty);
              setErrors({});
              setFormError('');
              setStatus('idle');
            }}
            className="inline-flex cursor-pointer items-center rounded-full border border-line bg-white px-6 py-3 text-[14px] font-medium text-ink hover:border-ink"
          >
            Send another message
          </button>
          <Link href="/work" className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-white">
            See our case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-[22px] border border-line bg-white p-6 sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="ct-name" label="Full name" error={errors.name}>
          <input id="ct-name" name="name" autoComplete="name" required value={v.name} onChange={set('name')} placeholder="Ravi Menon" {...a11y('name')} />
        </Field>
        <Field id="ct-company" label="Company" optional>
          <input id="ct-company" name="company" autoComplete="organization" value={v.company} onChange={set('company')} placeholder="Menon Logistics" className={`${input} border-line`} />
        </Field>
        <Field id="ct-email" label="Work email" error={errors.email}>
          <input id="ct-email" name="email" type="email" inputMode="email" autoComplete="email" required value={v.email} onChange={set('email')} placeholder="ravi@company.in" {...a11y('email')} />
        </Field>
        <Field id="ct-phone" label="Phone" error={errors.phone}>
          <input id="ct-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={v.phone} onChange={set('phone')} placeholder="+91 98765 43210" {...a11y('phone')} />
        </Field>
        <div className="sm:col-span-2">
          <Field id="ct-topic" label="What's this about?" optional>
            <select id="ct-topic" name="topic" value={v.topic} onChange={set('topic')} className={`${input} border-line appearance-none`}>
              <option value="">Choose one</option>
              {TOPICS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="ct-message" label="Message" error={errors.message}>
            <textarea id="ct-message" name="message" rows={5} required value={v.message} onChange={set('message')} placeholder="What you run today, what's breaking, and when you need it fixed." {...a11y('message')} className={`${a11y('message').className} resize-y`} />
          </Field>
        </div>
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.website} onChange={set('website')} className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0" />

      {formError ? (
        <div role="alert" className="mt-5 flex items-start gap-3 rounded-2xl border border-rose/30 bg-rose/5 px-4 py-3 text-[13px] leading-[1.5] text-rose">
          <span aria-hidden="true" className="mt-px inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-rose text-[11px] font-semibold text-white">!</span>
          <span>
            {formError}{' '}
            <a href={`tel:${siteConfig.phoneHref}`} className="underline underline-offset-2">Or call {siteConfig.phone}</a>.
          </span>
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[42ch] text-[12.5px] leading-[1.5] text-muted">
          We use this only to reply to you. See our{' '}
          <a href="/privacy" className="underline decoration-line underline-offset-4 hover:text-ink">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex cursor-pointer items-center justify-center rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
