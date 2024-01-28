/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["haqai.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
