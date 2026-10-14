/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  transpilePackages: ["react-map-gl", "mapbox-gl"],
}

module.exports = nextConfig
