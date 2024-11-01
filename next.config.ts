import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heropy.dev'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      }
    ]
  }
}

export default nextConfig
