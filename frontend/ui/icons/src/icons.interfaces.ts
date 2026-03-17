import type { SVGProps }      from 'react'
import type { vars }          from '@frontend/ui-theme/theme-css'

import type { iconSprinkles } from './icon.css.js'

export type IconSprinkles = Parameters<typeof iconSprinkles>[0]

export type IconColor = keyof typeof vars.colors

export type IconProps = IconSprinkles &
  Omit<SVGProps<SVGSVGElement>, 'color' | 'height' | 'stroke' | 'width'>
