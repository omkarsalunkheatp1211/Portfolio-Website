/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Adds trailing slashes to URLs
}

module.exports = nextConfig 