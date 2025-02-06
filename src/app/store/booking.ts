import { create } from 'zustand';
import { StateCreator } from 'zustand';

interface BookingState {
  selectedClass: string | null;
  setSelectedClass: (calLink: string | null) => void;
}

type BookingStore = StateCreator<BookingState>;

export const useBookingStore = create<BookingState>((set) => ({
  selectedClass: null,
  setSelectedClass: (calLink: string | null) => set({ selectedClass: calLink }),
}));
