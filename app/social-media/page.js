import StaticServicePage from '@/components/services/StaticServicePage';

const title = "Social Media Marketing in Delhi - Digital Solution 360";

const description = "Build your business stature with social media marketing in Delhi. Digital Solution 360 offers strategy, content, campaigns, reputation management, and performance tracking.";

export const metadata = {
    title,
    description,
    keywords:
        'social media marketing delhi, smm agency delhi, facebook advertising management, social media campaign agency, corporate social media marketing, digital solution 360',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/social-media',
    },
    openGraph: {
        title,
        description,
        url: `https://www.digitalsolution360.in/social-media`,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
};

const features = [
    'Social Media Strategy Development aligned with your business goals',
    'Content Creation and Management: posts, stories, videos, blogs, and creatives',
    'Facebook Advertising Management with A/B testing and conversion tracking',
    'Social Media Campaign Execution for awareness and engagement',
    'Reputation Management through active monitoring and response handling',
    'Analytics and Performance Tracking with ROI-focused reporting',
    'Consistent publishing cadence to keep your audience engaged',
    'Corporate and local-business social media growth strategies',
    'Audience-first messaging that builds authentic brand trust',
    'Platform-led optimization across Instagram, Facebook, LinkedIn, and YouTube',
    'Campaign planning built for long-term visibility and retention',
    'Actionable roadmap crafted from competitor and trend analysis',
];

const benefits = [
    'Boost your reputation and brand credibility across social platforms',
    'Reach the right audience with platform-specific strategies',
    'Turn viewers into loyal customers with impact-driven campaigns',
    'Improve engagement quality with meaningful content interactions',
    'Get measurable visibility through reporting and analytics',
    'Strengthen customer trust through active reputation management',
    'Build a consistent brand voice across channels',
    'Scale from small-budget campaigns to performance-led growth',
    'Stay ahead of competitors with trend-aware strategy execution',
    'Create long-term digital relationships, not just short-term traffic',
];

const sidebarItems = [
    'Social Media Strategy Development',
    'Content Creation and Management',
    'Facebook Advertising Management',
    'Social Media Campaign Execution',
    'Reputation Management',
    'Analytics and Performance Tracking',
    'Corporate Social Media Marketing',
    'Local Business Social Media Growth',
];

const faqs = [
    {
        q: 'Why should I choose Digital Solution 360 as my partner?',
        a: 'Because we combine expertise in social media marketing with personalized strategies that make your business stand out online.',
    },
    {
        q: 'What is the social media marketing cost in Delhi?',
        a: 'No, it can be very cost-effective when you choose Digital Solution 360. You can start with a small budget and scale based on performance and goals.',
    },
    {
        q: 'How does Facebook advertising management in Delhi work?',
        a: 'It involves creating tailored ads, choosing the right target audience, monitoring performance, and optimizing results to get the best return on investment.',
    },
    {
        q: 'How long does it take to see results from social media marketing?',
        a: 'Most businesses start noticing engagement improvements within 4–6 weeks, while measurable ROI may take 3–6 months, depending on campaigns.',
    },
    {
        q: 'What makes corporate social media marketing different?',
        a: 'It focuses on strategic campaigns, large-scale planning, and brand reputation, making it a more structured and impactful approach for organizational growth.',
    },
    {
        q: 'Is SMM marketing suitable for local businesses?',
        a: 'Absolutely. SMM helps businesses of all sizes reach local audiences with cost-effective strategies that deliver measurable results.',
    },
];

export default function SocialMediaPage() {
    return (
        <StaticServicePage
            name='Willing to Harness The Power of Social Media Marketing?'
            description='Build your business’s stature over social media with the cutting-edge social media marketing technologies in
        Delhi.'
            heroImage='https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1600&q=80'
            badge='Social Media Marketing in Delhi'
            color='pink'
            // features={features}
            // benefits={benefits}
            sidebarTitle='Social Media Marketing Services We Provide'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Get Started Today'
        />
    );
}
