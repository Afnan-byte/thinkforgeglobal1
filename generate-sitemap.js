import fs from "fs-extra";
import path from "path";
import fetch from "node-fetch";

const BASE_URL = "https://www.thinkforgeglobal.com";
const sitemapPath = path.resolve("public/sitemap.xml");

// Your actual Google Sheet CSV URL
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfsX1M35N5TpwciUq2onec2hhq4jS3405lkOTLxAIeFOEHPVyc5tM1v8yBAFes4XfLpzeUnLVpVTGY/pub?gid=0&single=true&output=csv";

// Define static routes (anchors optional for internal linking)
const staticRoutes = [
  "/",
  "/#hero",
  "/#about",
  "/#services",
  "/#team",
  "/blog",
  "/careers",
  "/connect",
];

// Fetch blog slugs dynamically from your Google Sheet
async function fetchBlogSlugs() {
  try {
    const res = await fetch(GOOGLE_SHEET_CSV_URL);
    const csv = await res.text();
    const rows = csv.split("\n").slice(1);
    const slugs = [];

    rows.forEach((row) => {
      const cols = row.split(",");
      const slug = cols[0]?.trim(); // slug column
      const date = cols[2] && !isNaN(new Date(cols[2]).getTime())
        ? new Date(cols[2]).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];
      if (slug) slugs.push({ slug, date });
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

  // Add static routes
  staticRoutes.forEach((route) => {
    urls.push({
      loc: `${BASE_URL}${route}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.9,
    });
  });

  // Add dynamic blog pages
  blogSlugs.forEach(({ slug, date }) => {
    urls.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: date,
      changefreq: "daily",
      priority: 0.8,
    });
  });

  // Generate XML
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
  console.log(`✅ Sitemap successfully generated with ${urls.length} URLs.`);
}

generateSitemap();
