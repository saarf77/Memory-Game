/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This base path should match your GitHub repository name
  // For example, if your repo is "username.github.io/memory-game"
  basePath: "/memory-game",
}

module.exports = nextConfig

