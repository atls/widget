import type { ReactNode } from 'react'

import { Providers }      from './providers.js'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='ru'>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export default RootLayout
