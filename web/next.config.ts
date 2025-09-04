import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`

if (process.env.NEXT_PUBLIC_DEPLOYMENT_PLATFORM !== "docker") {
  import('@opennextjs/cloudflare').then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  }).catch((err) => {
    console.error("Failed to initialize OpenNext Cloudflare:", err);
  });
}

