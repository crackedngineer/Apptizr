import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
console.log("NODE_ENV:", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

