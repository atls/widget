import type { StorybookConfig } from '@storybook/nextjs'

import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'
import MiniCssExtractPlugin     from 'mini-css-extract-plugin'

const config: StorybookConfig = {
  stories: ['../../**/stories/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
  staticDirs: ['../../theme/assets'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        plugins: [new VanillaExtractPlugin({ identifiers: 'short' }), new MiniCssExtractPlugin()],
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: ['style-loader', { loader: 'css-loader', options: {} }],
            exclude: /\.vanilla\.css$/,
          },
          {
            test: /\.vanilla\.css$/i,
            sideEffects: true,
            use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }],
          },
        ],
      },
    },
  ],
  env: (envConfig) => ({
    ...envConfig,
    IS_STORYBOOK: 'true',
  }),
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (webpackConfig) => {
    webpackConfig.resolve = webpackConfig.resolve || {}
    webpackConfig.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    }

    if (webpackConfig.resolve.fallback) {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        assert: false,
        url: false,
      }
    }

    return webpackConfig
  },
}

export default config
