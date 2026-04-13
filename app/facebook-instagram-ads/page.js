import facebbokClientPage from "./facebbokClient";
const title = "Best Facebook & Instagram Ads Agency in Delhi NCR | ROI Driven";
const description = "Scale your brand with Digital Solution 360, the best Facebook & Instagram ads agency in Delhi NCR. Get high-conversion Meta ads that drive real revenue.";
const keywords = "facebook, instagram, ads, facebook instagram ads services, DigitalSolution 360";
const ogImage = "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&amp;q=80";
export const metadata = {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://www.digitalsolution360.in/facebook-instagram-ads`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.digitalsolution360.in/facebook-instagram-ads`,
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        type: 'website',
        siteName: 'Digital Solution 360',
      }
}

export default function Page (){
    return <facebbokClientPage/>
}
