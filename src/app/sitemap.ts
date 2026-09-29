import type { MetadataRoute } from "next";
import { notes } from "@/lib/notes";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/notes/",
    "/experiments.html",
    ...notes.map((n) => `/notes/${n.slug}/`),
  ].map((p) => ({
    url: `https://curiousmachine.152-42-201-32.sslip.io${p || "/"}`,
  }));
}
