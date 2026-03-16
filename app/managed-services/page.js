import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'Digital Marketing Managed Services | DigitalSolution 360',
	description:
		'Comprehensive managed marketing services including SEO, PPC, and social media management for business growth.',
	keywords:
		'digital marketing managed services, marketing management services',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/managed-services',
	},
};
export default function Page() { return <CategoryPage categorySlug="managed-services" />; }
