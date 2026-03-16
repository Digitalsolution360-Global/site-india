import CityClient from "./cityClient";
import StateClient from "./stateClient";
import BlogDetailClient from "../blog/[slug]/blogDetailClient";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import serviceCategories from "@/app/services/serviceData";
import { notFound } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";
const SITE_URL = "https://www.digitalsolution360.in";

/* Minimal per-category data needed for JSON-LD */
const CATEGORY_SCHEMA = {
  "Google Business": {
    serviceName: "Google My Business Optimization",
    image: `/gmb-og.webp`,
    ratingsBase: 2540,
  },
  "Digital Marketing": {
    serviceName: "Digital Marketing Services",
    image: `/digital-marketing-og.webp`,
    ratingsBase: 3120,
  },
  "Web Development": {
    serviceName: "Web Development Services",
    image: `/og-home.webp`,
    ratingsBase: 1890,
  },
  "Social Media": {
    serviceName: "Social Media Marketing Services",
    image: `/social-media-og.webp`,
    ratingsBase: 2750,
  },
  "Content Writing": {
    serviceName: "Content Writing Services",
    image: `/content-writing-og.webp`,
    ratingsBase: 1650,
  },
  "Wordpress Development": {
    serviceName: "WordPress Development Services",
    image: `/wordpress-og.webp`,
    ratingsBase: 2080,
  },
};

async function fetchCity(slug) {
  try {
    const res = await fetch(`${API_BASE}/cities/${slug}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) return json.data;
  } catch {}
  return null;
}

async function fetchBlog(slug) {
  try {
    const res = await fetch(`${API_BASE}/posts/${slug}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) return json.data;
  } catch {}
  return null;
}

async function fetchState(slug) {
  try {
    const res = await fetch(`${API_BASE}/states/${slug}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) return json.data;
  } catch {}
  return null;
}

function findSubServiceBySlug(slug) {
  for (const category of serviceCategories) {
    const subService = category.subServices?.find((service) => service.slug === slug);
    if (subService) {
      return { category, subService };
    }
  }
  return null;
}

/* ── Dynamic metadata for city / state / blog pages ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  // City page
  const city = await fetchCity(slug);
  if (city) {
    const catSchema = CATEGORY_SCHEMA[city.category_name] || CATEGORY_SCHEMA["Digital Marketing"];
    const cityName = city.city || "";
    const title = city.meta_title || `${catSchema.serviceName} in ${cityName}`;
    const description = city.meta_description || `Professional ${catSchema.serviceName.toLowerCase()} tailored to your local business needs in ${cityName}. Reach our experts at +91 99905 56217.`;
    const keywords = city.meta_keyword || `${catSchema.serviceName}, ${cityName}, digital marketing ${cityName}`;
    const ogImage = city.image || catSchema.image;

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    };
  }

  // State page
  const state = await fetchState(slug);
  if (state) {
    const title = state.meta_title || `Digital Services in ${state.name} - Digital Solution 360`;
    const description = state.meta_description || `Professional digital marketing, web development, SEO, and branding services across all major cities in ${state.name}. Contact us for a free consultation.`;
    const keywords = state.meta_keywords || `digital marketing ${state.name}, SEO ${state.name}, web development ${state.name}`;
    const ogImage = state.image || '/logo.png';

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    };
  }

  // Blog page
  const post = await fetchBlog(slug);
  if (post) {
    const title = post.meta_title || post.title;
    const description = post.meta_description || (post.content ? post.content.replace(/<[^>]*>/g, '').slice(0, 160) : '');
    const ogImage = post.featured_image || '/logo.png';

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    };
  }

  // Root-level sub-service page
  const serviceMatch = findSubServiceBySlug(slug);
  if (serviceMatch) {
    const title = `${serviceMatch.subService.name} - Digital Solution 360`;
    const description = serviceMatch.subService.description;
    const ogImage = serviceMatch.subService.heroImage || '/logo.png';

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    };
  }

  return {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const city = await fetchCity(slug);

  if (!city) {
    // Check if it's a state page
    const state = await fetchState(slug);
    if (state) {
      return <StateClient />;
    }

    // Check if it's a blog post
    const post = await fetchBlog(slug);
    if (post) {
      return <BlogDetailClient />;
    }

    // Check if it's a root-level sub-service page
    const serviceMatch = findSubServiceBySlug(slug);
    if (serviceMatch) {
      return (
        <ServiceDetailPage
          categorySlug={serviceMatch.category.slug}
          serviceSlug={serviceMatch.subService.slug}
        />
      );
    }
    notFound();
  }

  const catSchema = city
    ? CATEGORY_SCHEMA[city.category_name] || CATEGORY_SCHEMA["Digital Marketing"]
    : CATEGORY_SCHEMA["Digital Marketing"];

  const cityName = city?.city || "";
  const reviewCount = Number(city?.city_id || 0) + 1000;
  const name = city?.meta_title || `${catSchema.serviceName} in ${cityName}`;
  const description =
    city?.meta_description ||
    `Professional ${catSchema.serviceName.toLowerCase()} tailored to your local business needs in ${cityName}. Reach our experts at +91 99905 56217.`;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "image": catSchema.image,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Digital Solution 360",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": String(reviewCount),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityClient />
    </>
  );
}

