/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  serverExternalPackages: ["puppeteer-core"],
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    localPatterns: [
      {
        pathname: "/_next/static/media/**",
      },
      {
        pathname: "/_next/static/immutable/media/**",
      },
      {
        pathname: "**",
        search: "",
      },
    ],
  },
  transpilePackages: ["react-map-gl", "mapbox-gl"],
}

module.exports = nextConfig
