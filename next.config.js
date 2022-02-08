const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// import withBundleAnalyzer from '@next/bundle-analyzer';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const nextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    domains: [
      'local-laravel-shop.com',
      'local-rad-stack.com',
      'portfolio85.s3.us-east-2.amazonaws.com',
    ],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
