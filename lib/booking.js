/**
 * Booking rules — shared by the client modal and the API route so the slot
 * list the user sees is the same list the server accepts.
 */
export const BOOKING = {
  timeZone: 'Asia/Kolkata',
  timeZoneLabel: 'IST (GMT+5:30)',
  durationMins: 30,
  openHour: 10, // 10:00
  closeHour: 19, // last slot starts before this
  closedWeekdays: [0], // Sunday
  daysAhead: 14,
  minLeadMins: 120,
};

const DAY_MS = 86400000;

function ist(date) {
  // Parts of `date` as seen in the booking timezone.
  const f = new Intl.DateTimeFormat('en-CA', {
    timeZone: BOOKING.timeZone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: false,
  });
  const p = Object.fromEntries(f.formatToParts(date).map((x) => [x.type, x.value]));
  return { iso: `${p.year}-${p.month}-${p.day}`, hour: +p.hour % 24, minute: +p.minute, weekday: p.weekday };
}

/** ISO date strings (yyyy-mm-dd) that are open for booking, in IST. */
export function availableDates(now = new Date()) {
  const out = [];
  for (let i = 0; i < BOOKING.daysAhead; i += 1) {
    const d = new Date(now.getTime() + i * DAY_MS);
    const { iso } = ist(d);
    const dow = new Date(`${iso}T12:00:00Z`).getUTCDay();
    if (BOOKING.closedWeekdays.includes(dow)) continue;
    if (slotsForDate(iso, now).length === 0) continue;
    out.push(iso);
  }
  return out;
}

/** "HH:MM" slots still bookable on an ISO date. */
export function slotsForDate(isoDate, now = new Date()) {
  if (!isoDate) return [];
  const dow = new Date(`${isoDate}T12:00:00Z`).getUTCDay();
  if (BOOKING.closedWeekdays.includes(dow)) return [];

  const today = ist(now);
  const nowMins = today.hour * 60 + today.minute + BOOKING.minLeadMins;
  const slots = [];
  for (let m = BOOKING.openHour * 60; m + BOOKING.durationMins <= BOOKING.closeHour * 60; m += BOOKING.durationMins) {
    if (isoDate < today.iso) continue;
    if (isoDate === today.iso && m < nowMins) continue;
    slots.push(`${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  }
  return slots;
}

export function isSlotValid(isoDate, time, now = new Date()) {
  return slotsForDate(isoDate, now).includes(time);
}

export function formatDateLabel(isoDate, opts = {}) {
  if (!isoDate) return '';
  return new Date(`${isoDate}T12:00:00Z`).toLocaleDateString('en-IN', {
    weekday: opts.long ? 'long' : 'short',
    day: 'numeric',
    month: opts.long ? 'long' : 'short',
    timeZone: 'UTC',
  });
}

export function formatTimeLabel(time) {
  if (!time) return '';
  const [h, m] = time.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${suffix}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Returns a field->message map; empty object means valid. */
export function validateDetails({ name, email, phone }) {
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!email || !EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.';
  const digits = (phone || '').replace(/[^\d]/g, '');
  if (digits.length < 10 || digits.length > 15) errors.phone = 'Please enter a valid phone number.';
  return errors;
}

/** E.164-ish digits for wa.me links. */
export function waDigits(phone) {
  const digits = (phone || '').replace(/[^\d]/g, '');
  return digits.length === 10 ? `91${digits}` : digits;
}
