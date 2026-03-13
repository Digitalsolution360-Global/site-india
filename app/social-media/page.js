import StaticServicePage from '@/components/services/StaticServicePage';

export const metadata = {
    title: 'Social Media Marketing in Delhi - Digital Solution 360',
    description:
        "Boost engagement and reach with Digital Solution 360's expert social media marketing services tailored for Delhi businesses.",
    keywords:
        'social media marketing delhi, social media agency delhi, instagram marketing, facebook advertising delhi, social media campaign, SMM agency, social media management, corporate social media marketing',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/social-media',
    },
};

const features = [
    'Customized Social Media Strategy Development',
    'Content Creation & Management (Posts, Stories, Videos)',
    'Facebook Advertising & A/B Testing',
    'Social Media Campaign Execution',
    'Reputation Management & Brand Protection',
    'Analytics & Performance Tracking with Reports',
    'Instagram Marketing & Organic Growth',
    'LinkedIn B2B Marketing',
    'Twitter / X Account Management',
    'YouTube Channel Management',
    'Influencer Marketing Campaigns',
    'Community Building & Engagement',
];

const benefits = [
    'Build Authentic Connections with Your Audience',
    'Boost Brand Visibility Across All Platforms',
    'Drive Measurable Business Results & ROI',
    'Increase Customer Loyalty & Repeat Engagement',
    'Sustainable Organic Growth with Proven Strategies',
    'Cost-Effective Social Media Advertising',
    'Corporate Social Media Marketing for Enterprises',
    'Local Audience Targeting for Delhi Businesses',
    'Data-Driven Insights to Beat Competitors',
    'Grow Your Reputation & Reach with Expert SMM',
];

const sidebarItems = [
    'Facebook Marketing',
    'Instagram Marketing',
    'LinkedIn Marketing',
    'Twitter / X Marketing',
    'YouTube Marketing',
    'Pinterest Marketing',
    'WhatsApp Business Marketing',
    'Google My Business Management',
];

const faqs = [
    {
        q: 'Why should I choose Digital Solution 360 for social media marketing?',
        a: 'Because we combine expertise in social media marketing with personalized strategies that make your business stand out online. We analyze your current presence, use industry trends, and prepare actionable roadmaps that keep you ahead of competitors.',
    },
    {
        q: 'What is the social media marketing cost in Delhi?',
        a: 'It can be very cost-effective when you choose Digital Solution 360. You can start with a small budget and scale based on performance and goals. Contact us for a customized pricing plan.',
    },
    {
        q: 'How does Facebook advertising management work?',
        a: 'It involves creating tailored ads, choosing the right target audience, monitoring performance, A/B testing ad copies, and optimizing results to ensure maximum return on investment.',
    },
    {
        q: 'How long does it take to see results from social media marketing?',
        a: 'Most businesses start noticing engagement improvements within 4–6 weeks. Measurable ROI typically appears within 3–6 months, depending on campaigns, budget, and industry competition.',
    },
    {
        q: 'Is SMM marketing suitable for local businesses in Delhi?',
        a: 'Absolutely. SMM helps businesses of all sizes reach local audiences with cost-effective strategies. Digital Solution 360 specializes in local audience targeting in Delhi and surrounding areas.',
    },
    {
        q: 'What makes corporate social media marketing different?',
        a: 'Corporate SMM focuses on strategic campaigns, large-scale planning, and brand reputation management — a more structured and impactful approach for organizational growth and B2B engagement.',
    },
];

export default function SocialMediaPage() {
    return (
        <StaticServicePage
            name='Social Media Marketing in Delhi'
            description="Build your business's stature over social media with cutting-edge strategies. Grow your reputation and reach using the best social media marketing agency in Delhi. Digital Solution 360 connects brands with the right audience for measurable, sustainable growth."
            heroImage='https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1600&q=80'
            badge='Social Media Marketing'
            color='indigo'
            features={features}
            benefits={benefits}
            sidebarTitle='Social Media Platforms'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Request Proposal'
        />
    );
}
