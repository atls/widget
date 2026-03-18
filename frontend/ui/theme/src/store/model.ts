import type { ThemeValue } from '../constants/index.js'
import type { ApplyTheme } from './interfaces.js'

import { createEvent }     from 'effector'
import { createStore }     from 'effector'

import { DEFAULT_THEME }   from '../constants/index.js'

export const changeTheme = createEvent<ThemeValue>()
export const changeApplyTheme = createEvent<ApplyTheme>()

export const $theme = createStore<ThemeValue>(DEFAULT_THEME)
export const $applyTheme = createStore<ApplyTheme>(() => undefined)

$theme.on(changeTheme, (state, theme) => theme)

$applyTheme.on(changeTheme, (apply, theme) => {
  apply(theme)
  return apply
})
$applyTheme.on(changeApplyTheme, (state, apply) => apply)
