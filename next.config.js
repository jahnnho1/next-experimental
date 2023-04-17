/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      'api.lorem.space',
      'cdn.pixabay.com',
      'placeimg.com',
      'www.libreriahuequito.com',
      'thumbs.dreamstime.com',
      'images.unsplash.com',
      'ui-avatars.com',
      'cdna.artstation.com'
    ]
  }
}

module.exports = nextConfig
