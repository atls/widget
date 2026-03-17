import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@frontend/ui-theme/theme-css'

export const iconProperties = defineProperties({
  dynamicProperties: {
    width: true,
    height: true,
    color: true,
    stroke: true,
    rotate: true,
    cursor: true,
  },
  staticProperties: {
    width: vars.spaces,
    height: vars.spaces,
    color: vars.colors,
    stroke: vars.colors,
  },
})

export const iconSprinkles = createRainbowSprinkles(iconProperties)
