import { createTheme } from '@mantine/core';
import { colors } from './colors';

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 6,
  colors: {
    dark: [
      colors.text.primary,
      colors.text.secondary,
      colors.text.tertiary,
      '#5C5F66',
      colors.background.tertiary,
      colors.background.secondary,
      colors.background.primary,
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
});