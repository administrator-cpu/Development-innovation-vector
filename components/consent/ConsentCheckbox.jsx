import Link from 'next/link';

// DPDP Act s.6: consent must be free, specific, informed and an affirmative action — never pre-ticked.
export default function ConsentCheckbox({ id, checked, onChange, error, purpose }) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-ink">
        <input
          id={id}
          name="consent"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 flex-none cursor-pointer accent-[#16151A]"
        />
        <span>
          I agree that DIV may use these details to {purpose}, as described in the{' '}
          <Link href="/privacy" className="underline underline-offset-4">privacy policy</Link>. I can withdraw this at any time by emailing info@thediv.in.
        </span>
      </label>
      {error ? <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] text-rose">{error}</p> : null}
    </div>
  );
}
