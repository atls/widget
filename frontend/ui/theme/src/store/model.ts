import type { ThemeValue } from '../constants/index.js'
import type { ApplyTheme } from './interfaces.js'

import { createEffect }    from 'effector'
import { createEvent }     from 'effector'
import { createStore }     from 'effector'

import { DEFAULT_THEME }   from '../constants/index.js'
import { THEME_KEY }       from '../constants/index.js'
import { isThemeEnum }     from '../utils/index.js'

export const changeTheme = createEvent<ThemeValue>()
export const changeApplyTheme = createEvent<ApplyTheme>()

export const $theme = createStore<ThemeValue>(DEFAULT_THEME)
export const $applyTheme = createStore<ApplyTheme>(() => undefined)

const getLocalThemeFx = createEffect((): ThemeValue => {
  const localStorageTheme = localStorage.getItem(THEME_KEY)

  if (!localStorageTheme || !isThemeEnum(localStorageTheme)) return DEFAULT_THEME

  return localStorageTheme
})

$theme.on(changeTheme, (state, theme) => theme)
$theme.on(getLocalThemeFx.done, (state, { result }) => result)

$applyTheme.on(changeTheme, (state, theme) => {
  state(theme)
})
$applyTheme.on(changeApplyTheme, (state, apply) => apply)

getLocalThemeFx()
