/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = {
  // Inne istniejące opcje konfiguracyjne...
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      // Dodaj więcej ścieżek, jeśli masz inne strony
    };
  },
};

