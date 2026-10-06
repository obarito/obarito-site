import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/attesta", changeFrequency: "monthly", priority: 0.9 },
    { path: "/attesta/docs", changeFrequency: "monthly", priority: 0.8 },
    { path: "/rewindly", changeFrequency: "monthly", priority: 0.9 },
    { path: "/rewindly/docs", changeFrequency: "monthly", priority: 0.8 },
    { path: "/support", changeFrequency: "yearly", priority: 0.6 },
    { path: "/attesta/dpa", changeFrequency: "yearly", priority: 0.3 },
    { path: "/attesta/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/attesta/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/rewindly/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/rewindly/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
