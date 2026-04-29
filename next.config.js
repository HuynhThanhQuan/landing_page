/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/twitter/twemoji@latest/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'hrchannels.com',
      },
      {
        protocol: 'https',
        hostname: 'svglogos.net',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.haitrieu.com',
      },
      {
        protocol: 'https',
        hostname: 'www.correlation-one.com',
      },
      {
        protocol: 'https',
        hostname: 'solutions.viettel.vn',
      },
      {
        protocol: 'https',
        hostname: 'vectorseek.com',
      },
      {
        protocol: 'https',
        hostname: 'svtech.com.vn',
      },
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
}

module.exports = nextConfig 