import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Guest{
  id: number;
  name: string;
  done?: boolean;
}


interface GuestListState {
  guest: Guest[];
  addGuest: (guest: string) => void;
  removeGuestList: (id: number) => void;
  toggleGuestConfirmed: (id: number) => void;
}

export const useGuestList = create<GuestListState>()(
  persist(
    (set) => ({
      guest: [],
      addGuest: (guest) =>
        set((state) => ({
          guest: [...state.guest, { id: state.guest.length + 1, name: guest, done: false }],
        })),
      removeGuestList: (id: number) =>
        set((state) => ({ guest: state.guest.filter((guest) => guest.id !== id) })),
      toggleGuestConfirmed: (id) =>
        set((state) => ({
          guest: state.guest.map((guest) =>
            guest.id === id ? { ...guest, done: !guest.done } : guest
          ),
        })),
    }),
    {
      name: 'guest-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
