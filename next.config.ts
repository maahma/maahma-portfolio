import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/maahma-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
