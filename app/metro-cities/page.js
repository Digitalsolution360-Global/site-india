"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
    IconMapPin,
    IconSearch,
    IconChevronDown,
    IconChevronUp,
    IconArrowRight,
    IconBuilding,
    IconLoader2,
    IconBuildingStore,
    IconSpeakerphone,
    IconCode,
    IconBrandInstagram,
    IconPencil,
    IconBrandWordpress,
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const CATEGORY_CONFIG = [
    { key: 'gmb', api: 'gmb', label: 'Google My Business', dbCategory: 'Google Business', color: 'blue', icon: IconBuildingStore },
    { key: 'marketing', api: 'marketing', label: 'Digital Marketing', dbCategory: 'Digital Marketing', color: 'orange', icon: IconSpeakerphone },
    { key: 'web', api: 'web', label: 'Web Development', dbCategory: 'Web Development', color: 'purple', icon: IconCode },
    { key: 'content-writing', api: 'content-writing', label: 'Content Writing', dbCategory: 'Content Writing', color: 'teal', icon: IconPencil },
    { key: 'wordpress', api: 'wordpress', label: 'WordPress Development', dbCategory: 'Wordpress Development', color: 'indigo', icon: IconBrandWordpress },
    { key: 'social-media', api: 'social-media', label: 'Social Media', dbCategory: 'Social Media', color: 'pink', icon: IconBrandInstagram },
];

const COLOR_MAP = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', iconBg: 'bg-blue-100', hover: 'hover:bg-blue-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', iconBg: 'bg-orange-100', hover: 'hover:bg-orange-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', iconBg: 'bg-purple-100', hover: 'hover:bg-purple-100' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600', iconBg: 'bg-teal-100', hover: 'hover:bg-teal-100' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', iconBg: 'bg-indigo-100', hover: 'hover:bg-indigo-100' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'text-pink-600', iconBg: 'bg-pink-100', hover: 'hover:bg-pink-100' },
};

export default function MetroCitiesPage() {
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        async function fetchMetroData() {
            try {
                const responses = await Promise.all(
                    CATEGORY_CONFIG.map(async (category) => {
                        const res = await fetch(`${API_BASE}/market/${category.api}/metrocities`);
                        const json = await res.json();
                        return {
                            key: category.key,
                            items: json.success ? json.data : [],
                        };
                    })
                );

                const nextData = {};
                responses.forEach((response) => {
                    nextData[response.key] = response.items;
                });
                setCategoryData(nextData);

                const firstWithItems = CATEGORY_CONFIG.find((category) => (nextData[category.key] || []).length > 0);
                if (firstWithItems) {
                    setExpandedCategory(firstWithItems.key);
                }
            } catch (error) {
                console.error('Failed to fetch metro city data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchMetroData();
    }, []);

    const filteredCategoryData = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return categoryData;

        const nextData = {};
        Object.entries(categoryData).forEach(([key, items]) => {
            nextData[key] = items.filter((item) => {
                return [item.metrocity, item.state_name, item.parent_city, item.metrocity_name]
                    .filter(Boolean)
                    .some((value) => value.toLowerCase().includes(query));
            });
        });
        return nextData;
    }, [categoryData, searchQuery]);

    const groupedCategoryData = useMemo(() => {
        const grouped = {};

        Object.entries(filteredCategoryData).forEach(([key, items]) => {
            const stateMap = {};

            (items || []).forEach((item) => {
                const stateName = item.state_name || 'Other States';
                if (!stateMap[stateName]) {
                    stateMap[stateName] = [];
                }
                stateMap[stateName].push(item);
            });

            const sortedStates = Object.keys(stateMap)
                .sort((a, b) => a.localeCompare(b))
                .map((stateName) => ({
                    stateName,
                    items: stateMap[stateName].sort((a, b) => (a.metrocity || '').localeCompare(b.metrocity || '')),
                }));

            grouped[key] = sortedStates;
        });

        return grouped;
    }, [filteredCategoryData]);

    const totalMetroCities = Object.values(categoryData).reduce((sum, items) => sum + items.length, 0);
    const categoriesWithData = CATEGORY_CONFIG.filter((category) => (filteredCategoryData[category.key] || []).length > 0);

    return (
        <>
            <Header />

            {loading ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <IconLoader2 className='w-12 h-12 text-blue-600 animate-spin mx-auto mb-4' />
                        <p className='text-gray-600 text-lg'>Loading metro cities...</p>
                    </div>
                </div>
            ) : (
                <>
                    <section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                        <div className='absolute inset-0 z-0'>
                            <div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 to-indigo-900/70 z-10' />
                            <img
                                src='https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80'
                                alt='Metro Cities Directory'
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='max-w-7xl mx-auto relative z-20 w-full'>
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <Link href='/market-we-serve' className='inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-4 mr-4 transition-colors'>
                                    <IconArrowRight className='w-4 h-4 rotate-180' />
                                    Back to Markets We Serve
                                </Link>

                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                                >
                                    <IconMapPin className='w-4 h-4' />
                                    Metro Cities Directory
                                </motion.span>

                                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                                    Explore Metro City Service Pages
                                </h1>

                                <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                                    This page is only for browsing metro city pages. Final page URLs stay the same as before; this is just a separate directory to choose metro pages without mixing them into the normal state and city listings.
                                </p>

                                <div className='flex flex-wrap gap-6'>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconBuilding className='w-6 h-6 text-indigo-300' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{CATEGORY_CONFIG.length}</div>
                                            <div className='text-sm text-gray-300'>Service Categories</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconMapPin className='w-6 h-6 text-indigo-300' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{totalMetroCities}+</div>
                                            <div className='text-sm text-gray-300'>Metro Pages</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section className='py-10 px-4 md:px-8 lg:px-16'>
                        <div className='max-w-7xl mx-auto'>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className='mb-10'>
                                <div className='relative max-w-xl mx-auto'>
                                    <IconSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                    <input
                                        type='text'
                                        placeholder='Search metro cities, parent cities, or states...'
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg'
                                    />
                                </div>
                            </motion.div>

                            <div className='space-y-6'>
                                {categoriesWithData.map((category, index) => {
                                    const items = filteredCategoryData[category.key] || [];
                                    const stateGroups = groupedCategoryData[category.key] || [];
                                    const isExpanded = expandedCategory === category.key;
                                    const colors = COLOR_MAP[category.color] || COLOR_MAP.blue;
                                    const Icon = category.icon;

                                    return (
                                        <motion.div
                                            key={category.key}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                            className='bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300'
                                        >
                                            <button
                                                onClick={() => setExpandedCategory(isExpanded ? null : category.key)}
                                                className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                                            >
                                                <div className='flex items-center gap-4'>
                                                    <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center`}>
                                                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                                                    </div>
                                                    <div>
                                                        <h2 className='text-xl font-bold text-gray-900'>{category.label}</h2>
                                                        <p className='text-sm text-gray-500'>{items.length} metro pages</p>
                                                    </div>
                                                </div>
                                                {isExpanded ? <IconChevronUp className='w-6 h-6 text-indigo-600' /> : <IconChevronDown className='w-6 h-6 text-gray-400' />}
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
                                                            <div className='space-y-6'>
                                                                {stateGroups.map((stateGroup) => (
                                                                    <div key={stateGroup.stateName}>
                                                                        <div className='mb-3 flex items-center justify-between border-b border-gray-200 pb-2'>
                                                                            <h3 className='text-base font-semibold text-gray-900'>
                                                                                {stateGroup.stateName}
                                                                            </h3>
                                                                            <span className='text-xs font-medium text-gray-500'>
                                                                                {stateGroup.items.length} metro pages
                                                                            </span>
                                                                        </div>

                                                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                                                            {stateGroup.items.map((item) => (
                                                                                <Link
                                                                                    key={item.metrocity_slug}
                                                                                    href={`/${item.metrocity_slug}`}
                                                                                    className={`flex items-start gap-3 px-4 py-4 ${colors.bg} border ${colors.border} rounded-lg ${colors.hover} hover:shadow-md transition-all duration-300 group`}
                                                                                >
                                                                                    <IconMapPin className={`w-4 h-4 ${colors.icon} mt-0.5 shrink-0`} />
                                                                                    <div className='min-w-0 flex-1'>
                                                                                        <div className='text-gray-900 font-medium group-hover:text-black truncate'>{item.metrocity}</div>
                                                                                        <div className='text-xs text-gray-500 truncate'>{item.parent_city}, {item.state_name}</div>
                                                                                    </div>
                                                                                    <IconArrowRight className={`w-4 h-4 ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity shrink-0`} />
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
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

                            {categoriesWithData.length === 0 && (
                                <div className='text-center py-16'>
                                    <IconSearch className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                                    <p className='text-xl text-gray-500'>No metro cities found for your search.</p>
                                </div>
                            )}
                        </div>
                    </section>
                </>
            )}

            <Footer />
        </>
    );
}