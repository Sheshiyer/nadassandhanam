import { create } from 'zustand';

interface BookingState {
  selectedClass: string | null;
  setSelectedClass: (calLink: string | null) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedClass: null,
  setSelectedClass: (calLink: string | null) => set({ selectedClass: calLink }),
}));
