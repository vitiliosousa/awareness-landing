import type { MetadataRoute } from "next";
import { artigos } from "@/lib/blog";
import { SITE_URL } from "@/lib/marca";

// As páginas do site e os artigos do blog. Só os artigos têm uma data fiável (a de publicação).
export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/plataforma`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/solucoes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/perguntas`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contacto`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/termos`, changeFrequency: "yearly", priority: 0.3 },
  ];
  return [...paginas, ...artigos.map((a) => ({ url: `${SITE_URL}/blog/${a.slug}`, lastModified: a.data, changeFrequency: "yearly" as const, priority: 0.6 }))];
}
