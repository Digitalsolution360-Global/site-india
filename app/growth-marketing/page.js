import GrowthClientPage from "./growthClient";
const title = "Top Growth Marketing Agency 2026 | Digital Solution 360 Expert Services";
const description = "Scale your brand with Digital Solution 360. We offer expert growth marketing, funnel optimization, and data-driven performance strategies for sustainable 2026 business success.";
const keywords = "growth, marketing, growth marketing services, DigitalSolution 360";
const ogImage = "https://www.digitalsolution360.in/google-my-business-company-digitalsolution360.webp";
export const metadata = {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://www.digitalsolution360.in/growth-marketing`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.digitalsolution360.in/growth-marketing`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
        siteName: 'Digital Solution 360',
      }
}

export default function Page (){
    return <GrowthClientPage/>
}
