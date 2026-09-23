'use client';

/** Last-resort boundary (root layout failed) — must render its own <html>/<body>. */
export default function GlobalError({ reset }) {
  return (
    <html lang="en-IN">
      <body style={{ margin: 0, background: '#FBFAF8', color: '#16151A', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ maxWidth: 640, margin: '0 auto', padding: '96px 24px' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF0B55', margin: 0 }}>Something went wrong</p>
          <h1 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.04em', fontWeight: 500, margin: '16px 0 0' }}>
            The site hit an error.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#6B6577', marginTop: 16 }}>
            Please try again. If it persists, call or WhatsApp +91 98996 80505 or email info@thediv.in.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => reset()} style={{ cursor: 'pointer', border: 0, borderRadius: 999, background: '#16151A', color: '#fff', padding: '14px 28px', fontSize: 15 }}>
              Try again
            </button>
            <a href="/" style={{ borderRadius: 999, border: '1px solid #EDEAE3', background: '#fff', color: '#16151A', padding: '14px 28px', fontSize: 15, textDecoration: 'none' }}>
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
