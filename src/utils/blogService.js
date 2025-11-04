import axios from "axios";
import Papa from "papaparse";


const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfsX1M35N5TpwciUq2onec2hhq4jS3405lkOTLxAIeFOEHPVyc5tM1v8yBAFes4XfLpzeUnLVpVTGY/pub?gid=0&single=true&output=csv";

export async function fetchAllBlogs() {
  try {
    const response = await axios.get(`${GOOGLE_SHEET_CSV_URL}&t=${Date.now()}`, {
  responseType: "text",
});
    console.log("adasdasd",response)

    const parsed = Papa.parse(response.data, {
      header: true,
      skipEmptyLines: true,
    });
    console.log("parsed",parsed)
    const blogs = parsed.data
      .filter((row) => row.slug && row.title) 
      .map((row) => ({
        slug: row.slug || "",
        title: row.title || "",
        date: row.date || "",
        categories: row.categories
          ? row.categories.split(",").map((c) => c.trim())
          : [],
        imageUrl: row.ImageUrl || "",
        introduction: row.introduction || "",
        subtitle1: row.subtitle1 || "",
        subcontent1: row.subcontent1 || "",
      }));

    return blogs;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function fetchBlogBySlug(slug) {
  try {
    const blogs = await fetchAllBlogs();
    return blogs.find((b) => b.slug === slug) || null;
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    return null;
  }
}