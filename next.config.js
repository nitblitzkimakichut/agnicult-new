/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Uncomment this if deploying to GitHub Pages
  // basePath: '/agnicult',
  
  // Temporarily ignore TypeScript errors during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  // Add this for Netlify
  trailingSlash: true,
  
  // Ensure static export for Netlify
  output: 'export',
}

module.exports = nextConfig 