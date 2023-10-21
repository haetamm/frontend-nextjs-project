/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
