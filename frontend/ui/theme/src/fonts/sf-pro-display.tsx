import localFont from 'next/font/local'

export const sfProDisplayFont = localFont({
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
  variable: '--font-sf-pro-display',
})
