'use client'

import type { ReactNode } from 'react'

import { ThemeProvider }  from '@frontend/ui-theme'

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
