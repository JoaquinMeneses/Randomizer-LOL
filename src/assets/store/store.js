import { create } from "zustand";

const useStore = create((set) => ({
  players: [
    { id: 0, name: "Joa" },
    { id: 1, name: null },
    { id: 2, name: null },
    { id: 3, name: null },
    { id: 4, name: null },
    { id: 5, name: null },
    { id: 6, name: "asdjasd" },
    { id: 7, name: null },
    { id: 8, name: null },
  ].slice(0, 8),
  setPlayers: (newPlayers) => set({ players: newPlayers }),
}));

export default useStore;
