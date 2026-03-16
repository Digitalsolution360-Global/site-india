import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'SEO Services Company | Search Engine Optimization - DigitalSolution 360',
	description:
		'Improve your website ranking with professional SEO services including technical SEO, on-page SEO, off-page SEO, and SEO audit.',
	keywords:
		'seo services company, search engine optimization services, seo agency',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/seo',
	},
};
export default function Page() { return <CategoryPage categorySlug="seo" />; }
