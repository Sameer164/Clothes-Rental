/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Clothes-Rental' : '',
  trailingSlash: true,
  // Add assetPrefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Clothes-Rental' : '',
};

module.exports = nextConfig;
