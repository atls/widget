import type { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='ru'>
    <body>{children}</body>
  </html>
)

export default RootLayout
