/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/admin': { page: '/admin' },
      '/create': { page: '/create' },
      '/guest/login': { page: '/guest/login' },
      '/guest/register': { page: '/guest/register' },
      '/profile': { page: '/profile' },
      '/thread': { page: '/thread' },
      '/update': { page: '/update' },
      '/[username]': { page: '/[username]' },
      '/[username]/likes': { page: '/[username]/likes' },
      '/thread/[slug]': { page: '/thread/[slug]' },
      '/update/[threadSlug]': { page: '/update/[threadSlug]' },
    };
  },
  images: {
    domains: [
      'cdn-icons-png.flaticon.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'fakeimg.pl',
        port: '',
        pathname: '/2000x700/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        port: '',
        pathname: '/typography-plugin/**',
      },
    ]
  },
}

module.exports = nextConfig
