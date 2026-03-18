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
  const { resolvedTheme, setTheme } = useTheme()
  const [activeTheme, setActiveTheme, setApplyTheme] = useUnit([
    $theme,
    changeTheme,
    changeApplyTheme,
  ])

  useEffect(() => {
    setApplyTheme(setTheme)
  }, [setApplyTheme, setTheme])

  useEffect(() => {
    if (forcedTheme && isThemeEnum(forcedTheme)) {
      if (forcedTheme !== activeTheme) setActiveTheme(forcedTheme)
      return
    }

    if (resolvedTheme && isThemeEnum(resolvedTheme) && resolvedTheme !== activeTheme) {
      setActiveTheme(resolvedTheme)
    }
  }, [forcedTheme, resolvedTheme, activeTheme, setActiveTheme])

  return null
}
