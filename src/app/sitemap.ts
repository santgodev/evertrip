import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { locales } from "@/i18n/config";

const SITE_URL = "https://evertrip.co";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/all-routes"];
  const routePaths = routes.map((route) => `/${route.slug}`);
  const allPaths = [...staticPaths, ...routePaths];

  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    }))
  );
}
