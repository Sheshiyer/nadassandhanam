"use client";

import React from "react";
import { useBookingStore } from "../store/booking";

interface BookingButtonProps {
  calLink?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BookingButton({ 
  calLink = "meetshesh/30min",
  className = "btn btn-primary",
  children = "Book a Class"
}: BookingButtonProps) {
  const setSelectedClass = useBookingStore((state) => state.setSelectedClass);

  return (
    <button
      onClick={() => setSelectedClass(calLink)}
      className={className}
    >
      {children}
    </button>
  );
}
