import fs from "fs-extra";
import path from "path";
import fetch from "node-fetch";

const BASE_URL = "https://www.thinkforgeglobal.com";
const sitemapPath = path.resolve("public/sitemap.xml");

// Your actual Google Sheet CSV URL
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfsX1M35N5TpwciUq2onec2hhq4jS3405lkOTLxAIeFOEHPVyc5tM1v8yBAFes4XfLpzeUnLVpVTGY/pub?gid=0&single=true&output=csv";

// Define static routes (Removed fragment URLs like /#hero)
const staticRoutes = [
  "/",
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
      const dateStr = cols[2]?.trim(); // date column
      let lastmod;

      if (dateStr) {
        const parsedDate = new Date(dateStr);
        const year = parsedDate.getFullYear();

        // Check if date is valid AND the year is reasonable (e.g., after 1990)
        // This will catch errors like "0202-12-09"
        if (!isNaN(parsedDate.getTime()) && year > 1990) {
          lastmod = parsedDate.toISOString();
        } else {
          // The date in the sheet is invalid or empty
          // We'll fall back to today's date to prevent sitemap errors
          console.warn(
            `⚠️ Invalid or old date "${dateStr}" for slug "${slug}". Defaulting to today.`
          );
          lastmod = new Date().toISOString();
        }
      } else {
        // No date provided, default to today
        lastmod = new Date().toISOString();
      }

      if (slug) slugs.push({ slug, date: lastmod });
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

  // Add static routes
  staticRoutes.forEach((route) => {
    urls.push({
      loc: `${BASE_URL}${route}`,
      lastmod: today, // Use consistent ISO string date
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.9,
    });
  });

  // Add dynamic blog pages
  blogSlugs.forEach(({ slug, date }) => {
    urls.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: date, // Use the date from the sheet (or fallback)
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