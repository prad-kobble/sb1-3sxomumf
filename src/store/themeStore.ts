import { create } from 'zustand';

interface ThemeStore {
  colorScheme: 'light' | 'dark';
}

export const useThemeStore = create<ThemeStore>(() => ({
  colorScheme: 'light'
}));