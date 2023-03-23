/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Dodaj tę linię
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
