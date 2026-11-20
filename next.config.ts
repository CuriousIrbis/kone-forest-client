import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  images: {
    unoptimized: true,
    qualities: [85, 95, 100],
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      //https://kone-forest-server.onrender.com
      {
        protocol: 'https',
        hostname: 'kone-forest-server.onrender.com',
        pathname: '/static/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '7777',
        pathname: '/static/**'
      }
    ]
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  allowedDevOrigins: ['172.20.10.2', '192.168.31.82', '192.168.31.83']
};

export default nextConfig;
