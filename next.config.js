/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@terminal-bird/theme'],
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Uncomment the following lines if deploying to GitHub Pages (static export):
  // output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    // unoptimized: true, // Required for static export
  },
};

export default nextConfig;
