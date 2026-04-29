import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ServiceSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import CTASection from "@/components/sections/cta";
import TestimonialSection from "@/components/sections/testimonials";
import BlogSection from "@/components/sections/blogs";
import ClientSection from "@/components/sections/clients";
import WebDevSection from "@/components/sections/web";
import FaqSection from "@/components/sections/faqs";
import Script from "next/script";
import FloatCta from "@/components/sections/floatCta";

export const metadata = {
  title: "Top Digital Marketing Company in India | Grow Business Online 2026",
  description: "Scale your brand with India's best digital marketing agency. We offer ROI-based SEO, PPC, and web development services for 2026 business growth.",
  keywords: "digital marketing company india, seo services india, website development company, gmb optimization service, social media marketing agency, digital marketing agency india, online marketing services",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.digitalsolution360.in",
  },
  openGraph: {
    title: "Top Digital Marketing Company in India | Grow Business Online 2026",
    description: "Scale your brand with India's best digital marketing agency. We offer ROI-based SEO, PPC, and web development services for 2026 business growth.",
    url: "https://www.digitalsolution360.in",
    siteName: "Digitalsolution360",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Digitalsolution360 - Website Development & Digital Marketing Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Digital Marketing Company in India | Grow Business Online 2026",
    description: "Scale your brand with India's best digital marketing agency. We offer ROI-based SEO, PPC, and web development services for 2026 business growth.",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a website development company do?",
        "acceptedAnswer": { "@type": "Answer", "text": "A website development company designs and develops professional websites that help businesses grow online." }
      },
      {
        "@type": "Question",
        "name": "Why should I hire a website development company?",
        "acceptedAnswer": { "@type": "Answer", "text": "A professional website development company creates high-quality websites that improve credibility and attract customers." }
      },
      {
        "@type": "Question",
        "name": "Do you create SEO friendly websites?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Digitalsolution360 specializes in SEO friendly website development designed for better search rankings." }
      },
      {
        "@type": "Question",
        "name": "How long does website development take?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most websites take 1 to 3 weeks depending on project requirements." }
      },
      {
        "@type": "Question",
        "name": "Do you develop ecommerce websites?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we develop complete ecommerce websites with payment integration." }
      },
      {
        "@type": "Question",
        "name": "Do you redesign websites?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we redesign existing websites to improve performance and design." }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO services?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide professional SEO services for businesses." }
      },
      {
        "@type": "Question",
        "name": "Is Digitalsolution360 a digital marketing company?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Digitalsolution360 is a complete digital marketing company." }
      },
      {
        "@type": "Question",
        "name": "Are websites mobile friendly?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, all websites are fully mobile responsive." }
      },
      {
        "@type": "Question",
        "name": "Do you provide support after website launch?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide long-term website support." }
      },
      {
        "@type": "Question",
        "name": "Is website development affordable?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer affordable website development services for businesses." }
      },
      {
        "@type": "Question",
        "name": "Why choose Digitalsolution360 website development company?",
        "acceptedAnswer": { "@type": "Answer", "text": "Digitalsolution360 provides professional website development with SEO-friendly design and reliable support." }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digitalsolution360",
    "url": "https://www.digitalsolution360.in",
    "logo": "https://www.digitalsolution360.in/logo.png",
    "description": "Professional website development company providing SEO friendly website development and complete digital marketing services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9990556217",
      "contactType": "sales",
      "email": "info@digitalsolution360.in",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/digitalsolution360",
      "https://www.instagram.com/digitalsolution360",
      "https://www.linkedin.com/company/digitalsolution360"
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Website Development Company | Digital Marketing Services - Digitalsolution360",
    "description": "Professional website development company providing SEO friendly website development and complete digital marketing services.",
    "url": "https://www.digitalsolution360.in",
    "publisher": {
      "@type": "Organization",
      "name": "Digitalsolution360"
    }
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Header/>
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <ClientSection/>
      <WebDevSection/>
      <CTASection/>
      <TestimonialSection/>
      <BlogSection/>
      <FaqSection/>
      {/* <FloatCta/> */}
      <Footer/>
    </>
  );
}
