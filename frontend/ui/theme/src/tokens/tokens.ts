import type { ThemeValue }  from '../constants/index.js'

import { ThemeEnum }        from '../constants/index.js'
import { darkThemeTokens }  from './dark/index.js'
import { lightThemeTokens } from './light/index.js'

export const tokens: Record<ThemeValue, typeof lightThemeTokens> = {
  [ThemeEnum.LIGHT]: lightThemeTokens,
  [ThemeEnum.DARK]: darkThemeTokens,
}
