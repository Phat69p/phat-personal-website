import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/phat-personal-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
