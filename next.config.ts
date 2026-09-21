import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/:slug',
        destination: '/iqbal-lukman/projects/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
