import type { NextConfig } from "next";

// The repository name the site is published under on GitHub Pages. The site is
// served from https://<user>.github.io/<repoName>, so assets and routes must be
// prefixed with `/<repoName>` in production builds.
const repoName = "resume";
const isProd = process.env.NODE_ENV === "production";

// Sub-path the site is served under in production (empty during local dev).
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be hosted on GitHub Pages
  // (no Node.js server required).
  output: "export",
  // Only apply the sub-path prefix for production builds; local `next dev`
  // keeps running at the root so development stays simple.
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : "",
  // Exposed to client code so we can prefix `public/` asset URLs ourselves;
  // next/image (unoptimized) does not add basePath to public assets.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
