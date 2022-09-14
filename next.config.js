/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com","www.freepik.com"],
    deviceSizes: [
      320, 375, 414, 507, 540, 694, 720, 768, 960, 1080, 1200, 1280, 1920, 2048,
      3840
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 40]
  }
};
