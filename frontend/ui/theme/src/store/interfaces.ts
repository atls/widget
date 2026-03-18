import type { PropsWithChildren } from 'react'

import type { ThemeValue }        from '../constants/index.js'

export type ApplyTheme = (theme: string) => void

export interface ThemeProviderProps extends PropsWithChildren {
  forcedTheme?: ThemeValue
}
