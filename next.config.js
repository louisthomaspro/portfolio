/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  experimental: {
    agentUpgrade: "security",
  },
  transpilePackages: ["react-map-gl", "mapbox-gl"],
}

module.exports = nextConfig
