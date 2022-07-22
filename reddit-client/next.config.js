/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  images: {
    domains: [
      'redditclonea4f35ee94c414237ada7a8e3f084e8ed154921-dev.s3.ap-southeast-2.amazonaws.com',
      'source.unsplash.com'
    ]
  }
}

module.exports = nextConfig
