/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["images.unsplash.com", "thrangra.sirv.com"]
  },
};

module.exports = nextConfig;
