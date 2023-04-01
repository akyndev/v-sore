/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/id/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**"
      }
    ],
  },
};

module.exports = nextConfig;
