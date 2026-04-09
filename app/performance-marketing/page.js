import PerformanceClientPage from "./performanceClient";
const title = "Best Performance Marketing Agency in India: Scale Your Startup Now";
const description = "Drive record ROI with Digital Solution 360. We offer AI-driven Performance Marketing and expert Google Ads Management for India's top startups and established businesses.";
const keywords = "performance marketing services, conversion marketing, roi marketing";
export const metadata = {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://www.digitalsolution360.in/performance-marketing`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.digitalsolution360.in/performance-marketing`,
        // images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
        siteName: 'Digital Solution 360',
      }
}

export default function Page (){
    return <PerformanceClientPage/>
}