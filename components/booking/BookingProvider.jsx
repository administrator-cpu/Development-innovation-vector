'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

// The modal (form, slot picker, motion) is in every page's layout but opened by few visitors:
// load it on first open instead of shipping it with every page.
const loadModal = () => import('./BookingModal');
const BookingModal = dynamic(loadModal, { ssr: false });

const BookingContext = createContext(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>');
  return ctx;
}

/**
 * Holds the modal open/close state so any CTA anywhere on the page can call
 * openBooking('hero') and the modal mounts once, at the end of <body>.
 */
export default function BookingProvider({ children }) {
  const [source, setSource] = useState(null);

  // Fetch it once the page is idle, so the first click opens it without a wait.
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 2500));
    const cancel = window.cancelIdleCallback ?? clearTimeout;
    const id = idle(() => void loadModal());
    return () => cancel(id);
  }, []);

  const openBooking = useCallback((from = 'site') => setSource(from), []);
  const closeBooking = useCallback(() => setSource(null), []);
  const value = useMemo(() => ({ openBooking, closeBooking, isOpen: source !== null }), [
    openBooking,
    closeBooking,
    source,
  ]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {source !== null ? <BookingModal source={source} onClose={closeBooking} /> : null}
    </BookingContext.Provider>
  );
}
