/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Disable ESLint check during build/dev
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
