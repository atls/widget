/// <reference path="./next-font.d.ts" />

import type { ReactNode } from 'react'

import localFont          from 'next/font/local'

import { fontsVars }      from '../constants/index.js'

const sfProDisplayLocal = localFont({
  src: [
    { path: '../../assets/fonts/sf-pro-display/SF-Pro-Display-Regular.ttf', weight: '400' },
    { path: '../../assets/fonts/sf-pro-display/SF-Pro-Display-Semibold.ttf', weight: '600' },
  ],
  display: 'swap',
})

const sfProDisplayFallback = {
  style: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
}

const sfProDisplay = process.env.IS_STORYBOOK === 'true' ? sfProDisplayFallback : sfProDisplayLocal

export const SfProDisplayFont = (): ReactNode => (
  <style>{`
    :root {
      ${fontsVars.sfProDisplay}: ${sfProDisplay.style.fontFamily};
    }
  `}</style>
)
