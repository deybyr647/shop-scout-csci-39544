import type { NextConfig } from "next";

// 1. Initialize next-pwa
// We use require here because next-pwa is a CommonJS package
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    // CRITICAL: PWA must be disabled in dev for Turbo to work
    disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
    reactStrictMode: true,
    reactCompiler: true,
};

// 3. Export the wrapped config
export default withPWA(nextConfig);