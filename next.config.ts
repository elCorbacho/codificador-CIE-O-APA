import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["zod"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
