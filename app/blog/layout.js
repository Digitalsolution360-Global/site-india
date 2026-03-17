export const metadata = {
  title: "Digital Marketing Blog | SEO, Social Media & Online Marketing Tips",
  description:
    "Read the latest digital marketing blog posts from Digital Solution 360. Learn SEO strategies, social media marketing tips, Google ranking techniques, and online business growth ideas.",
  keywords:
    "digital marketing blog, seo tips, online marketing blog, social media marketing tips, google ranking tips",
  alternates: {
    canonical: "https://www.digitalsolution360.in/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog | SEO, Social Media & Online Marketing Tips",
    description: "Read the latest digital marketing blog posts from Digital Solution 360. Learn SEO strategies, social media marketing tips, Google ranking techniques, and online business growth ideas.",
    url: "https://www.digitalsolution360.in/blog",
    siteName: "Digitalsolution360",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Blog | SEO, Social Media & Online Marketing Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog | SEO, Social Media & Online Marketing Tips",
    description: "Read the latest digital marketing blog posts from Digital Solution 360. Learn SEO strategies, social media marketing tips, Google ranking techniques, and online business growth ideas.",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
