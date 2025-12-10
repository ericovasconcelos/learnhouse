/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/umami/script.js',
        destination: `https://eu.umami.is/script.js`,
      },
      {
        source: '/umami/api/send',
        destination: `https://eu.umami.is/api/send`,
      },
    ]
  },
  reactStrictMode: false,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ADICIONE ESTE BLOCO:
  env: {
    NEXT_PUBLIC_LEARNHOUSE_API_URL: process.env.NEXT_PUBLIC_LEARNHOUSE_API_URL,
    NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL: process.env.NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL,
    NEXT_PUBLIC_LEARNHOUSE_DOMAIN: process.env.NEXT_PUBLIC_LEARNHOUSE_DOMAIN,
    NEXT_PUBLIC_LEARNHOUSE_Top_DOMAIN: process.env.NEXT_PUBLIC_LEARNHOUSE_Top_DOMAIN,
  },
}

module.exports = nextConfig
