export const colors = {
  background: '#0D0E11',
  backgroundAlt: '#13151B',
  displayBackground: '#1C1F26',
  primary: '#FF9500',
  primaryAlt: '#FFB347',
  accent: '#5A67D8',
  accentAlt: '#7F9CF5',
  buttonDark: '#252932',
  buttonDarkAlt: '#2E3440',
  buttonLight: '#343B48',
  buttonOutline: '#3E4552',
  operatorActive: '#FFB347',
  operatorShadow: '#FF950022',
  textPrimary: '#FFFFFF',
  textSecondary: '#A5AFBE',
  textFaded: '#5C6572',
  danger: '#FF3B30',
  success: '#34C759'
} as const;

export type ColorKey = keyof typeof colors;
