'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  BOOKING,
  availableDates,
  formatDateLabel,
  formatTimeLabel,
  slotsForDate,
  validateDetails,
} from '@/lib/booking';
import { siteConfig } from '@/lib/siteConfig';

const field =
  'w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-ink';

function Field({ id, label, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[12px] font-medium tracking-[0.08em] text-muted uppercase">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] text-rose">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-[12.5px] text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

export default function BookingModal({ source = 'site', onClose }) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState('details'); // details | schedule | success
  const [details, setDetails] = useState({ name: '', email: '', phone: '', note: '', company: '' });
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const panelRef = useRef(null);
  const firstFieldRef = useRef(null);

  const dates = useMemo(() => availableDates(), []);
  const slots = useMemo(() => slotsForDate(date), [date]);

  useEffect(() => setMounted(true), []);

  // Lock the page (and Lenis) while the dialog is open; restore on unmount.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.lenis?.stop();
    firstFieldRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.lenis?.start();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll(
        'button:not([disabled]), a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const set = (key) => (e) => {
    setDetails((d) => ({ ...d, [key]: e.target.value }));
    if (errors[key]) setErrors((x) => ({ ...x, [key]: undefined }));
  };

  const goSchedule = (e) => {
    e.preventDefault();
    const next = validateDetails(details);
    setErrors(next);
    if (Object.keys(next).length) return;
    if (!date && dates[0]) setDate(dates[0]);
    setStep('schedule');
  };

  const waHref = useMemo(() => {
    const text = `Hi DIV, I'm ${details.name || 'there'}. I'd like to talk about software for my business.${
      details.note ? ` ${details.note}` : ''
    }`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  }, [details.name, details.note]);

  const submit = async () => {
    if (!date || !time) {
      setFormError('Pick a date and a time slot first.');
      return;
    }
    setSubmitting(true);
    setFormError('');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...details, date, time, source }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors?.slot) {
          setTime('');
          setFormError(data.errors.slot);
        } else if (data.errors) {
          setErrors(data.errors);
          setStep('details');
        } else {
          setFormError(data.error || 'Something went wrong. Please try WhatsApp.');
        }
        return;
      }
      setStep('success');
    } catch {
      setFormError('Network error. Please try again or use WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted) return null;

  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.98 },
        transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
      };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <motion.div
        aria-hidden="true"
        onClick={onClose}
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[rgba(16,21,26,0.5)] backdrop-blur-[6px]"
      />

      <motion.div
        {...anim}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        data-lenis-prevent
        className="relative z-10 flex max-h-[92vh] w-full max-w-[520px] flex-col overflow-hidden rounded-t-[26px] border border-line bg-paper shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)] sm:rounded-[26px]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-hairline px-6 pt-6 pb-5 sm:px-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {step === 'success' ? 'Confirmed' : `Step ${step === 'details' ? '1' : '2'} of 2`}
            </p>
            <h2
              id="booking-title"
              className="mt-2 text-[clamp(22px,3vw,28px)] leading-[1.1] font-medium tracking-[-0.03em]"
            >
              {step === 'details' ? (
                <>
                  Let&rsquo;s start with <span className="font-serif font-normal italic">you</span>
                </>
              ) : step === 'schedule' ? (
                <>
                  Pick a <span className="font-serif font-normal italic">time</span>
                </>
              ) : (
                <>
                  You&rsquo;re <span className="font-serif font-normal italic">booked</span>
                </>
              )}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking"
            className="inline-flex h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-full border border-line bg-white text-[17px] leading-none text-muted transition-colors duration-200 hover:text-ink"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <AnimatePresence mode="wait" initial={false}>
            {step === 'details' ? (
              <motion.form
                key="details"
                onSubmit={goSchedule}
                initial={reduced ? undefined : { opacity: 0, x: 14 }}
                animate={reduced ? undefined : { opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -14 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                noValidate
                className="flex flex-col gap-5"
              >
                <Field id="bk-name" label="Full name" error={errors.name}>
                  <input
                    ref={firstFieldRef}
                    id="bk-name"
                    name="name"
                    value={details.name}
                    onChange={set('name')}
                    required
                    autoComplete="name"
                    placeholder="Ravi Menon"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'bk-name-error' : undefined}
                    className={`${field} ${errors.name ? 'border-rose' : 'border-line'}`}
                  />
                </Field>

                <Field id="bk-email" label="Work email" error={errors.email}>
                  <input
                    id="bk-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    value={details.email}
                    onChange={set('email')}
                    required
                    autoComplete="email"
                    placeholder="ravi@company.in"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'bk-email-error' : undefined}
                    className={`${field} ${errors.email ? 'border-rose' : 'border-line'}`}
                  />
                </Field>

                <Field
                  id="bk-phone"
                  label="Phone"
                  error={errors.phone}
                  hint="We call this number at the time you pick."
                >
                  <input
                    id="bk-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={details.phone}
                    onChange={set('phone')}
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'bk-phone-error' : undefined}
                    className={`${field} ${errors.phone ? 'border-rose' : 'border-line'}`}
                  />
                </Field>

                <Field id="bk-note" label="What do you run today? (optional)">
                  <textarea
                    id="bk-note"
                    name="note"
                    rows={3}
                    value={details.note}
                    onChange={set('note')}
                    placeholder="Sheets, Tally, an old CRM, nothing yet…"
                    className={`${field} resize-none border-line`}
                  />
                </Field>

                {/* Honeypot: hidden from users, tempting to bots. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={details.company}
                  onChange={set('company')}
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5"
                >
                  Continue
                </button>
                <p className="text-center text-[12px] text-muted">
                  No newsletters. We use this only to reach you about this call.
                </p>
              </motion.form>
            ) : step === 'schedule' ? (
              <motion.div
                key="schedule"
                initial={reduced ? undefined : { opacity: 0, x: 14 }}
                animate={reduced ? undefined : { opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -14 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[13.5px] leading-[1.5] text-muted">
                  {BOOKING.durationMins}-minute call with an engineer · times in {BOOKING.timeZoneLabel}.
                  Skip this if you&rsquo;d rather just chat on WhatsApp.
                </p>

                <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Date</p>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1" data-lenis-prevent>
                  {dates.map((d) => {
                    const active = d === date;
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setDate(d);
                          setTime('');
                          setFormError('');
                        }}
                        aria-pressed={active}
                        className={`flex-none cursor-pointer rounded-2xl border px-4 py-3 text-center transition-colors duration-200 ${
                          active ? 'border-ink bg-ink text-white' : 'border-line bg-white hover:border-ink/40'
                        }`}
                      >
                        <span className="block text-[11px] tracking-[0.06em] uppercase opacity-70">
                          {formatDateLabel(d).split(' ')[0]}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium">
                          {formatDateLabel(d).split(' ').slice(1).join(' ')}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Time slot</p>
                {slots.length ? (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {slots.map((s) => {
                      const active = s === time;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setTime(s);
                            setFormError('');
                          }}
                          aria-pressed={active}
                          className={`cursor-pointer rounded-xl border py-3 text-[13.5px] transition-colors duration-200 ${
                            active
                              ? 'border-ink bg-ink text-white'
                              : 'border-line bg-white hover:border-ink/40'
                          }`}
                        >
                          {formatTimeLabel(s)}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="mt-3 text-[13.5px] text-muted">
                    No slots left on this date — try the next one.
                  </p>
                )}

                {formError ? (
                  <p role="alert" className="mt-5 rounded-2xl border border-rose/30 bg-rose/5 px-4 py-3 text-[13px] text-rose">
                    {formError}
                  </p>
                ) : null}

                <div className="mt-7 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={submit}
                    disabled={submitting}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                  >
                    {submitting
                      ? 'Booking…'
                      : date && time
                        ? `Book a call — ${formatDateLabel(date)}, ${formatTimeLabel(time)}`
                        : 'Book a call'}
                  </button>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-4 text-[15px] font-medium text-ink transition-colors duration-200 hover:border-ink/40"
                  >
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#25D366]" />
                    Chat on WhatsApp instead
                  </a>
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="mt-1 cursor-pointer text-[13px] text-muted underline decoration-line underline-offset-4 hover:text-ink"
                  >
                    Back to your details
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={reduced ? undefined : { opacity: 0, y: 12 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-[22px] text-ink">
                  <span aria-hidden="true">✓</span>
                </div>
                <p className="mt-6 text-[17px] leading-[1.45] font-medium">
                  {formatDateLabel(date, { long: true })} at {formatTimeLabel(time)}
                </p>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-muted">
                  A confirmation is on its way to {details.email}. We&rsquo;ll call {details.phone} at that
                  time — {BOOKING.timeZoneLabel}.
                </p>
                <div className="mt-7 flex flex-col gap-2.5">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-4 text-[15px] font-medium text-ink hover:border-ink/40"
                  >
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#25D366]" />
                    Send us context on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-white"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
