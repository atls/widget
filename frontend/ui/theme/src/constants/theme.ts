export const ThemeEnum = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ThemeValue = (typeof ThemeEnum)[keyof typeof ThemeEnum]

export const DEFAULT_THEME = ThemeEnum.LIGHT

export const THEME_KEY = 'widget-theme'
