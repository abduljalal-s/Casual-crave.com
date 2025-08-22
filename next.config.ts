/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  output: 'standalone', // Recommended for Cloudflare Workers or external deployments

  // Only add experimental if you actually need server actions
  // experimental: {
  //   serverActions: {}, // valid object if needed
  // },
};

module.exports = nextConfig;
