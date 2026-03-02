import type { NextConfig } from 'next'

import { dirname }         from 'node:path'
import { resolve }         from 'node:path'
import { fileURLToPath }   from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(rootDir, '../../..')

const nextConfig: NextConfig = {
  turbopack: {
    root: workspaceRoot,
  },
  experimental: {
    externalDir: true,
  },
}

export default nextConfig
