import type { MetadataRoute } from "next";
import { settings, seo } from "@/content/settings";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: settings.fullName,
    short_name: settings.name,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f2",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
    ],
  };
}
