import type { Metadata } from "next";
import "../globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata("en");

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
