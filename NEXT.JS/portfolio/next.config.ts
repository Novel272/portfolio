import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: "mohammed-0c",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  wideScanClientFileUpload: true,
  webpack: (config) => {
    return config;
  },
});
