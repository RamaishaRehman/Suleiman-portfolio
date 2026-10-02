import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The parent folders contain another package-lock.json, so pin the workspace root here.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
