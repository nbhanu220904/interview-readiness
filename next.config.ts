import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dezyre.gumlet.io",
      },
    ],
  },
};

export default nextConfig;
