import type { ReactNode } from 'react'

import localFont          from 'next/font/local'

import { fontsVars }      from '../constants/index.js'

const sfProDisplay = localFont({
  src: [
    {
      path: '../../assets/fonts/sf-pro-display/SF-Pro-Display-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/sf-pro-display/SF-Pro-Display-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const SFProDisplay = (): ReactNode => (
  <style>{`
    :root {
      ${fontsVars.sfProDisplay}: ${sfProDisplay.style.fontFamily};
    }
  `}</style>
)
