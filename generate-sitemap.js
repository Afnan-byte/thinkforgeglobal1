import fs from "fs-extra";
import path from "path";
import fetch from "node-fetch";

const BASE_URL = "https://www.thinkforgeglobal.com";
const sitemapPath = path.resolve("public/sitemap.xml");

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfsX1M35N5TpwciUq2onec2hhq4jS3405lkOTLxAIeFOEHPVyc5tM1v8yBAFes4XfLpzeUnLVpVTGY/pub?gid=0&single=true&output=csv";

const staticRoutes = ["/", "/blog", "/careers", "/connect"];

// convert text to slug safely
function cleanSlug(text = "") {
  return text
    .replace(/<[^>]*>/g, "")        // remove HTML tags
    .replace(/[^\w\s-]/g, "")       // remove strange chars
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");          // spaces → hyphens
}

async function fetchBlogSlugs() {
  try {
    const res = await fetch(GOOGLE_SHEET_CSV_URL);
    const csv = await res.text();
    const rows = csv.split("\n").slice(1);
    const slugs = [];

    rows.forEach((row) => {
      const cols = row.split(",");
      const rawText = cols[0]?.trim();
      const dateStr = cols[2]?.trim();

      if (!rawText) return;

      const slug = cleanSlug(rawText);

      if (!slug || slug.length < 1) return;

      const parsedDate = new Date(dateStr);
      const validDate =
        !isNaN(parsedDate.getTime()) && parsedDate.getFullYear() > 1990
          ? parsedDate.toISOString()
          : new Date().toISOString();

      slugs.push({ slug, date: validDate });
    });

    return slugs;
  } catch (err) {
    console.warn("⚠️ Could not fetch blog slugs:", err.message);
    return [];
  }
}

async function generateSitemap() {
  console.log("⚙️ Generating SEO-friendly sitemap...");

  const blogSlugs = await fetchBlogSlugs();
  const urls = [];
  const today = new Date().toISOString();

  staticRoutes.forEach((route) => {
    urls.push({
      loc: `${BASE_URL}${route}`,
      lastmod: today,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.9,
    });
  });

  blogSlugs.forEach(({ slug, date }) => {
    urls.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: date,
      changefreq: "daily",
      priority: 0.8,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  await fs.outputFile(sitemapPath, xml);
  console.log(`✅ Sitemap created with ${urls.length} URLs.`);
}

generateSitemap();
