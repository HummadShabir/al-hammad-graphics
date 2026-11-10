/** @type {import('next').NextConfig} */
// When deployed to GitHub Pages the site lives at /<repo-name>.
const repo = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
