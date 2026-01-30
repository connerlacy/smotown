import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/smotown" : "",
  assetPrefix: isProd ? "/smotown/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
