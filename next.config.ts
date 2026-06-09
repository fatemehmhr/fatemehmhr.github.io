import type { NextConfig } from "next";

// For a GitHub user/organization page (repo name = <username>.github.io),
// the site is served from the root: https://<username>.github.io/
// No basePath or assetPrefix is needed.
const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be hosted on GitHub Pages
  // (no Node.js server required).
  output: "export",

  // GitHub Pages cannot run the Next.js image optimizer, so serve images as-is.
  images: {
    unoptimized: true,
  },

  // Generate `path/index.html` files which GitHub Pages serves reliably.
  trailingSlash: true,

  // Pin the workspace root so a stray lockfile elsewhere can't shift it.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
