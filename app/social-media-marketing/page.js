import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'Social Media Marketing Agency | DigitalSolution 360',
	description:
		'Grow your brand with professional social media marketing services including Facebook, Instagram, LinkedIn, and YouTube marketing.',
	keywords:
		'social media marketing agency, social media advertising, smm services',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/social-media-marketing',
	},
};
export default function Page() { return <CategoryPage categorySlug="social-media-marketing" />; }
