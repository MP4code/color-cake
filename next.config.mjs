/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ajoutez ici des configurations webpack personnalisées si nécessaire
    return config;
  },
  // Ajoutez cette ligne si vous utilisez des modules CSS
  cssModules: true,
  // Désactivez temporairement ESLint pendant le build si nécessaire
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
