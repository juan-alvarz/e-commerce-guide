/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.vandal.net",
      "ventaspop-images.s3-us-east-2.amazonaws.com",
      "image.api.playstation.com",
    ],
  },
};

module.exports = nextConfig;
