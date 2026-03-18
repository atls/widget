import './styles/global.css.js'

import { createTheme }         from '@vanilla-extract/css'
import { createThemeContract } from '@vanilla-extract/css'

import { darkThemeTokens }     from './tokens/index.js'
import { lightThemeTokens }    from './tokens/index.js'

export const vars = createThemeContract(lightThemeTokens)

export const lightTheme = createTheme(vars, lightThemeTokens)
export const darkTheme = createTheme(vars, darkThemeTokens)

export * from './constants/index.js'
