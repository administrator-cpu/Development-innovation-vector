'use client';

import { openCookieSettings } from './CookieConsent';

export default function CookieSettingsButton({ className = '' }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      COOKIE SETTINGS
    </button>
  );
}
