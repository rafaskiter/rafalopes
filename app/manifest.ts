import type { MetadataRoute } from "next";
import { settings, seo } from "@/content/settings";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: settings.fullName,
    short_name: settings.name,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f0fece",
    theme_color: "#100325",
    icons: [
      { src: "/icon", sizes: "128x128", type: "image/png" },
    ],
  };
}
