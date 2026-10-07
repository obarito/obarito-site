/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // The generated stylesheet is small enough to inline. Removing its
    // request lets the browser paint immediately after receiving the HTML.
    inlineCss: true,
  },
};

export default nextConfig;
