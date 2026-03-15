import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Keep support for the old dynamic folder literal name if it was ever indexed or linked
      {
        source: '/agence-web-[city]',
        destination: '/',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
