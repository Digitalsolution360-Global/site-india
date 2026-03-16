import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'Website Development Company | DigitalSolution 360',
	description:
		'Build powerful websites with expert web development services including UI/UX design, WordPress development, and eCommerce solutions.',
	keywords:
		'website development company, web development services, website design agency',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/website-development',
	},
};
export default function Page() { return <CategoryPage categorySlug="website-development" />; }
