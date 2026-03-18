import type { NextConfig }            from 'next'

import { dirname }                    from 'node:path'
import { resolve }                    from 'node:path'
import { fileURLToPath }              from 'node:url'

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const rootDir = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(rootDir, '../../..')

const withVanillaExtract = createVanillaExtractPlugin({ turbopackMode: 'on', identifiers: 'short' })

const nextConfig: NextConfig = {
  turbopack: {
    root: workspaceRoot,
  },
  output: 'standalone',
  experimental: {
    externalDir: true,
  },
}

export default withVanillaExtract(nextConfig)
