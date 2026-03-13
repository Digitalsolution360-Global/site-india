import StaticServicePage from '@/components/services/StaticServicePage';

export const metadata = {
    title: 'CRM Development Company | Custom CRM Solutions by Digital Solution 360',
    description:
        'Partner with Digital Solution 360, a leading CRM development company, to develop custom CRM software tailored to your business needs. Get bespoke CRM solutions now!',
    keywords:
        'CRM development company, Custom CRM software, CRM solutions in India, Cloud-based CRM, CRM integration, CRM application development, Enterprise CRM systems, CRM for small business, CRM automation, Sales CRM software, Customer relationship management, CRM developers, Web-based CRM, CRM implementation, CRM maintenance, CRM support services',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/crm-development',
    },
};

const features = [
    'Custom CRM Development Services for Your Workflows',
    'CRM Consulting & Strategic Planning',
    'CRM Implementation – Architecture to Deployment',
    'CRM Integration with Marketing Tools, ERP & E-commerce',
    'Mobile CRM App Development for Field Teams',
    'CRM Maintenance & Ongoing Post-Deployment Support',
    'Cloud-Based CRM Development',
    'Secure On-Premise CRM Solutions',
    'CRM Migration from Legacy Systems',
    'AI & Machine Learning Integration',
    'Agile & Transparent Development Process',
    'Feature-Rich, Secure & Intuitive CRM Platforms',
];

const benefits = [
    'Overcome Traditional CRM Limitations',
    'Top of the List Excellence with DS360',
    'Customizable & Feature-Rich CRM for All Sizes',
    'Client-Centric Approach Tailored to Your Business',
    'Advanced Technology — AI, ML & Cloud Computing',
    'Transparent Communication & Agile Development',
    'Improved Customer Retention & Loyalty',
    'Boost Sales & Revenue Growth',
    'Enhanced Marketing Efforts & Automation',
    'Secure, Reliable & Scalable CRM Systems',
];

const sidebarItems = [
    'Custom CRM Software',
    'Cloud-Based CRM',
    'CRM Integration Services',
    'CRM for Small Business',
    'Enterprise CRM Systems',
    'CRM Automation',
    'Sales CRM Software',
    'Mobile CRM Applications',
];

const faqs = [
    {
        q: 'What is CRM software development and why do businesses need it?',
        a: 'CRM software development means building tailored customer relationship management systems. Businesses need it to centralize customer data, automate sales processes, improve communication, and drive revenue growth efficiently.',
    },
    {
        q: 'Can Digital Solution 360 build a fully custom CRM?',
        a: 'Yes. Our experts build CRM software solutions based on your operational processes, enhance efficiency and user adoption, and support unique workflows — from scratch or on top of existing systems.',
    },
    {
        q: 'Do you offer both cloud-based and on-premise CRM solutions?',
        a: 'Absolutely. Digital Solution 360 provides both cloud-based CRM development that scales with your business and secure on-premise CRM solutions for businesses that need local data control.',
    },
    {
        q: 'What industries do you serve for CRM development?',
        a: 'We build CRM platforms for businesses of all sizes across e-commerce, healthcare, real estate, education, finance, and more — irrespective of industry type or scale.',
    },
    {
        q: 'Do you provide post-deployment CRM support?',
        a: 'Yes. We offer ongoing maintenance, timely updates, troubleshooting, and scaling support to keep your CRM system stronger and safer as your business evolves.',
    },
];

export default function CrmDevelopmentPage() {
    return (
        <StaticServicePage
            name='Boost Your Sales with a Trusted CRM Development Company'
            description="Looking for a trusted solution to build a custom CRM and elevate your online presence? Digital Solution 360 is your default CRM development company. Our experts guide you through integration, implementation, and ongoing support — driving operational efficiency and customer engagement."
            heroImage='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80'
            badge='CRM Development Services'
            color='orange'
            features={features}
            benefits={benefits}
            sidebarTitle='CRM Solutions We Offer'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Talk to CRM Expert'
        />
    );
}
