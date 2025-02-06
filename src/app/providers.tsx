"use client";

import React from "react";
import BookingModal from "./components/BookingModal";
import { useBookingStore } from "./store/booking";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { selectedClass, setSelectedClass } = useBookingStore();

  return (
    <>
      {children}
      <BookingModal
        isOpen={!!selectedClass}
        onClose={() => setSelectedClass(null)}
        calLink={selectedClass || ""}
      />
    </>
  );
}
