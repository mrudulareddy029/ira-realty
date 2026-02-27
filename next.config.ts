import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "irarealty.in",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
