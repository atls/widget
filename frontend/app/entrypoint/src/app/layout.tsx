import type { ReactNode }   from 'react'

import { sfProDisplayFont } from '@frontend/ui-theme/fonts'

import { Providers }        from './providers.js'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='ru' className={sfProDisplayFont.variable}>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export default RootLayout
