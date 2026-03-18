import * as colors            from './colors/colors.js'
import { typography }         from '../../semantic/index.js'
import { effectsThemeTokens } from '../base/effects/index.js'
import { layoutThemeTokens }  from '../base/layout/index.js'

export const lightColors = {
  ...colors.main,
  ...colors.primary,
  ...colors.accent,
  ...colors.contrast,
  ...colors.contrastInverted,
  ...colors.contrastLight,
} as const

export const lightThemeTokens = {
  colors: lightColors,
  ...layoutThemeTokens,
  ...effectsThemeTokens,
  typography,
} as const
