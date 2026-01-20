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
    IconStar
} from '@tabler/icons-react'

export default function AboutUsPage() {
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

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80'
                        alt='Team collaboration'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                            >
                                About Us
                            </motion.span>

                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                                About Our Company
                            </h1>

                            <p className='text-xl md:text-2xl text-blue-100 font-semibold mb-6'>
                                Digital Marketing Company in India, Pacesetting the Growth Path
                            </p>

                            <p className='text-lg text-gray-200 leading-relaxed mb-8'>
                                Have you ever tried to notice how there are brands which seem to be everywhere on the Internet? You can see their advertisements on Instagram, they are first in the search on Google, and their videos or blogs are displayed accidentally. This is not a coincidence. It is the strength of online marketing.
                            </p>

                            <div className='flex flex-wrap gap-4'>
                                <a
                                    href='/contact'
                                    className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                                >
                                    Get Started
                                </a>
                                <a
                                    href='#services'
                                    className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'
                                >
                                    Our Services
                                </a>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className='hidden lg:block'
                        >
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center'>
                                    <div className='text-5xl font-bold text-white mb-2'>9+</div>
                                    <div className='text-gray-200 font-medium'>Years Experience</div>
                                </div>
                                <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center'>
                                    <div className='text-5xl font-bold text-white mb-2'>10K+</div>
                                    <div className='text-gray-200 font-medium'>Businesses Goal</div>
                                </div>
                                <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center'>
                                    <div className='text-5xl font-bold text-white mb-2'>100%</div>
                                    <div className='text-gray-200 font-medium'>Transparency</div>
                                </div>
                                <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center'>
                                    <div className='text-5xl font-bold text-white mb-2'>24/7</div>
                                    <div className='text-gray-200 font-medium'>Support</div>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </section>

            {/* Who We Are */}
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
                                href='/contact'
                                className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                Get Started Today
                            </a>
                            <a
                                href='/portfolio'
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