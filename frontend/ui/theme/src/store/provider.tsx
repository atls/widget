'use client'

import type { ThemeProviderProps }            from './interfaces.js'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

import { ThemeEnum }                          from '../constants/index.js'
import { THEME_KEY }                          from '../constants/index.js'
import { SfProDisplayFont }                   from '../fonts/index.js'
import { UseTheme }                           from './use-theme.js'
import { darkTheme }                          from '../theme.css.js'
import { lightTheme }                         from '../theme.css.js'

export const ThemeProvider = ({ children, forcedTheme }: ThemeProviderProps) => (
  <NextThemeProvider
    attribute='class'
    storageKey={THEME_KEY}
    defaultTheme={ThemeEnum.LIGHT}
    forcedTheme={forcedTheme}
    themes={Object.values(ThemeEnum)}
    value={{
      [ThemeEnum.LIGHT]: lightTheme,
      [ThemeEnum.DARK]: darkTheme,
    }}
  >
    <UseTheme forcedTheme={forcedTheme} />
    <SfProDisplayFont />
    {children}
  </NextThemeProvider>
)
