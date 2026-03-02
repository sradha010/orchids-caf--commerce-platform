import type { NextConfig } from "next";
import { createRequire } from "node:module";

// Safely create a 'require' function for ESM environment
const require = createRequire(import.meta.url);

// Resolve the loader path correctly
const loaderPath = require.resolve('orchids-visual-edits/loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  /* REMOVED: outputFileTracingRoot: path.resolve(__dirname, '../../')
     This was causing the ENOENT error by looking outside the Vercel build directory.
  */
  typescript: {
    // Keep this if you want to ignore TS errors during the build process
    ignoreBuildErrors: true,
  },
  eslint: {
    // Keep this to skip linting during the build process
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Next.js 15 expects Turbopack rules inside the 'experimental' block
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [loaderPath],
        },
      },
    },
  },
} as NextConfig;

export default nextConfig;

// Orchids restart: 1772447922794