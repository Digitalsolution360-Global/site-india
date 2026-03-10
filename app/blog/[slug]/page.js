import BlogDetailClient from "./blogDetailClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";
const SITE_URL = "https://www.digitalsolution360.in";

async function fetchPost(slug) {
  try {
    const res = await fetch(`${API_BASE}/posts/${slug}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) return json.data;
  } catch {}
  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) return {};

  const title = post.meta_title || post.post_name;
  const description =
    post.meta_description ||
    (post.post_description
      ? post.post_description.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, 160)
      : "");
  const keywords = post.meta_keyword || "";
  const ogImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `/og-default.webp`
    : "/og-default.webp";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogSlugPage() {
  return <BlogDetailClient />;
}
