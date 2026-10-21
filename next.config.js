/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  transpilePackages: ["react-map-gl", "mapbox-gl"],
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/cv.pdf": ["./node_modules/@sparticuz/chromium/bin/**"],
  },
}

module.exports = nextConfig
