import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggle: () => void;
};

export const useThemeStore = create<ThemeState>()((set) => ({
  darkMode: false,
  toggle: () => set((state) => ({ darkMode: !state.darkMode })),
}));
