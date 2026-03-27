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

const ROOT_SUBSERVICE_META = {
  "growth-marketing": {
    title: "Growth Marketing Services | DigitalSolution 360",
    description: "Professional growth marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "growth, marketing, growth marketing services, DigitalSolution 360",
  },
  "google-ads-management": {
    title: "Google Ads Management Services | DigitalSolution 360",
    description: "Professional google ads management services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "google, ads, management, google ads management services, DigitalSolution 360",
  },
  "facebook-instagram-ads": {
    title: "Facebook Instagram Ads Services | DigitalSolution 360",
    description: "Professional facebook instagram ads services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "facebook, instagram, ads, facebook instagram ads services, DigitalSolution 360",
  },
  "web-design": {
    title: "Web Design Services | DigitalSolution 360",
    description: "Professional web design services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "web, design, web design services, DigitalSolution 360",
  },
  "ui-ux-design": {
    title: "Ui Ux Design Services | DigitalSolution 360",
    description: "Professional ui ux design services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "ui, ux, design, ui ux design services, DigitalSolution 360",
  },
  "wordpress-development": {
    title: "Wordpress Development Services | DigitalSolution 360",
    description: "Professional wordpress development services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "wordpress, development, wordpress development services, DigitalSolution 360",
  },
  "shopify-development": {
    title: "Shopify Development Services | DigitalSolution 360",
    description: "Professional shopify development services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "shopify, development, shopify development services, DigitalSolution 360",
  },
  "landing-page-design": {
    title: "Landing Page Design Services | DigitalSolution 360",
    description: "Professional landing page design services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "landing, page, design, landing page design services, DigitalSolution 360",
  },
  "local-seo": {
    title: "Local Seo Services | DigitalSolution 360",
    description: "Professional local seo services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "local, seo, local seo services, DigitalSolution 360",
  },
  "ecommerce-seo": {
    title: "Ecommerce Seo Services | DigitalSolution 360",
    description: "Professional ecommerce seo services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "ecommerce, seo, ecommerce seo services, DigitalSolution 360",
  },
  "technical-seo": {
    title: "Technical Seo Services | DigitalSolution 360",
    description: "Professional technical seo services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "technical, seo, technical seo services, DigitalSolution 360",
  },
  "on-page-seo": {
    title: "On Page Seo Services | DigitalSolution 360",
    description: "Professional on page seo services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "on, page, seo, on page seo services, DigitalSolution 360",
  },
  "off-page-seo": {
    title: "Off Page Seo Services | DigitalSolution 360",
    description: "Professional off page seo services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "off, page, seo, off page seo services, DigitalSolution 360",
  },
  "seo-audit": {
    title: "Seo Audit Services | DigitalSolution 360",
    description: "Professional seo audit services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "seo, audit, seo audit services, DigitalSolution 360",
  },
  "ai-seo": {
    title: "Ai Seo Services | DigitalSolution 360",
    description: "Professional ai seo services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "ai, seo, ai seo services, DigitalSolution 360",
  },
  "brand-identity-design": {
    title: "Brand Identity Design Services | DigitalSolution 360",
    description: "Professional brand identity design services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "brand, identity, design, brand identity design services, DigitalSolution 360",
  },
  "logo-design": {
    title: "Logo Design Services | DigitalSolution 360",
    description: "Professional logo design services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "logo, design, logo design services, DigitalSolution 360",
  },
  "graphic-design": {
    title: "Graphic Design Services | DigitalSolution 360",
    description: "Professional graphic design services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "graphic, design, graphic design services, DigitalSolution 360",
  },
  "creative-for-ads": {
    title: "Creative For Ads Services | DigitalSolution 360",
    description: "Professional creative for ads services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "creative, for, ads, creative for ads services, DigitalSolution 360",
  },
  "performance-creatives": {
    title: "Performance Creatives Services | DigitalSolution 360",
    description: "Professional performance creatives services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "performance, creatives, performance creatives services, DigitalSolution 360",
  },
  "social-media-management": {
    title: "Social Media Management Services | DigitalSolution 360",
    description: "Professional social media management services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "social, media, management, social media management services, DigitalSolution 360",
  },
  "instagram-marketing": {
    title: "Instagram Marketing Services | DigitalSolution 360",
    description: "Professional instagram marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "instagram, marketing, instagram marketing services, DigitalSolution 360",
  },
  "facebook-marketing": {
    title: "Facebook Marketing Services | DigitalSolution 360",
    description: "Professional facebook marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "facebook, marketing, facebook marketing services, DigitalSolution 360",
  },
  "linkedin-marketing": {
    title: "Linkedin Marketing Services | DigitalSolution 360",
    description: "Professional linkedin marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "linkedin, marketing, linkedin marketing services, DigitalSolution 360",
  },
  "youtube-marketing": {
    title: "Youtube Marketing Services | DigitalSolution 360",
    description: "Professional youtube marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "youtube, marketing, youtube marketing services, DigitalSolution 360",
  },
  "influencer-marketing": {
    title: "Influencer Marketing Services | DigitalSolution 360",
    description: "Professional influencer marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "influencer, marketing, influencer marketing services, DigitalSolution 360",
  },
  "short-video-marketing": {
    title: "Short Video Marketing Services | DigitalSolution 360",
    description: "Professional short video marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "short, video, marketing, short video marketing services, DigitalSolution 360",
  },
  "marketing-automation": {
    title: "Marketing Automation Services | DigitalSolution 360",
    description: "Professional marketing automation services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "marketing, automation, marketing automation services, DigitalSolution 360",
  },
  "crm-automation": {
    title: "Crm Automation Services | DigitalSolution 360",
    description: "Professional crm automation services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "crm, automation, crm automation services, DigitalSolution 360",
  },
  "lead-automation": {
    title: "Lead Automation Services | DigitalSolution 360",
    description: "Professional lead automation services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "lead, automation, lead automation services, DigitalSolution 360",
  },
  "email-automation": {
    title: "Email Automation Services | DigitalSolution 360",
    description: "Professional email automation services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "email, automation, email automation services, DigitalSolution 360",
  },
  "sales-funnel-automation": {
    title: "Sales Funnel Automation Services | DigitalSolution 360",
    description: "Professional sales funnel automation services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "sales, funnel, automation, sales funnel automation services, DigitalSolution 360",
  },
  "ai-marketing-automation": {
    title: "Ai Marketing Automation Services | DigitalSolution 360",
    description: "Professional ai marketing automation services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "ai, marketing, automation, ai marketing automation services, DigitalSolution 360",
  },
  "digital-marketing-managed": {
    title: "Digital Marketing Managed Services | DigitalSolution 360",
    description: "Professional digital marketing managed services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "digital, marketing, managed, digital marketing managed services, DigitalSolution 360",
  },
  "seo-managed": {
    title: "Seo Managed Services | DigitalSolution 360",
    description: "Professional seo managed services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "seo, managed, seo managed services, DigitalSolution 360",
  },
  "ppc-managed": {
    title: "Ppc Managed Services | DigitalSolution 360",
    description: "Professional ppc managed services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "ppc, managed, ppc managed services, DigitalSolution 360",
  },
  "social-media-managed": {
    title: "Social Media Managed Services | DigitalSolution 360",
    description: "Professional social media managed services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "social, media, managed, social media managed services, DigitalSolution 360",
  },
  "startup-marketing": {
    title: "Startup Marketing Services | DigitalSolution 360",
    description: "Professional startup marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "startup, marketing, startup marketing services, DigitalSolution 360",
  },
  "saas-marketing": {
    title: "Saas Marketing Services | DigitalSolution 360",
    description: "Professional saas marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "saas, marketing, saas marketing services, DigitalSolution 360",
  },
  "ecommerce-marketing": {
    title: "Ecommerce Marketing Services | DigitalSolution 360",
    description: "Professional ecommerce marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "ecommerce, marketing, ecommerce marketing services, DigitalSolution 360",
  },
  "b2b-marketing": {
    title: "B2B Marketing Services | DigitalSolution 360",
    description: "Professional b2b marketing services by DigitalSolution 360 to help businesses grow with effective digital strategies and solutions.",
    keywords: "b2b, marketing, b2b marketing services, DigitalSolution 360",
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
      title: { absolute: title },
      description,
      keywords,
      alternates: {
        canonical: `${SITE_URL}/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
        siteName: 'Digital Solution 360',
      },
      other: {
        'og:keywords': keywords,
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
      title: { absolute: title },
      description,
      keywords,
      alternates: {
        canonical: `${SITE_URL}/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
        siteName: 'Digital Solution 360',
      },
      other: {
        'og:keywords': keywords,
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
      title: { absolute: title },
      description,
      alternates: {
        canonical: `${SITE_URL}/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'article',
        siteName: 'Digital Solution 360',
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
    const configuredMeta = ROOT_SUBSERVICE_META[slug];
    const title = configuredMeta?.title || `${serviceMatch.subService.name} - Digital Solution 360`;
    const description = configuredMeta?.description || serviceMatch.subService.description;
    const keywords = configuredMeta?.keywords || `${serviceMatch.subService.name}, DigitalSolution 360`;
    const ogImage = serviceMatch.subService.heroImage || '/logo.png';

    return {
      title: { absolute: title },
      description,
      keywords,
      alternates: {
        canonical: `${SITE_URL}/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/${slug}`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
        siteName: 'Digital Solution 360',
      },
      other: {
        'og:keywords': keywords,
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

