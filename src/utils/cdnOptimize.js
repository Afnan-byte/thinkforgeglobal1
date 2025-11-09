export function optimizeImage(url, width = 1200) {
  if (!url || !url.includes("/upload/")) return url;

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width},dpr_auto/`
  );
}
