import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
    title: 'Social Media Marketing in Delhi - Digital Solution 360',
    description:
        'Build your business stature with social media marketing in Delhi. Digital Solution 360 offers strategy, content, campaigns, reputation management, and performance tracking.',
    keywords:
        'social media marketing delhi, smm agency delhi, facebook advertising management, social media campaign agency, corporate social media marketing, digital solution 360',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/social-media',
    },
};

const profileCards = [
    {
        platform: 'Instagram',
        handle: 'Rajnursinghomehapur',
        description: 'Healthcare updates and news from Raj Nursing Home, Hapur.',
    },
    {
        platform: 'Instagram',
        handle: 'This Is Dehi',
        description: 'Exploring the vibrant culture and lifestyle of Dehi.',
    },
    {
        platform: 'Instagram',
        handle: 'Maxalign Dental',
        description: 'Your smile\'s best friend - Maxalign Dental Clinic updates.',
    },
];

const serviceSections = [
    {
        title: 'Social Media Strategy Development',
        paragraphs: [
            'Well-defined strategies always give the best results in the end. When clients join Digital Solution 360, we provide customized social media marketing strategies. They always align with the vision of your business, achieve long-term goals, and align with the audience.',
            'We analyze your current online presence and elevate its status further. We use different industry-specific trends better than your competitors. Our experts prepare an actionable roadmap so that we can always stay ahead all the time.',
            'Let us customize a winning strategy tailored to your business goals today!',
        ],
    },
    {
        title: 'Content Creation and Management',
        paragraphs: [
            'Content is the face of your brand and is the most integral part in SMM marketing. With our expert content writers, Digital Solution 360 helps you create engaging posts related to social media.',
            'Content is based on infographics, stories, videos, blogs, articles, etc. We highlight your key strengths and engage with the audience effectively. Our team ensures that your brand message reaches every reader, resulting in a higher impact rate.',
        ],
    },
    {
        title: 'Facebook Advertising Management',
        paragraphs: [
            'Facebook marketing is one of the most powerful tools in social media marketing. When used wisely, it produces impactful campaigns and raises awareness about the client\'s products.',
            'From ad copywriting to A/B testing and tracking conversions, we manage it all to ensure maximum ROI. This is the best way to advertise on social media for businesses in any sector.',
        ],
    },
    {
        title: 'Social Media Campaign Execution',
        paragraphs: [
            'For any type of business, campaigns can boost growth effectively. As a budget-friendly social media campaign agency, we specialize in raising awareness and engagement.',
            'With impact-driven campaigns, you grab maximum attention and turn viewers into loyal customers. Let Digital Solution 360 launch campaigns that carry your brand message far and wide.',
        ],
    },
    {
        title: 'Reputation Management',
        paragraphs: [
            'Your business reputation is a strong resource to stay ahead on social media platforms. One negative impression can cause unexpected setbacks, so choosing the right agency is crucial.',
            'Digital Solution 360 secures your credibility by monitoring mentions, engaging with feedback, and highlighting positive stories to maintain respect and reliability across platforms.',
        ],
    },
    {
        title: 'Analytics & Performance Tracking',
        paragraphs: [
            'Measuring results is crucial to tackle growth in social media marketing. Our experts provide detailed analytics on audience engagement, performance, and ROI.',
            'These insights are used to elevate your business further and surpass competitors. Our data-focused approach ensures every promotion is a calculated growth opportunity.',
        ],
    },
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
        <>
            <Header />

            <main className='bg-[radial-gradient(circle_at_top_right,#fce7f3,#ffffff_45%,#fdf2f8_100%)] pt-24'>
                <section className='px-4 md:px-8 lg:px-16 pb-14'>
                    <div className='mx-auto max-w-7xl rounded-3xl border border-pink-200 bg-linear-to-br from-slate-900 via-pink-950 to-rose-900 p-8 md:p-12 lg:p-16 shadow-2xl'>
                        <p className='mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide text-pink-100'>
                            SOCIAL MEDIA MARKETING IN DELHI
                        </p>
                        <h1 className='max-w-4xl text-3xl font-black leading-tight text-white md:text-5xl'>
                            Willing to Harness The Power of Social Media Marketing?
                        </h1>
                        <p className='mt-6 max-w-3xl text-lg leading-relaxed text-pink-100'>
                            Build your business&apos;s stature over social media with the cutting-edge social media marketing technologies in Delhi.
                        </p>
                        <div className='mt-8 flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600'
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href='/market-we-serve/social-media'
                                className='rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20'
                            >
                                Explore Service Locations
                            </Link>
                        </div>
                    </div>
                </section>

                <section className='px-4 md:px-8 lg:px-16 pb-12'>
                    <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr]'>
                        <article className='rounded-2xl border border-pink-100 bg-white p-7 shadow-sm md:p-10'>
                            <h2 className='mb-5 text-2xl font-extrabold text-slate-900 md:text-4xl'>Social Media Marketing in Delhi</h2>
                            <div className='space-y-5 text-base leading-8 text-slate-700 md:text-lg'>
                                <p>
                                    The world is moving fast towards online marketing using social media platforms. Also, more businesses are showing their interest in collecting maximum attention using various social media marketing tricks.
                                </p>
                                <p>
                                    To win in the race of social media marketing, businesses and enterprises should look for the best way to advertise on social media in Delhi to overcome their competitors. You may find different agencies that claim to deliver services but fail in certain instances. To stay out of fraud and cheap options, join the best social media marketing agency in Delhi.
                                </p>
                                <p>
                                    With Digital Solution 360, it becomes easier for businesses to connect with people using social media platforms. The best part is that this SMM agency in Delhi provides informative posts and maintains consistency to grab the attention of the maximum audience.
                                </p>
                                <p className='font-semibold text-pink-700'>
                                    Grow your reputation &amp; reach using the best social media to advertise your business: Join Digital Solution 360
                                </p>
                            </div>
                        </article>

                        <aside className='rounded-2xl border border-pink-100 bg-white p-7 shadow-sm md:p-8'>
                            <h3 className='text-xl font-extrabold text-slate-900'>64%</h3>
                            <p className='mt-2 text-base font-semibold text-slate-800'>
                                of consumers express a desire for brands to communicate more authentically.
                            </p>
                            <p className='mt-4 text-sm leading-7 text-slate-600'>
                                Underscoring that modern consumers value relationships with brands that foster meaningful interactions that resonate on a personal level, as per a study.
                            </p>
                        </aside>
                    </div>
                </section>

                <section className='px-4 md:px-8 lg:px-16 pb-12'>
                    <div className='mx-auto max-w-7xl rounded-2xl border border-pink-100 bg-white p-7 shadow-sm md:p-10'>
                        <h2 className='text-2xl font-extrabold text-slate-900 md:text-4xl'>Social Media Marketing Services We Provide</h2>
                        <div className='mt-5 space-y-5 text-base leading-8 text-slate-700 md:text-lg'>
                            <p>
                                When various entrepreneurs and startups are seeking their growth over the internet, they love to use proven strategies. The combination of social media and marketing can do the job for you.
                            </p>
                            <p>
                                Social media marketing is one of the best choices to consider for elevating the reach of products and services of any client without fail.
                            </p>
                            <p>
                                However, it is always recommended to go with the proven strategy makers. When it comes to providing successful social media campaigning in Delhi, the name &quot;Digital Marketing 360&quot; pops up first.
                            </p>
                            <p>
                                With the following strategies, businesses and industries can thrive well across various social media platforms.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='px-4 md:px-8 lg:px-16 pb-12'>
                    <div className='mx-auto max-w-7xl rounded-2xl border border-pink-100 bg-white p-7 shadow-sm md:p-10'>
                        <h2 className='text-2xl font-extrabold text-slate-900 md:text-4xl'>Follow Our Social Media Profiles</h2>
                        <p className='mt-3 text-base leading-8 text-slate-700 md:text-lg'>
                            Stay connected and get the latest updates by following us on Instagram.
                        </p>
                        <div className='mt-8 grid gap-4 md:grid-cols-3'>
                            {profileCards.map((card) => (
                                <div key={card.handle} className='rounded-xl border border-pink-200 bg-pink-50 p-5'>
                                    <p className='text-sm font-semibold uppercase tracking-wide text-pink-700'>{card.platform}</p>
                                    <p className='mt-2 text-lg font-bold text-slate-900'>{card.handle}</p>
                                    <p className='mt-2 text-sm leading-7 text-slate-700'>{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='px-4 md:px-8 lg:px-16 pb-12'>
                    <div className='mx-auto max-w-7xl'>
                        <h2 className='text-2xl font-extrabold text-slate-900 md:text-4xl'>Social Media Marketing Services We Provide</h2>
                        <div className='mt-6 space-y-4'>
                            {serviceSections.map((service) => (
                                <article key={service.title} className='rounded-2xl border border-pink-100 bg-white p-7 shadow-sm md:p-9'>
                                    <h3 className='text-xl font-extrabold text-slate-900 md:text-2xl'>{service.title}</h3>
                                    <div className='mt-4 space-y-4 text-base leading-8 text-slate-700 md:text-lg'>
                                        {service.paragraphs.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='px-4 md:px-8 lg:px-16 pb-12'>
                    <div className='mx-auto max-w-7xl rounded-2xl border border-pink-200 bg-linear-to-r from-slate-900 to-pink-900 p-8 text-white md:p-12'>
                        <h2 className='text-2xl font-extrabold md:text-4xl'>Partner with a Trusted Social Media Campaign Agency</h2>
                        <p className='mt-5 max-w-4xl text-base leading-8 text-pink-100 md:text-lg'>
                            When you partner with a trusted social media campaign agency, you are not just investing in advertising; you are building lasting relationships with the people that matter. With Digital Solution 360 as your ally, every post, every ad, and every campaign becomes a stepping stone toward stronger community bonds and long-term success.
                        </p>
                        <p className='mt-4 max-w-4xl text-base leading-8 text-pink-100 md:text-lg'>
                            Whether it is corporate social media marketing or promoting business on social media, Digital Solution 360 in Delhi is the best and reliable choice.
                        </p>
                        <div className='mt-8'>
                            <Link
                                href='/contact-us'
                                className='inline-block rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600'
                            >
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </section>

                <section className='px-4 md:px-8 lg:px-16 pb-20'>
                    <div className='mx-auto max-w-7xl rounded-2xl border border-pink-100 bg-white p-7 shadow-sm md:p-10'>
                        <h2 className='text-2xl font-extrabold text-slate-900 md:text-4xl'>Frequently Asked Questions</h2>
                        <div className='mt-6 space-y-3'>
                            {faqs.map((faq) => (
                                <details key={faq.q} className='rounded-xl border border-pink-100 bg-pink-50/60 p-5'>
                                    <summary className='cursor-pointer list-none text-base font-bold text-slate-900 md:text-lg'>
                                        {faq.q}
                                    </summary>
                                    <p className='mt-3 text-sm leading-7 text-slate-700 md:text-base'>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
