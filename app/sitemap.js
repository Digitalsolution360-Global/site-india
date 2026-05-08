const BASE_URL = "https://www.digitalsolution360.in";
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

/* ── All known static routes ── */
const staticRoutes = [
  "/",
  "/about-us",
  "/services",
  "/metro-cities",
  "/contact-us",
  "/blog",
  "/careers",
  "/case-studies",
  "/case-studies/app-development",
  "/case-studies/gmb",
  "/case-studies/gmb-promotion",
  "/case-studies/seo-project",
  "/case-studies/social-media-service",
  "/case-studies/website",
  "/market-we-serve",
  "/market-we-serve/gmb",
  "/market-we-serve/marketing",
  "/market-we-serve/web",
  "/market-we-serve/social-media",
  "/market-we-serve/content-writing",
  "/market-we-serve/wordpress",
  "/market-we-serve/app",
  "/privacy-policy",
  "/terms-conditions",
  // Category pages
  "/digital-marketing",
  "/website-development",
  "/seo",
  "/branding",
  "/social-media-marketing",
  "/automation",
  "/managed-services",
  // Sub-service pages — root level
  "/performance-marketing",
  "/growth-marketing",
  "/google-ads-management",
  "/facebook-instagram-ads",
  "/web-design",
  "/ui-ux-design",
  "/wordpress-development",
  "/shopify-development",
  "/landing-page-design",
  "/local-seo",
  "/ecommerce-seo",
  "/technical-seo",
  "/on-page-seo",
  "/off-page-seo",
  "/seo-audit",
  "/ai-seo",
  "/brand-identity-design",
  "/logo-design",
  "/graphic-design",
  "/creative-for-ads",
  "/performance-creatives",
  "/social-media-management",
  "/instagram-marketing",
  "/facebook-marketing",
  "/linkedin-marketing",
  "/youtube-marketing",
  "/influencer-marketing",
  "/short-video-marketing",
  "/marketing-automation",
  "/crm-automation",
  "/lead-automation",
  "/email-automation",
  "/sales-funnel-automation",
  "/ai-marketing-automation",
  "/digital-marketing-managed",
  "/seo-managed",
  "/ppc-managed",
  "/social-media-managed",
  "/startup-marketing",
  "/saas-marketing",
  "/ecommerce-marketing",
  "/b2b-marketing",
];

/* ── Helper: priority based on depth ── */
function getPriority(path) {
  if (path === "/") return 1.0;
  const depth = path.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;
  return 0.6;
}

/* ── Helper: changefreq based on type ── */
function getChangeFreq(path) {
  if (path === "/" || path === "/blog") return "daily";
  return "weekly";
}

/* ── Fetch all blog post slugs ── */
async function fetchAllBlogSlugs() {
  try {
    // Fetch first page to get total count
    const firstRes = await fetch(`${API_BASE}/posts?page=1&limit=100`, {
      next: { revalidate: 3600 },
    });
    const firstJson = await firstRes.json();
    if (!firstJson.success) return [];

    let allPosts = firstJson.data || [];
    const totalPages = firstJson.pagination?.totalPages || 1;

    // Fetch remaining pages if any
    for (let p = 2; p <= totalPages; p++) {
      const res = await fetch(`${API_BASE}/posts?page=${p}&limit=100`, {
        next: { revalidate: 3600 },
      });
      const json = await res.json();
      if (json.success && json.data) {
        allPosts = allPosts.concat(json.data);
      }
    }

    return allPosts.map((post) => ({
      slug: post.post_slug,
      updatedAt: post.updated_at || post.created_at,
    }));
  } catch (err) {
    console.error("Sitemap: failed to fetch blog posts", err);
    return [];
  }
}

/* ── Fetch all city slugs across all market categories ── */
async function fetchAllCitySlugs() {
  const categories = [
    "Google Business",
    "Digital Marketing",
    "Web Development",
    "Social Media",
    "Content Writing",
    "Wordpress Development",
    "app",
  ];

  try {
    const results = await Promise.all(
      categories.map(async (cat) => {
        try {
          const res = await fetch(
            `${API_BASE}/market/${encodeURIComponent(cat)}/cities`,
            { next: { revalidate: 3600 } }
          );
          const json = await res.json();
          if (json.success && json.data) {
            return json.data.map((city) => city.city_slug).filter(Boolean);
          }
          return [];
        } catch {
          return [];
        }
      })
    );

    // Deduplicate slugs
    return [...new Set(results.flat())];
  } catch (err) {
    console.error("Sitemap: failed to fetch city slugs", err);
    return [];
  }
}

/* ── Fetch all metro-city slugs across all market categories ── */
async function fetchAllMetroCitySlugs() {
  const categories = [
    "Google Business",
    "Digital Marketing",
    "Web Development",
    "Social Media",
    "Content Writing",
    "Wordpress Development",
  ];

  try {
    const results = await Promise.all(
      categories.map(async (cat) => {
        try {
          const res = await fetch(
            `${API_BASE}/market/${encodeURIComponent(cat)}/metrocities`,
            { next: { revalidate: 3600 } }
          );
          const json = await res.json();
          if (json.success && json.data) {
            return json.data.map((m) => m.metrocity_slug).filter(Boolean);
          }
          return [];
        } catch {
          return [];
        }
      })
    );

    return [...new Set(results.flat())];
  } catch (err) {
    console.error("Sitemap: failed to fetch metro city slugs", err);
    return [];
  }
}

/* ── Fetch all state slugs ── */
async function fetchAllStateSlugs() {
  try {
    const res = await fetch(`${API_BASE}/states`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) {
      return json.data.map((s) => s.slug).filter(Boolean);
    }
    return [];
  } catch (err) {
    console.error("Sitemap: failed to fetch state slugs", err);
    return [];
  }
}

/* ── Next.js sitemap function ── */
export default async function sitemap() {
  const [blogPosts, citySlugs, metroCitySlugs, stateSlugs] = await Promise.all([
    fetchAllBlogSlugs(),
    fetchAllCitySlugs(),
    fetchAllMetroCitySlugs(),
    fetchAllStateSlugs(),
  ]);

  const now = new Date().toISOString();

  // Static routes
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: getChangeFreq(route),
    priority: getPriority(route),
  }));

  // Blog post routes
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: post.updatedAt
      ? new Date(post.updatedAt).toISOString()
      : now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // City/market-we-serve routes
  const cityEntries = citySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Metro city routes
  const metroCityEntries = metroCitySlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // State routes
  const stateEntries = stateSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...cityEntries, ...metroCityEntries, ...stateEntries];
}
