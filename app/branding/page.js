import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'Branding Services | Brand Identity & Design - DigitalSolution 360',
	description:
		'Build a strong brand with professional branding services including logo design, brand identity, and creative design solutions.',
	keywords:
		'branding services, brand identity design, logo design services',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/branding',
	},
};
export default function Page() { return <CategoryPage categorySlug="branding" />; }
