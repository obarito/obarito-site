import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    alternatePath?: string;
  }> = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/attesta", alternatePath: "/en/attesta", changeFrequency: "monthly", priority: 0.9 },
    { path: "/en/attesta", alternatePath: "/attesta", changeFrequency: "monthly", priority: 0.8 },
    { path: "/attesta/docs", alternatePath: "/en/attesta/docs", changeFrequency: "monthly", priority: 0.8 },
    { path: "/en/attesta/docs", alternatePath: "/attesta/docs", changeFrequency: "monthly", priority: 0.7 },
    { path: "/rewindly", changeFrequency: "monthly", priority: 0.9 },
    { path: "/rewindly/docs", changeFrequency: "monthly", priority: 0.8 },
    { path: "/support", changeFrequency: "yearly", priority: 0.6 },
    { path: "/attesta/dpa", alternatePath: "/en/attesta/dpa", changeFrequency: "yearly", priority: 0.3 },
    { path: "/en/attesta/dpa", alternatePath: "/attesta/dpa", changeFrequency: "yearly", priority: 0.2 },
    { path: "/attesta/privacy", alternatePath: "/en/attesta/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/en/attesta/privacy", alternatePath: "/attesta/privacy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/attesta/terms", alternatePath: "/en/attesta/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/en/attesta/terms", alternatePath: "/attesta/terms", changeFrequency: "yearly", priority: 0.2 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/rewindly/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/rewindly/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => {
    const germanPath = route.path.startsWith("/en/") ? route.alternatePath : route.path;
    const englishPath = route.path.startsWith("/en/") ? route.path : route.alternatePath;

    return {
      url: `${SITE_URL}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(route.alternatePath && germanPath && englishPath
        ? {
            alternates: {
              languages: {
                "de-DE": `${SITE_URL}${germanPath}`,
                en: `${SITE_URL}${englishPath}`,
                "x-default": `${SITE_URL}${germanPath}`,
              },
            },
          }
        : {}),
    };
  });
}
