import nextRedirects from "./next-redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: nextRedirects.redirects,
};

export default nextConfig;
