import StaticServicePage from '@/components/services/StaticServicePage';

export const metadata = {
    title: 'Best Content Writing Agency in Delhi | Content Marketing Services',
    description:
        'Digital Solution 360 is the best content writing agency in Delhi. Professional content writing services at just ₹2 per word — 100% unique, SEO-optimized, plagiarism-free content.',
    keywords:
        'content writing agency delhi, best content writer in delhi, seo content writing delhi, website content writing services, blog writing services delhi, press release writing, social media content writing',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/content-marketing',
    },
};

const features = [
    'Verified Professional Content Writers',
    'Content Writing at Just ₹2 Per Word',
    '100% Unique & Plagiarism-Free Content',
    '5+ Years of Expert Content Writing Experience',
    'Website Content & Landing Page Writing',
    'Article & Blog Writing Services',
    'SEO-Enriched Content Writing',
    'Social Media Content Writing & Posts',
    'PPT & Document Writing Services',
    'Resume Writing Services',
    'Press Release Writing Services',
    'Video Animation Script Writing',
];

const benefits = [
    'Quality Content that Engages & Converts Visitors',
    'Keyword Optimization for Higher Google Rankings',
    'Customized Solutions Under One Roof',
    'Comprehensive Digital Marketing Support',
    'Professional Writers, SEO & Social Media Experts',
    'Timely Delivery — We Work 24/7',
    'Affordable & Transparent Pricing',
];

const sidebarItems = [
    'Content Writer in Delhi',
    'Blog & Article Writing',
    'SEO Content Writing',
    'Social Media Content',
    'Press Release Writing',
    'Resume Writing',
    'PPT & Document Writing',
    'Website Content Writing',
];

const faqs = [
    {
        q: 'What content writing services does Digital Solution 360 offer?',
        a: 'We offer website content writing, article & blog writing, SEO content writing, social media content creation, PPT/document writing, resume writing, press release writing, and video animation scripts — everything under one roof.',
    },
    {
        q: 'How much does content writing cost?',
        a: 'Our content writing services start at just ₹2 per word. We offer flexible packages for businesses of all sizes — from startups to enterprises. Contact us for a custom quote.',
    },
    {
        q: 'Is your content plagiarism-free?',
        a: 'Yes, 100%. Every piece of content goes through thorough plagiarism checks and quality review. We deliver only authentic, original, and engaging content.',
    },
    {
        q: 'Why choose Digital Solution 360 for content writing in Delhi?',
        a: 'We have a dedicated team of professional content writers, SEO experts, and social media specialists. We provide customized solutions, timely delivery, affordable pricing, and comprehensive digital marketing support under one roof.',
    },
    {
        q: 'How does the content writing process work?',
        a: 'Our proven process: Understand your requirements → Research & pen down the content → Apply proper SEO and keyword techniques → Remove errors & deliver. Simple, efficient, and quality-focused every time.',
    },
];

export default function ContentMarketingPage() {
    return (
        <StaticServicePage
            name='Best Content Writing Agency in Delhi'
            description='Digital Solution 360 is your trusted content writing partner in Delhi. We create compelling, SEO-optimized website content, articles, blogs, social media posts, and more — all at just ₹2 per word with 100% unique, plagiarism-free content. Your business, our writing skills… will rule the digital world.'
            heroImage='https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80'
            badge='Content Writing Services'
            color='indigo'
            features={features}
            benefits={benefits}
            sidebarTitle='Content Services in Delhi'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Request a Call Back'
        />
    );
}
