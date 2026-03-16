import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'Digital Marketing Services | DigitalSolution 360',
	description:
		'Full-service digital marketing agency offering SEO, PPC, social media marketing, branding, and performance marketing solutions.',
	keywords:
		'digital marketing agency, digital marketing services, online marketing company',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/digital-marketing',
	},
};
export default function Page() { return <CategoryPage categorySlug="digital-marketing" />; }
