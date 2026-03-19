import * as colors            from './colors/colors.js'
import { typography }         from '../../semantic/index.js'
import { effectsThemeTokens } from '../base/effects/index.js'
import { layoutThemeTokens }  from '../base/layout/index.js'

export const darkColors = {
  ...colors.main,
  ...colors.primary,
  ...colors.background,
  ...colors.accent,
  ...colors.contrast,
  ...colors.contrastInverted,
  ...colors.contrastLight,
} as const

export const darkThemeTokens = {
  colors: darkColors,
  ...layoutThemeTokens,
  ...effectsThemeTokens,
  typography,
} as const
