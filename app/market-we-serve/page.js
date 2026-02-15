"use client";

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconBuildingStore,
    IconSearch,
    IconCode,
    IconSpeakerphone,
    IconArrowRight,
    IconBuilding,
    IconMap,
    IconLoader2,
    IconBrandInstagram,
    IconPencil,
    IconBrandWordpress,
    IconPlus,
    IconMinus
} from '@tabler/icons-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function MarketWeServePage() {
    const [stats, setStats] = useState({ totalStates: 0, totalCities: 0, categoryStats: {} });
    const [loading, setLoading] = useState(true);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                const [catRes, statesRes] = await Promise.all([
                    fetch(`${API_BASE}/categories`),
                    fetch(`${API_BASE}/states`)
                ]);
                const catJson = await catRes.json();
                const statesJson = await statesRes.json();

                if (catJson.success && statesJson.success) {
                    const categoryStats = {};
                    catJson.data.forEach(c => { categoryStats[c.category_name] = c.city_count; });
                    const totalCities = catJson.data.reduce((sum, c) => sum + c.city_count, 0);
                    setStats({
                        totalStates: statesJson.data.length,
                        totalCities,
                        categoryStats
                    });
                }
            } catch (err) {
                console.error('Failed to fetch stats:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    const categories = [
        {
            icon: IconBuildingStore,
            title: 'Google My Business',
            slug: 'gmb',
            dbCategory: 'Google Business',
            description: 'Professional GMB listing, optimization, and management services across India.',
            color: 'blue',
        },
        {
            icon: IconSpeakerphone,
            title: 'Digital Marketing',
            slug: 'marketing',
            dbCategory: 'Digital Marketing',
            description: 'Comprehensive digital marketing strategies to grow your business online.',
            color: 'orange',
        },
        {
            icon: IconCode,
            title: 'Website Development',
            slug: 'web',
            dbCategory: 'Web Development',
            description: 'Custom website design and development solutions for businesses of all sizes.',
            color: 'purple',
        },
        {
            icon: IconPencil,
            title: 'Content Writing',
            slug: 'content-writing',
            dbCategory: 'Content Writing',
            description: 'Professional SEO content writing and copywriting services for your business.',
            color: 'teal',
        },
        {
            icon: IconBrandWordpress,
            title: 'WordPress Development',
            slug: 'wordpress',
            dbCategory: 'Wordpress Development',
            description: 'Custom WordPress themes, plugins, and WooCommerce solutions.',
            color: 'indigo',
        },
        {
            icon: IconBrandInstagram,
            title: 'Social Media',
            slug: 'social-media',
            dbCategory: 'Social Media',
            description: 'Expert social media management and marketing to grow your brand online.',
            color: 'pink',
        }
    ];

    const colorMap = {
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', button: 'bg-green-600 hover:bg-green-700' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', button: 'bg-orange-600 hover:bg-orange-700' },
        teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-200', button: 'bg-teal-600 hover:bg-teal-700' },
        indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200', button: 'bg-indigo-600 hover:bg-indigo-700' },
        pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200', button: 'bg-pink-600 hover:bg-pink-700' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80'
                        alt='Market We Serve'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconMapPin className='w-4 h-4' />
                            Pan India Coverage
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Markets We Serve Across India
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            DigitalSolution 360 provides comprehensive digital services across all major cities and states in India. Find our services in your location.
                        </p>

                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                <IconBuilding className='w-6 h-6 text-white' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{loading ? '...' : `${stats.totalStates}+`}</div>
                                    <div className='text-sm text-gray-200'>States & UTs</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                <IconMap className='w-6 h-6 text-white' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{loading ? '...' : `${stats.totalCities}+`}</div>
                                    <div className='text-sm text-gray-200'>Cities Covered</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Our Service Categories
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Select a service category to explore our coverage across Indian states and cities.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const colors = colorMap[category.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/market-we-serve/${category.slug}`}>
                                        <div className={`${colors.bg} border ${colors.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full`}>
                                            <div className='flex items-start justify-between mb-6'>
                                                <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm'>
                                                    <Icon className={`w-8 h-8 ${colors.icon}`} stroke={1.5} />
                                                </div>
                                                <IconArrowRight className={`w-6 h-6 ${colors.icon} opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300`} />
                                            </div>

                                            <h3 className='text-2xl font-bold text-gray-900 mb-3'>{category.title}</h3>
                                            <p className='text-gray-600 mb-6'>{category.description}</p>

                                            <div className='flex items-center gap-6 pt-4 border-t border-gray-200'>
                                                <div className='flex items-center gap-2'>
                                                    <IconBuilding className={`w-5 h-5 ${colors.icon}`} />
                                                    <span className='text-gray-700 font-medium'>{stats.totalStates} States</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <IconMapPin className={`w-5 h-5 ${colors.icon}`} />
                                                    <span className='text-gray-700 font-medium'>{loading ? '...' : (stats.categoryStats[category.dbCategory] || 0)} Cities</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80'
                                alt='Pan India Services'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                Why Choose DigitalSolution 360?
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                We understand the unique needs of businesses across different regions of India. Our localized approach ensures you get services tailored to your market.
                            </p>

                            <div className='space-y-4'>
                                {[
                                    'Local market expertise and understanding',
                                    'Dedicated support in regional languages',
                                    'Proven track record across multiple cities',
                                    'Affordable pricing for all market segments',
                                    'Quick turnaround and responsive service'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className='flex items-center gap-3'
                                    >
                                        <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0'>
                                            <IconArrowRight className='w-4 h-4 text-blue-600' />
                                        </div>
                                        <span className='text-gray-700'>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-4xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <span className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>FAQs</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Frequently Asked Questions</h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Everything you need to know about our pan-India digital services.</p>
                    </motion.div>

                    <div className='space-y-4'>
                        {[
                            { q: 'What digital services does DigitalSolution 360 offer across India?', a: 'We provide six core services pan-India: Google My Business management, Digital Marketing, Website Development, Content Writing, WordPress Development, and Social Media Marketing. Each service is available across 28+ states and thousands of cities.' },
                            { q: 'How do I find services available in my city?', a: 'Simply select a service category on this page, then browse by state to find your city. Each city page provides detailed information about the services we offer in that specific location, along with locally optimized strategies.' },
                            { q: 'Do you provide localized strategies for different cities?', a: 'Absolutely. We tailor our approach to each city\'s unique market dynamics, local competition, consumer behavior, and regional language preferences. Our local expertise ensures your business connects effectively with the right audience.' },
                            { q: 'What makes DigitalSolution 360 different from other agencies?', a: 'Our extensive pan-India coverage, local market expertise, dedicated account managers, transparent pricing, and proven track record across 4,600+ cities set us apart. We combine national-level strategy with local-level execution.' },
                            { q: 'How do I get started with your services?', a: 'Getting started is simple — browse the service categories above, find your city, and click "Get Started" or contact us directly. We offer free consultations to understand your business needs and recommend the best strategy.' },
                            { q: 'Can I avail multiple services for my business?', a: 'Yes! Many of our clients use a combination of our services for maximum impact. For example, pairing Website Development with SEO and Social Media Marketing creates a comprehensive digital presence. We offer bundled packages at discounted rates.' }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className='bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden'
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className='w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors duration-300'
                                >
                                    <span className='text-lg md:text-xl font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-blue-600' : 'bg-blue-100'}`}>
                                        {openFaq === index ? <IconMinus className='w-5 h-5 text-white' stroke={2.5} /> : <IconPlus className='w-5 h-5 text-blue-600' stroke={2.5} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className='overflow-hidden'>
                                            <div className='px-6 md:px-8 pb-6 pt-2'>
                                                <p className='text-gray-600 leading-relaxed'>{faq.a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Can't Find Your City?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            We're constantly expanding our reach. Contact us and we'll bring our services to your location.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
