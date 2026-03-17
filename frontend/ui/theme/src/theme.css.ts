import './styles/global.css.js'

import { createTheme } from '@vanilla-extract/css'

import { stubTokens }  from './tokens/index.js'

export const [theme, vars] = createTheme(stubTokens)
