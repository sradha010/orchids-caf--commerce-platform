import type { NextConfig } from "next";
import { createRequire } from "node:module";

// This allows you to use 'require' safely in a modern ESM (.ts) file
const require = createRequire(import.meta.url);

// Loader path from orchids-visual-edits
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
  /* FIX: Removed 'outputFileTracingRoot' which was causing the 
     ENOENT error by looking two levels above the Vercel build directory.
  */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [loaderPath]
        }
      }
    }
  }
} as NextConfig;

export default nextConfig;

// Orchids restart: 1772447922794
