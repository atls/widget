import type { Preview } from '@storybook/nextjs'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'Light', value: 'rgba(235, 235, 235, 1)' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
}

export default preview
