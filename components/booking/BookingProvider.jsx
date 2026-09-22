'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import BookingModal from './BookingModal';

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
