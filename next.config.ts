import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/smotown" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
