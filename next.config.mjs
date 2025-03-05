/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        middlewarePrefetch: 'flexible' // Ensure this is set if using experimental middleware
      },
};

export default nextConfig;
