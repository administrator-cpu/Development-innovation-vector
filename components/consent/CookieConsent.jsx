'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const KEY = 'div-consent';
export const openCookieSettings = () => window.dispatchEvent(new Event('div:cookie-settings'));

export default function CookieConsent({ gaId }) {
  const [choice, setChoice] = useState(null); // null = not read yet, '' = undecided

  useEffect(() => {
    try { setChoice(localStorage.getItem(KEY) || ''); } catch { setChoice(''); }
    const open = () => setChoice('');
    window.addEventListener('div:cookie-settings', open);
    return () => window.removeEventListener('div:cookie-settings', open);
  }, []);

  const save = (v) => {
    try { localStorage.setItem(KEY, v); } catch {}
    // Withdrawing consent: clear GA cookies and reload so the scripts are gone.
    if (v === 'essential' && choice === 'analytics') {
      document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n.startsWith('_ga'))
        .forEach((n) => { document.cookie = `${n}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, '')}`; });
      location.reload();
      return;
    }
    setChoice(v);
  };

  const allowed = choice === 'analytics';

  return (
    <>
      {allowed ? (
        <>
          <Analytics />
          <SpeedInsights />
          {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        </>
      ) : null}
      {choice === '' ? (
        <div role="dialog" aria-labelledby="ck-title" aria-describedby="ck-body" className="fixed bottom-3 left-3 z-[90] flex w-[min(420px,calc(100vw-24px))] flex-col gap-3 rounded-[18px] border border-line bg-white p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] sm:bottom-6 sm:left-6">
          <h2 id="ck-title" className="text-[15px] font-medium tracking-[-0.015em]">Cookies on this site</h2>
          <p id="ck-body" className="text-[13px] leading-[1.55] text-muted">
            We use essential storage to run the site. With your OK we also use Google Analytics and Vercel Analytics to see which pages help. Nothing loads until you choose.{' '}
            <Link href="/cookies" className="text-ink underline underline-offset-4">Cookie policy</Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => save('analytics')} className="min-h-11 flex-1 basis-[140px] cursor-pointer rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-medium text-white">Allow analytics</button>
            <button type="button" onClick={() => save('essential')} className="min-h-11 flex-1 basis-[140px] cursor-pointer rounded-full border border-ink bg-white px-4 py-2.5 text-[13.5px] font-medium text-ink">Essential only</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
