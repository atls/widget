'use client'

import type { ThemeProviderProps } from './interfaces.js'

import { useUnit }                 from 'effector-react'
import { useTheme }                from 'next-themes'
import { useEffect }               from 'react'

import { $theme }                  from './model.js'
import { isThemeEnum }             from '../utils/index.js'
import { changeTheme }             from './model.js'
import { changeApplyTheme }        from './model.js'

export const UseTheme = ({ forcedTheme }: ThemeProviderProps): null => {
  const { theme, setTheme } = useTheme()
  const [activeTheme, setActiveTheme, setApplyTheme] = useUnit([
    $theme,
    changeTheme,
    changeApplyTheme,
  ])

  useEffect(() => {
    setApplyTheme(setTheme)
  }, [])

  useEffect(() => {
    if (forcedTheme && isThemeEnum(forcedTheme)) {
      setActiveTheme(forcedTheme)
    } else if (theme && isThemeEnum(theme) && theme !== activeTheme) {
      setActiveTheme(theme)
    } else {
      setTheme(activeTheme)
    }
  }, [forcedTheme, theme])

  return null
}
