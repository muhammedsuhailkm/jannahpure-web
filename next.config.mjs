/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats — AVIF is smaller than WebP, with WebP as fallback
    formats: ["image/avif", "image/webp"],

    // Tuned breakpoints to match actual layout widths used across the site
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Increase the minimum cache TTL for optimized images (in seconds)
    // 60 days — once optimized, serve from cache for a long time
    minimumCacheTTL: 5184000,
  },

  // Enable compression for all responses
  compress: true,
};

export default nextConfig;
