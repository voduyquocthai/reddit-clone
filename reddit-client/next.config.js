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
      'redditclientec33db97a41e44968a49be4b1936901e155415-dev.s3.ap-southeast-1.amazonaws.com',
      'source.unsplash.com'
    ]
  }
}

module.exports = nextConfig
