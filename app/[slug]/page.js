import CityClient from "./cityClient";

export default function Page() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Digital Solution",
    "image": "https://www.digitalsolution360.in/public/frontend/img/logo.png",
    "description": "Discover professional website development services tailored to your business needs. Reach our experts at +91 99905 56217 and ensure top-notch web solutions.",
    "brand": {
      "@type": "Brand",
      "name": "Digital Solution"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1483"
    }
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
