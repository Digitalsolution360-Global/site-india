import CategoryPage from '@/components/services/CategoryPage';
export const metadata = {
	title: 'Marketing Automation Services | DigitalSolution 360',
	description:
		'Automate your marketing with CRM automation, lead automation, and email automation services from DigitalSolution 360.',
	keywords:
		'marketing automation services, crm automation, lead automation tools',
	alternates: {
		canonical: 'https://www.digitalsolution360.in/automation',
	},
};
export default function Page() { return <CategoryPage categorySlug="automation" />; }
