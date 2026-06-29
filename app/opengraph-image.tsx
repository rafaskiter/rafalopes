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
          background: "#0a0a0a",
          color: "#f6f5f2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#9b9b94" }}>
          {settings.fullName}
        </div>
        <div style={{ fontSize: 120, lineHeight: 1 }}>Olá :)</div>
        <div style={{ fontSize: 32, color: "#9b9b94" }}>
          {settings.roles.join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}
