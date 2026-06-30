import { ImageResponse } from "next/og";
import { settings, seo } from "@/content/settings";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#3b1a47",
          color: "#f8ffe8",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#ff5c8a", fontWeight: 700 }}>
          {settings.fullName}
        </div>
        <div style={{ fontSize: 140, lineHeight: 1, fontWeight: 700 }}>Olá :)</div>
        <div style={{ fontSize: 32, color: "#c9b5d2" }}>
          {settings.roles.join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}
