/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "serverless",
  reactStrictMode: true,
  images: {
    domains: [
      'cdn-icons-png.flaticon.com'
    ],
  },
}

module.exports = nextConfig
