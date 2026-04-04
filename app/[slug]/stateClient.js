"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
    IconArrowRight,
    IconLoader2,
    IconMapPin,
    IconBuildingStore,
    IconSearch,
    IconCode,
    IconSpeakerphone,
    IconBuilding,
    IconBrandInstagram,
    IconPencil,
    IconBrandWordpress,
    IconChevronDown,
    IconChevronUp,
    IconPhone,
    IconMail,
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const CATEGORY_CONFIG = {
    'Google Business': {
        label: 'Google My Business',
        icon: IconBuildingStore,
        color: 'blue',
        slug: 'gmb',
    },
    'Digital Marketing': {
        label: 'Digital Marketing',
        icon: IconSpeakerphone,
        color: 'orange',
        slug: 'marketing',
    },
    'Web Development': {
        label: 'Web Development',
        icon: IconCode,
        color: 'purple',
        slug: 'web',
    },
    'Social Media': {
        label: 'Social Media Marketing',
        icon: IconBrandInstagram,
        color: 'pink',
        slug: 'social-media',
    },
    'Content Writing': {
        label: 'Content Writing',
        icon: IconPencil,
        color: 'teal',
        slug: 'content-writing',
    },
    'Wordpress Development': {
        label: 'WordPress Development',
        icon: IconBrandWordpress,
        color: 'indigo',
        slug: 'wordpress',
    },
};

const COLOR_MAP = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', iconBg: 'bg-blue-100', hover: 'hover:bg-blue-100', tag: 'bg-blue-100 text-blue-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', iconBg: 'bg-orange-100', hover: 'hover:bg-orange-100', tag: 'bg-orange-100 text-orange-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', iconBg: 'bg-purple-100', hover: 'hover:bg-purple-100', tag: 'bg-purple-100 text-purple-700' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'text-pink-600', iconBg: 'bg-pink-100', hover: 'hover:bg-pink-100', tag: 'bg-pink-100 text-pink-700' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600', iconBg: 'bg-teal-100', hover: 'hover:bg-teal-100', tag: 'bg-teal-100 text-teal-700' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', iconBg: 'bg-indigo-100', hover: 'hover:bg-indigo-100', tag: 'bg-indigo-100 text-indigo-700' },
};

export default function StateClient() {
    const { slug } = useParams();
    const [stateData, setStateData] = useState(null);
    const [categories, setCategories] = useState({});
    const [loading, setLoading] = useState(true);
    const [expandedCat, setExpandedCat] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (!slug) return;
        (async () => {
            try {
                const res = await fetch(`${API_BASE}/states/${slug}/all-cities`);
                const json = await res.json();
                if (json.success) {
                    setStateData(json.data.state);
                    setCategories(json.data.categories);
                    // Auto-expand the first category
                    const cats = Object.keys(json.data.categories);
                    if (cats.length > 0) setExpandedCat(cats[0]);
                }
            } catch (e) {
                console.error('Failed to fetch state data:', e);
            } finally {
                setLoading(false);
            }
        })();
    }, [slug]);

    const totalCities = Object.values(categories).reduce((sum, arr) => sum + arr.length, 0);
    const categoryCount = Object.keys(categories).length;

    // Filter cities by search
    const getFilteredCities = (catCities) => {
        if (!searchQuery.trim()) return catCities;
        const q = searchQuery.toLowerCase();
        return catCities.filter(c => c.name.toLowerCase().includes(q));
    };

    if (loading) {
        return (
            <>
                <Header />
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <IconLoader2 className='w-12 h-12 text-blue-600 animate-spin mx-auto mb-4' />
                        <p className='text-gray-600 text-lg'>Loading state data...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (!stateData) {
        return (
            <>
                <Header />
                <div className='min-h-screen flex items-center justify-center'>
                    <p className='text-gray-600 text-lg'>State not found.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[50vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 to-blue-900/70 z-10' />
                    <img
                        src='/banner-digitalsolution360.webp'
                        alt={`Digital Services in ${stateData.name}`}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href='/market-we-serve'
                            className='inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 mr-4 transition-colors'
                        >
                            <IconArrowRight className='w-4 h-4 rotate-180' />
                            Back to All Markets
                        </Link>

                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconBuilding className='w-4 h-4' />
                            {stateData.name}
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Digital Services in {stateData.name}
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            {`Professional digital marketing, web development, SEO, and branding services across ${totalCities}+ cities in ${stateData.name}. Contact us for a free consultation.`}
                        </p>

                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                Get Free Consultation
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                        </div>

                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <IconBuildingStore className='w-6 h-6 text-blue-300' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{categoryCount}</div>
                                    <div className='text-sm text-gray-300'>Services</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <IconMapPin className='w-6 h-6 text-blue-300' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{totalCities}+</div>
                                    <div className='text-sm text-gray-300'>Cities</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Search */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='mb-10'
                    >
                        <div className='relative max-w-xl mx-auto'>
                            <IconSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                            <input
                                type='text'
                                placeholder={`Search cities in ${stateData.name}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg'
                            />
                        </div>
                    </motion.div>

                    {/* Service Categories with Cities */}
                    <div className='space-y-6'>
                        {Object.entries(categories).map(([catName, cities], index) => {
                            const config = CATEGORY_CONFIG[catName] || { label: catName, icon: IconBuildingStore, color: 'blue', slug: '' };
                            const colors = COLOR_MAP[config.color] || COLOR_MAP.blue;
                            const CatIcon = config.icon;
                            const filtered = getFilteredCities(cities);
                            const isExpanded = expandedCat === catName;

                            if (searchQuery && filtered.length === 0) return null;

                            return (
                                <motion.div
                                    key={catName}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className='bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300'
                                >
                                    <button
                                        onClick={() => setExpandedCat(isExpanded ? null : catName)}
                                        className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                                    >
                                        <div className='flex items-center gap-4'>
                                            <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center`}>
                                                <CatIcon className={`w-6 h-6 ${colors.icon}`} />
                                            </div>
                                            <div>
                                                <h2 className='text-xl font-bold text-gray-900'>{config.label}</h2>
                                                <p className='text-sm text-gray-500'>
                                                    {filtered.length} {filtered.length === 1 ? 'city' : 'cities'} in {stateData.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Link
                                                href={`/market-we-serve/${config.slug}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className='hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors'
                                            >
                                                View All India
                                                <IconArrowRight className='w-4 h-4' />
                                            </Link>
                                            {isExpanded ? (
                                                <IconChevronUp className='w-6 h-6 text-blue-600' />
                                            ) : (
                                                <IconChevronDown className='w-6 h-6 text-gray-400' />
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className='overflow-hidden'
                                            >
                                                <div className='px-6 pb-6 pt-2'>
                                                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                                                        {filtered.map((city) => (
                                                            <Link
                                                                key={city.slug}
                                                                href={`/${city.slug}`}
                                                                className={`flex items-center gap-2 px-4 py-3 ${colors.bg} border ${colors.border} rounded-lg ${colors.hover} hover:shadow-md transition-all duration-300 group`}
                                                            >
                                                                <IconMapPin className={`w-4 h-4 ${colors.icon}`} />
                                                                <span className='text-gray-700 font-medium group-hover:text-gray-900 truncate'>{city.name}</span>
                                                                <IconArrowRight className={`w-4 h-4 ${colors.icon} ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0`} />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* No results */}
                    {searchQuery && Object.entries(categories).every(([, cities]) => getFilteredCities(cities).length === 0) && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='text-center py-16'
                        >
                            <IconSearch className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                            <p className='text-xl text-gray-500'>No cities found matching &quot;{searchQuery}&quot;</p>
                            <button
                                onClick={() => setSearchQuery('')}
                                className='mt-4 text-blue-600 hover:text-blue-800 font-medium'
                            >
                                Clear search
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        Need Digital Services in {stateData.name}?
                    </h2>
                    <p className='text-lg text-blue-100 mb-8 max-w-2xl mx-auto'>
                        Get a free consultation from our experts. We provide end-to-end digital solutions for businesses across {stateData.name}.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Link
                            href='/contact-us'
                            className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                        >
                            <IconMail className='w-5 h-5' />
                            Contact Us
                        </Link>
                        <a
                            href='tel:+919990556217'
                            className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                        >
                            <IconPhone className='w-5 h-5' />
                            +91 99905 56217
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
