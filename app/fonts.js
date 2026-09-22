import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google';

/**
 * next/font self-hosts and preloads each family, and reserves metrics with
 * `adjustFontFallback` so swapping in the real face causes no layout shift (CLS).
 */
export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
});

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});
