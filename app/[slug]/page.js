import CityClient from "./cityClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

/* Minimal per-category data needed for JSON-LD */
const CATEGORY_SCHEMA = {
  "Google Business": {
    serviceName: "Google My Business Optimization",
    image: `https://digitalsolution360.in/gmb-og.webp`,
    ratingsBase: 2540,
  },
  "Digital Marketing": {
    serviceName: "Digital Marketing Services",
    image: `https://digitalsolution360.in/digital-marketing-og.webp`,
    ratingsBase: 3120,
  },
  "Web Development": {
    serviceName: "Web Development Services",
    image: `https://digitalsolution360.in/home/images/og-home.webp`,
    ratingsBase: 1890,
  },
  "Social Media": {
    serviceName: "Social Media Marketing Services",
    image: `https://digitalsolution360.in/social-media-og.webp`,
    ratingsBase: 2750,
  },
  "Content Writing": {
    serviceName: "Content Writing Services",
    image: `https://digitalsolution360.in/content-writing-og.webp`,
    ratingsBase: 1650,
  },
  "Wordpress Development": {
    serviceName: "WordPress Development Services",
    image: `https://digitalsolution360.in/wordpress-og.webp`,
    ratingsBase: 2080,
  },
};

async function fetchCity(slug) {
  try {
    const res = await fetch(`https://digitalsolution360.in/cities/${slug}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) return json.data;
  } catch {}
  return null;
}

export default async function Page({ params }) {
  const { slug } = await params;
  const city = await fetchCity(slug);

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

