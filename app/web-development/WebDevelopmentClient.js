"use client";

import React from 'react'
import { motion } from 'motion/react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconTarget,
    IconBulb,
    IconUsers,
    IconTrophy,
    IconChartBar,
    IconShieldCheck,
    IconRocket,
    IconHeart,
    IconStar,
    IconCheck,
    IconCode,
    IconDeviceLaptop,
    IconBrush,
    IconBrandGoogle,
    IconShoppingCart,
    IconServer,
    IconDatabase,
    IconWorld,
    IconCoin,
    IconThumbUp,
    IconHeadphones,
    IconPackage,
    IconBrandWordpress,
    IconBrandShopee,
    IconBrandReact,
    IconBrandAngular,
    IconBrandVue,
    IconBrandPython,
    IconBrandNodejs,
    IconBrandPhp,
    IconBrandJavascript,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandMysql,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandAws,
    IconApi,
    IconLock,
    IconMailForward
} from '@tabler/icons-react'

export default function WebDevelopmentClientPage() {
    const services = [
        { name: 'Search Engine Optimization (SEO)', description: 'Making websites more relevant with right keywords, attractive content, and technical optimization.', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80' },
        { name: 'Local SEO', description: 'Improving visibility for local businesses on Google Maps and local listings.', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80' },
        { name: 'Social Media Marketing (SMM)', description: 'Building communities and brand loyalty through Instagram, LinkedIn, and Facebook.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
        { name: 'PPC Advertising', description: 'Maximizing ROI with accurate targeting and instant brand awareness.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
        { name: 'Web Design & Development', description: 'Professional, responsive, high-performance websites that convert visitors.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80' },
        { name: 'Content Development', description: 'Engaging stories through blogs, videos, and social media posts.', image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400&q=80' },
        { name: 'Graphic Design & Branding', description: 'Aesthetic designs, logos, and brand kits for business identity.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80' },
        { name: 'Online Reputation Management', description: 'Managing reviews and maintaining positive brand image.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80' },
        { name: 'Ecommerce Marketing', description: 'Result-based campaigns to generate traffic and income.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' },
    ];

    const industries = [
        { name: 'Ecommerce & Retail', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80' },
        { name: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80' },
        { name: 'Healthcare & Telemedicine', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
        { name: 'Education & Coaching', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80' },
        { name: 'Hospitality & Travel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
        { name: 'Technology & SaaS', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80' },
        { name: 'Fitness & Wellness', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
        { name: 'Interior Design', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80' },
    ];

    const benefits = [
        { icon: IconChartBar, title: 'Better Exposure', description: 'Enhanced brand recognition across the internet' },
        { icon: IconUsers, title: 'Improved Traffic', description: 'Increased organic traffic and engagement' },
        { icon: IconTarget, title: 'Higher Conversions', description: 'Greater conversion rates with targeted campaigns' },
        { icon: IconHeart, title: 'Customer Loyalty', description: 'Building loyalty through constant interaction' },
        { icon: IconBulb, title: 'Deep Analytics', description: 'Comprehensive analytics to measure results' },
    ];

    return (
        <>
            <Header />

            {/* New Hero Section from provided HTML - adapted */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900">
                {/* Decorative Blurred Blobs */}
                <span className="pointer-events-none absolute -top-16 -left-16 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl"></span>
                <span className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"></span>

                <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight"
                    >
                        India Web Development Companies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-lg sm:text-xl text-sky-300 font-medium"
                    >
                        Friendliness Guide to any person willing to create a site.
                    </motion.p>
                </div>
            </section>

            {/* New Intro Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-lg leading-relaxed text-gray-800"
                    >
                        <p><strong>Hey, Let's Talk About Websites...</strong></p>
                        <p>This is the only opinion... it seems that nowadays it is like creating your online character when you are creating a site. This is unbelievable, but the majority of people evaluates the brand by the appearance of the site even prior to viewing the products. Wild, isn't it?</p>
                        <p>Therefore, should you consider hiring a web development firm in India, I will go through it with you just like we are having a cup of chai. India is now a complete hot spot of the web solutions. It could be a web design, responsive, search engine optimization platforms, or bespoke coded masterpieces, every budget and business requirement would find a company.</p>
                        <p className="font-semibold text-indigo-700 text-xl">Well, shall we dive in?</p>
                    </motion.div>
                </div>
            </section>

            {/* New Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            The reason why to choose US?
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">Why businesses worldwide prefer India for web development.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-lg text-gray-700 leading-relaxed"
                        >
                            <p>The first thing you must know therefore is... The web development business in India is booming. Really booming. The talent pool here? Massive. The creativity? Off the charts. And the affordability? Don't even get me started.</p>
                            <p>This is something you will not believe, but India provides globally superior websites at a cost that will not make you feel the pinch in your pockets. That is why companies across the globe continue to revisit it.</p>
                            <p>The reasons why people love to choose:</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="backdrop-blur-lg bg-white/60 shadow-2xl rounded-3xl p-10 border border-white/30"
                        >
                            <ul className="space-y-5 text-lg">
                                {[
                                    'Skilled developers',
                                    'Modern tech usage',
                                    'Affordable packages',
                                    'Transparent communication',
                                    'Massive experience in international projects'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md group-hover:scale-110 transition-transform">
                                            <IconCheck className="w-6 h-6" stroke={2} />
                                        </span>
                                        <span className="group-hover:text-indigo-700 transition">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-10 text-indigo-700 font-semibold text-xl">Pretty cool, right? So, what do you think?</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* New The Ride Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                            The Ride With Indian Web Development Teams
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'What we believe...',
                                desc: 'The fact that the whole process is so easy is one of the most exciting facets of having an Indian based web development company partner. You will not imagine this, that the majority of teams do not simply accept requirements, but in fact, they assist you in formulating your ideas.',
                                extra: 'They will mentor you on layouts, features, colors, and even what is best in your business. It is not as much as engaging a group of people, but it is more like an online companion following you step by step.'
                            },
                            {
                                title: 'Support That Feels Personal',
                                desc: 'The other aspect that is impressive is the support experience. When you want updates, tweaks or even new features they are as close as a message. Nothing complex, no lines of waiting, but fast and cordial service.',
                                extra: 'It is almost like you are having a group of tech friends at your disposal.'
                            },
                            {
                                title: 'Simple Scalability!',
                                desc: 'This will put a smile on your face in case you are someone who thinks big. The web sites created by Indian developers expand together with you.',
                                extra: 'This can be done by starting with something easy today and subsequently growing to eCommerce, bespoke dashboards or even mobile apps. The transition is smooth in all aspects.'
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="rounded-3xl p-8 shadow-xl border border-white/40 bg-gradient-to-br from-white via-indigo-50 to-purple-50 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">{card.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{card.desc}</p>
                                <p className="mt-4 text-gray-700 leading-relaxed">{card.extra}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New What DigitalSolution360 Does Section */}
            <section className="w-full bg-[#0f0f16] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            What Is it that DigitalSolution360 in India does?
                        </h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Well, great question. Consider them your online building contractors. They construct all of them, clean informational websites, and large eCommerce stores. So this is what I believe... all good companies of developing websites in India tend to deal with the following:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: IconCode, title: 'Website Planning', desc: 'Effective end-to-end structure planning before development.' },
                            { icon: IconBrush, title: 'UI/UX Design', desc: 'Modern, user-friendly interface and experience design.' },
                            { icon: IconBrandReact, title: 'Frontend Development', desc: 'Pixel-perfect coding with fast and responsive UI.' },
                            { icon: IconServer, title: 'Backend Development', desc: 'Secure and scalable server-side development.' },
                            { icon: IconDeviceLaptop, title: 'Responsive Design', desc: 'Perfect fit across all screen sizes and devices.' },
                            { icon: IconBrandGoogle, title: 'SEO-Friendly Development', desc: 'Clean code + fast loading = Google-friendly websites.' },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition duration-300 shadow-xl"
                                >
                                    <div className="mb-4 flex justify-center">
                                        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md">
                                            <Icon className="h-7 w-7 text-white" stroke={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white text-center mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-center">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                        {/* Maintenance Card - spans columns on large screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 6 * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition duration-300 shadow-xl md:col-span-2 lg:col-span-3"
                        >
                            <div className="mb-4 flex justify-center">
                                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-md">
                                    <IconHeadphones className="h-7 w-7 text-white" stroke={1.5} />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white text-center mb-2">Maintenance & Support</h3>
                            <p className="text-gray-300 text-center">Hosting, domain setup, speed optimization & lifelong support.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* New Innovative Design Freedom Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        Innovative Design Freedom that Makes Your Website Special.
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: IconBrush,
                                title: 'Innovative Design Freedom that Makes Your Website Special.',
                                desc: 'This is what to believe... with the cooperation with Our Web Developers you receive this incredible combination of creativity and pragmatism. It doesn\'t seem to believe it, but a lot of these teams do not only follow the trends, they are the ones who make them. They play with cutting-edge designs, graphic color combinations, and effects, and get your site to move. It is a combination of creative studio and tech team. And frankly speaking who does not desire to have a site that will leave a visitor saying, "Wow, this is nice!"'
                            },
                            {
                                icon: IconDeviceLaptop,
                                title: 'Technological Flexibility to Future-Proof You.',
                                desc: 'Well, the other fact that is so impressive is how rapidly the developers adjust to novel technologies. Headless CMS, AI-based search, cloud hosting, or progressive web applications — they never lag behind. This implies that your website is not only created today but it is also prepared for the future. Do you know that it is no longer stressful knowing that your site is able to support new functionality without the need to rebuild it entirely?'
                            }
                        ].map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.05)] p-8 border border-gray-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition"
                                >
                                    <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 text-white shadow-md mb-6">
                                        <Icon className="h-8 w-8" stroke={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* New Web Design and Development AT Digitalsolution360 Section */}
            <section className="w-full bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent pb-6"
                    >
                        Web Design and Development AT Digitalsolution360
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: IconWorld,
                                title: 'International Thinking and Local Friendliness.',
                                desc: 'Believe it or not, majority of Indian web companies have plenty of experience in dealing with clients in the US, UK, UAE, and Australia among others. They are aware of world standards, time limits and the quality. But at the same time, they retain the friendly warm Indian service atmosphere. It is professional delivery with the one-on-one. Sounds nice, right?'
                            },
                            {
                                icon: IconHeadphones,
                                title: 'Maintenance Without the Hassle.',
                                desc: 'That is not much people talk about... once a site is launched, the hard work starts. But the teams put a feeling of ease when it comes to maintenance. Need a new banner? Fixed. Want to update content? Done. Have an idea of a new feature? They\'re already on it. It is almost the same as your own-in-house tech team without the need to hire one.'
                            },
                            {
                                icon: IconCode,
                                title: 'Web Design and Development AT Digitalsolution360 The Magic they make.',
                                desc: 'You are aware that there are sites that make you automatically say wow? That is what is beautiful about a good web design and development company. They combine innovativeness with code. It is not only about making your site look good. It is about simplifying it, making it quick and convenient.'
                            }
                        ].map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="rounded-3xl p-8 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition duration-300"
                                >
                                    <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-md mb-6">
                                        <Icon className="h-8 w-8" stroke={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{card.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{card.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* New The Design Part Section */}
            <section className="w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-12"
                    >
                        The Design Part <span className="text-sky-400">(The 'Looks')</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] mx-auto max-w-5xl border border-white/20"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            {[
                                'Choosing Colors',
                                'Typography',
                                'Layout',
                                'Brand Identity',
                                'Visual Elements',
                                'Consistency'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-all p-5 rounded-2xl border border-white/10 group"
                                >
                                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-400 shadow-lg group-hover:scale-110 transition">
                                        <IconCheck className="h-6 w-6 text-white" stroke={2} />
                                    </div>
                                    <span className="text-white text-lg font-semibold">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed">
                            This is what I believe... design is the impression first. And you never get a second chance of that.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* New The Development Part Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
                                The Development Part <span className="text-indigo-600">(The 'Engine')</span>
                            </h2>
                            <ul className="space-y-3 text-lg text-gray-700">
                                {['Writing clean code', 'Building features', 'Setting up databases', 'Integrating APIs', 'Creating dashboards'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3"><span className="h-3 w-3 bg-indigo-600 rounded-full"></span> {item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-600 text-lg leading-relaxed">When design is the face, then development is the brain. Both need to be in sync.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-indigo-600">Who Needs Custom Solutions?</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-lg">
                                {['Startups', 'Enterprises', 'NGOs', 'Personal brands', 'Coaches', 'Educational institutions'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2"><span className="text-indigo-600 font-bold">•</span> {item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-600 text-lg mt-2">Essentially... all those wanting something special.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-lg"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-indigo-600">Custom Web Development Services At DigitalSolution360:</h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">Now, as we are telling you... custom websites are marvelous at DigitalSolution360.in. Since they are literally designed to fit YOU. Not generic templates. Not cookie-cutters.</p>
                        <h4 className="text-2xl font-semibold text-indigo-500 mb-4">What is the rationale of Custom Development?</h4>
                        <ul className="space-y-3 text-gray-700 text-lg mb-6">
                            {['You get tailor-made features', 'Your brand stands out', 'Better performance', 'Stronger security', 'Scalable for future growth'].map((item, idx) => (
                                <li key={idx} className="flex gap-3"><span className="text-indigo-500 font-bold">•</span> {item}</li>
                            ))}
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed">Is it possible to envision having a website that your audience went to believe was handmade? So there you have custom development.</p>
                    </motion.div>
                </div>
            </section>

            {/* New Responsive Web Design Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug"
                    >
                        Responsive Web Design Services at <span className="text-indigo-600">DigitalSolution360</span>: A Complete Necessity
                    </motion.h2>
                    <p className="text-gray-700 text-lg leading-relaxed">So, the honesty of the statement... in this day and age, with no mobile friendly website, you are losing half of your audience. No kidding.</p>
                    <h3 className="text-2xl font-semibold text-indigo-600">Responsive site design service guarantees that your site appears flawless on:</h3>
                    <ul className="flex flex-wrap justify-center gap-10 text-gray-700 text-lg list-none mt-4">
                        {['Phones', 'Tablets', 'Laptops', 'Big screens', 'Foldable devices'].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2"><span className="text-indigo-600 font-bold">•</span> {item}</li>
                        ))}
                    </ul>
                    <p className="text-gray-700 text-lg leading-relaxed mt-6">Well, the fun part? You do not have to have different websites. One of the sites even changes automatically as magic. It will not believe the number of brands that overlook the idea of responsiveness — and then why their traffic ceases.</p>
                </div>
            </section>

            {/* New Ecommerce Website Development Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug"
                    >
                        Ecommerce Website Development: The Foundation of Online Business
                    </motion.h2>
                    <p className="text-gray-700 text-lg leading-relaxed">And this is where you come in, in case you plan on selling online. DigitalSolution360 that deals with the development of eCommerce sites can develop:</p>
                    <ul className="flex flex-wrap justify-center gap-10 text-gray-700 text-lg list-none mt-6">
                        {['Online stores', 'Multi-vendor marketplaces', 'Dropshipping sites', 'Subscription platforms', 'B2B wholesale portals'].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2"><span className="text-indigo-600 font-bold">•</span> {item}</li>
                        ))}
                    </ul>
                    <p className="text-gray-700 text-lg leading-relaxed mt-6">Pretty cool, right? This is how DigitalSolution360 ensures your online business is fully functional and scalable for all your eCommerce needs.</p>
                </div>
            </section>

            {/* New Popular Features Section */}
            <section className="w-full bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-900 py-20 px-6 text-white">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-center"
                    >
                        Popular Features DigitalSolution360 Builds
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            'Product management',
                            'Payment gateways',
                            'Cart & checkout',
                            'Wishlist',
                            'Vendor dashboards',
                            'Shipment tracking',
                            'Inventory automation'
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg"
                            >
                                <div className="flex justify-center">
                                    <IconPackage className="w-10 h-10 text-indigo-400" stroke={1.5} />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{feature}</h3>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-lg text-white/90 mt-8 max-w-3xl mx-auto">
                        This is what you should believe... eCommerce should be detailed and precise. A single glitch and customers are shot. This is why it is so significant to collaborate with specialists.
                    </p>
                </div>
            </section>

            {/* New SEO-Friendly + Low-priced Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
                            SEO-Friendly Web Development Service: <span className="text-indigo-600">only possible at DigitalSolution360</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">And you create a wonderful site... and no one looks at it. Sad, right? This is the reason why search engine optimization of websites is a savior. Indian companies are now developing web sites that Google likes.</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug pt-6">
                            Low-priced Web Development Services in India
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            This is what we think... the greatest thing with Indian agencies is that it is cheap and it's all together in <span className="text-indigo-600 font-semibold">DigitalSolution360.in</span>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-lg"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-indigo-600">What Makes a Website SEO-Friendly?</h3>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            {['Clean code', 'Fast loading', 'Mobile-friendly', 'Structured data', 'Optimized images', 'Indexable pages', 'Proper heading structure', 'Sitemap integration'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <IconCheck className="w-6 h-6 text-green-500 flex-shrink-0" stroke={2} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-6">This is what you will not believe because half of SEO ranking is determined by how your site is constructed and not by your keywords you add afterwards.</p>
                    </motion.div>
                </div>
            </section>

            {/* New Typical Price Range Section */}
            <section className="w-full bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800"
                    >
                        Typical Price Range
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Basic Website', price: 'INR 10,000/-' },
                            { title: 'Business Site', price: 'INR 10,000/-' },
                            { title: 'Ecommerce Site', price: 'INR 15,000/-' },
                            { title: 'Custom Applications', price: 'Variable' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
                            >
                                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
                                <p className="text-gray-700 font-bold">{item.price}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-3xl mx-auto">Well, it depends on your needs. However, pricing leaves everything to be desired compared to other countries. So... what do you think? Worth it, right?</p>
                </div>
            </section>

            {/* New The Choice of the Right Web Development Company Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center"
                    >
                        The Choice of the Right Web Development Company <span className="text-indigo-600">(Is it DigitalSolution360!)</span>
                    </motion.h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">Honestly speaking, it is confusing to find the appropriate agency. However, here DigitalSolution360.in is an easy method of making it cold.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 text-white rounded-3xl p-10 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-sky-400 mb-4">Checklist to Follow</h3>
                            <ul className="space-y-3 text-lg">
                                {['Look at their portfolio', 'Read reviews', 'Ask about their tech stack', 'Test their style of communication', 'Compare pricing', 'Understand their process', 'Enquire about after sales service'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <IconCheck className="w-5 h-5 text-green-400" stroke={2} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-900 text-white rounded-3xl p-10 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-sky-400 mb-4">Our Personal Opinion</h3>
                            <p className="text-lg leading-relaxed mb-4">Once a company is open right at the very beginning, they are most likely to be a good choice.</p>
                            <h4 className="text-xl font-semibold text-white mb-2">Some Questions to Ask Casually:</h4>
                            <ul className="space-y-2 text-lg">
                                <li>"How much time is the project going to take?"</li>
                                <li>"What technologies do you use?"</li>
                                <li>"Do you offer maintenance?"</li>
                                <li>"How search engine friendly will my site be?"</li>
                            </ul>
                            <p className="text-lg mt-2">Questions simple, yet they say a lot.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* New The Process Section */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center"
                    >
                        The Process: <span className="text-indigo-600">The Real Process of Web Development</span>
                    </motion.h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">This is something you will not believe, but creating a site does not only involve coding. It's a full journey.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Step-by-Step Flow', desc: 'Requirement Discussion: You share your ideas. They listen.' },
                            { title: 'Planning & Wireframes', desc: 'The blueprint gets ready.' },
                            { title: 'Design', desc: 'Colors, design, branding - all the visuals.' },
                            { title: 'Development', desc: 'This is the magic really taking place.' },
                            { title: 'Testing', desc: 'They work out bugs, increase velocity, and perfect all.' },
                            { title: 'Launch & Support', desc: 'The site goes live. They maintain the things in order and clean.' }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-3xl p-8 shadow-lg flex items-start gap-4"
                            >
                                <IconCheck className="w-8 h-8 text-indigo-600 flex-shrink-0" stroke={2} />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                                    <p className="text-gray-700 mt-1">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mt-6">
                        Pretty neat, right? It is a clean process that leads to the growth of websites. Web Development Companies like DigitalSolution360.in. Let's geek out for a second.
                    </p>
                </div>
            </section>

            {/* New DigitalSolution360 Have Some Rad Technology Section */}
            <section className="w-full bg-white py-20 px-6 text-black">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-center"
                    >
                        DigitalSolution360 Have Some Rad Technology
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Frontend */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Frontend</h3>
                            <ul className="space-y-3 text-lg">
                                {['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue'].map((tech, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <IconBrandHtml5 className="w-6 h-6 text-orange-500" /> {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        {/* Backend */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Backend</h3>
                            <ul className="space-y-3 text-lg">
                                {['PHP', 'Node.js', 'Python', 'Java', '.NET'].map((tech, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <IconBrandPhp className="w-6 h-6 text-purple-500" /> {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        {/* CMS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">CMS</h3>
                            <ul className="space-y-3 text-lg">
                                {['WordPress', 'Shopify', 'Magento', 'Drupal'].map((tech, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <IconBrandWordpress className="w-6 h-6 text-blue-500" /> {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        {/* Databases */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Databases</h3>
                            <ul className="space-y-3 text-lg">
                                {['MySQL', 'MongoDB', 'PostgreSQL'].map((tech, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <IconBrandMysql className="w-6 h-6 text-blue-700" /> {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    <p className="text-center text-black/90 text-lg max-w-3xl mx-auto mt-6">
                        Well that will be up to your project requirements. However, believe us, our teams are at ease with anything and everything.
                    </p>
                </div>
            </section>

            {/* New Advantages of Doing Business with DigitalSolution360.in Section */}
            <section className="w-full bg-gray-900 py-20 px-6 text-white">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-400"
                    >
                        Advantages of Doing Business with DigitalSolution360.in
                    </motion.h2>
                    <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto">And here is the opinion... advantages are enormous.</p>
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <ul className="space-y-3 text-gray-200 text-lg list-disc list-inside">
                                <li>Cost-effective</li>
                                <li>Affordable and not sacrificing quality.</li>
                                <li>Skilled Developers</li>
                                <li>Creativity + talent = great combination.</li>
                                <li>Faster Delivery</li>
                                <li>Time zone benefit + teamwork.</li>
                                <li>Modern Tools</li>
                                <li>Updated with global trends.</li>
                                <li>Support Availability</li>
                                <li>Easy to reach. Easy to work with.</li>
                                <li>Scalable Solutions</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-gray-200 text-lg"
                        >
                            <p>Websites increase in line with your business.</p>
                            <p>And all this at so good prices? You can imagine. Insane.</p>
                            <p><strong>Last Minute Ideas -- Your Site Needs the Best.</strong></p>
                            <p>Well, we think this is the case as your friend...</p>
                            <p>Whether you have a clean portfolio site, a flashy eCommerce site, or a wafer-made site, selecting DigitalSolution360.in is sincerely one of the most intelligent moves that you can make.</p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Amazing quality</li>
                                <li>Friendly communication</li>
                                <li>Affordable pricing</li>
                                <li>Future-ready technology</li>
                            </ul>
                            <p>And the vibe? Professional and friendly super. So, what do you think? Are you willing to go online to the next level?</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* New DigitalSolution360.in Can Help You Too Section */}
            <section className="w-full bg-white py-20 px-6 text-gray-900">
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-600"
                    >
                        DigitalSolution360.in Can Help You Too
                    </motion.h2>
                    <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">By your pleasure:</p>
                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            'Draft a project brief',
                            'Compare companies',
                            'Create pricing tables',
                            'Write website content'
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-900/90 text-white backdrop-blur-md rounded-2xl p-6 flex items-center gap-3 shadow-lg"
                            >
                                <IconCheck className="w-6 h-6 text-indigo-400 flex-shrink-0" stroke={2} />
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Existing Original Sections (with minor adjustments to avoid duplication) */}
            {/* Who We Are - Keep as is but maybe rename heading slightly? */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                                Who is <span className='text-blue-600'>Digitalsolution360</span>?
                            </h2>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                Digitalsolution360 is the leading digital marketing company in India that assists companies to expand their online presence and build valuable relationships. We transform a company into nothing more than just another name, but into a reliable and familiar brand.
                            </p>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                Our philosophy may be simplicity itself: <span className='font-semibold text-blue-600'>"Your Growth. Our Strategy."</span> We consider the success of a client our success.
                            </p>
                            <p className='text-gray-600 leading-relaxed'>
                                Digitalsolution360 is an organization of digital enthusiasts who are driven by innovation and good strategy. Our trip started with one aim: to transform businesses of every scale into having world-class digital marketing.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='grid grid-cols-2 gap-6'
                        >
                            <div className='bg-blue-50 rounded-lg p-6 text-center'>
                                <div className='text-5xl font-bold text-blue-600 mb-2'>9+</div>
                                <div className='text-gray-700 font-medium'>Years Experience</div>
                            </div>
                            <div className='bg-purple-50 rounded-lg p-6 text-center'>
                                <div className='text-5xl font-bold text-purple-600 mb-2'>10K+</div>
                                <div className='text-gray-700 font-medium'>Businesses Goal</div>
                            </div>
                            <div className='bg-green-50 rounded-lg p-6 text-center'>
                                <div className='text-5xl font-bold text-green-600 mb-2'>100%</div>
                                <div className='text-gray-700 font-medium'>Transparency</div>
                            </div>
                            <div className='bg-orange-50 rounded-lg p-6 text-center'>
                                <div className='text-5xl font-bold text-orange-600 mb-2'>24/7</div>
                                <div className='text-gray-700 font-medium'>Support</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Our Comprehensive Services
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            We offer holistic digital marketing services ensuring all elements of your online presence work in harmony.
                        </p>
                    </motion.div>

                    <div id='services' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300'
                            >
                                <div className='h-48 overflow-hidden'>
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                                    />
                                </div>
                                <div className='p-6'>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.name}</h3>
                                    <p className='text-gray-600'>{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Why Partner With Us?
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            Collaborating with Digitalsolution360 brings measurable and lasting benefits to your business.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            const colors = [
                                { bg: 'bg-blue-50', iconBg: 'bg-blue-100', icon: 'text-blue-600' },
                                { bg: 'bg-green-50', iconBg: 'bg-green-100', icon: 'text-green-600' },
                                { bg: 'bg-purple-50', iconBg: 'bg-purple-100', icon: 'text-purple-600' },
                                { bg: 'bg-orange-50', iconBg: 'bg-orange-100', icon: 'text-orange-600' },
                                { bg: 'bg-pink-50', iconBg: 'bg-pink-100', icon: 'text-pink-600' },
                            ];
                            const color = colors[index % colors.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className={`${color.bg} rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300`}
                                >
                                    <div className={`w-16 h-16 ${color.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                                        <Icon className={`w-8 h-8 ${color.icon}`} stroke={1.5} />
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                                    <p className='text-gray-600 text-sm'>{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Industries We Serve
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            We adapt strategies to the unique audience and objectives of each industry.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300'
                            >
                                <div className='h-40 overflow-hidden'>
                                    <img
                                        src={industry.image}
                                        alt={industry.name}
                                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                                    />
                                </div>
                                <div className='p-4 text-center'>
                                    <h3 className='font-semibold text-gray-900'>{industry.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Real Success Stories
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            Our campaigns have transformed the success stories of many businesses.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className='border-l-4 border-blue-600 pl-6'
                        >
                            <div className='text-4xl font-bold text-blue-600 mb-2'>300%</div>
                            <h3 className='text-xl font-bold text-gray-900 mb-2'>Fitness Company</h3>
                            <p className='text-gray-600'>
                                Membership increased by 300% within six months through geo-targeted advertising.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className='border-l-4 border-green-600 pl-6'
                        >
                            <div className='text-4xl font-bold text-green-600 mb-2'>400%</div>
                            <h3 className='text-xl font-bold text-gray-900 mb-2'>Healthcare Business</h3>
                            <p className='text-gray-600'>
                                Traffic increased by 400% and doubled conversions with content-based approaches.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='border-l-4 border-purple-600 pl-6'
                        >
                            <div className='text-4xl font-bold text-purple-600 mb-2'>10x</div>
                            <h3 className='text-xl font-bold text-gray-900 mb-2'>Home Decor Brand</h3>
                            <p className='text-gray-600'>
                                Achieved 10-fold increase in followers through Instagram influencer campaign.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            What Makes Us Different?
                        </h2>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            { icon: IconTarget, title: 'Personal Approach', desc: 'Customized strategies for each client' },
                            { icon: IconChartBar, title: 'Data-Driven Solutions', desc: 'Analytics-backed decision making' },
                            { icon: IconShieldCheck, title: 'Transparent Communication', desc: 'Open and honest reporting' },
                            { icon: IconRocket, title: 'Performance-Based', desc: 'Results that matter' },
                            { icon: IconBulb, title: 'Continuous Innovation', desc: 'Always evolving with trends' },
                            { icon: IconHeart, title: 'Affordable Services', desc: 'Solutions for all business sizes' },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='flex gap-4'
                                >
                                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                                        <Icon className='w-6 h-6 text-blue-600' stroke={1.5} />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
                                        <p className='text-gray-600'>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Vision & CSR */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='border border-gray-200 rounded-lg p-8'
                        >
                            <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
                                <IconRocket className='w-8 h-8 text-blue-600' stroke={1.5} />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Vision for 2030</h2>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                Empowering more than 10,000 businesses worldwide with scalable and AI-based digital ecosystems.
                            </p>
                            <p className='text-gray-600 leading-relaxed'>
                                We intend to venture into global markets and create our own proprietary marketing automation software, constantly investing in training, analytics, and innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='border border-gray-200 rounded-lg p-8'
                        >
                            <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6'>
                                <IconHeart className='w-8 h-8 text-green-600' stroke={1.5} />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Corporate Social Responsibility</h2>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                We believe in honesty, responsibility, and ethical marketing. We don't engage in manipulative communication or intrude upon user privacy.
                            </p>
                            <p className='text-gray-600 leading-relaxed'>
                                Through CSR activities, we democratize digital knowledge by holding workshops for small business owners and students, partnering with NGOs for sustainability and mental health awareness.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                            Ready to Transform Your Business?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Digitalsolution360 is not just another digital marketing company—we're your real growth partner. Let's turn possibilities into outcomes together.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <a
                                href='/contact-us'
                                className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                Get Started Today
                            </a>
                            <a
                                href='/case-studies'
                                className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105'
                            >
                                View Our Work
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}