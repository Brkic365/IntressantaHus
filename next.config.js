/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "intressantahus.se", "wsrv.nl"],
  },
};

module.exports = nextConfig;
