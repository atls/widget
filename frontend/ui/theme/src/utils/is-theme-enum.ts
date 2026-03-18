import type { ThemeValue } from '../constants/index.js'

import { ThemeEnum }       from '../constants/index.js'

export const isThemeEnum = (theme: string): theme is ThemeValue =>
  Object.values(ThemeEnum).includes(theme as ThemeValue)
