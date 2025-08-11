export const colors = {
  background: '#121212',
  displayBackground: '#1E1E1E',
  primary: '#FF9500',
  buttonDark: '#2C2C2C',
  buttonLight: '#3A3A3A',
  textPrimary: '#FFFFFF',
  textSecondary: '#B5B5B5',
  danger: '#FF3B30'
} as const;

export type ColorKey = keyof typeof colors;
