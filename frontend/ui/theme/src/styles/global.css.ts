import { globalStyle } from '@vanilla-extract/css'

globalStyle('html', {
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  height: '100%',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  minHeight: '100%',
  overflowX: 'hidden',
})
