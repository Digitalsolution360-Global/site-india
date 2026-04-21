"use client";

import React, { useState, useEffect, useMemo, use } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import LocationStructuredData from '@/components/seo/LocationStructuredData'
import OGMetaTags from '@/components/seo/OGMetaTags'
import {
    IconBuildingStore,
    IconCode,
    IconBrandInstagram,
    IconSpeakerphone,
    IconPencil,
    IconBrandWordpress,
    IconMapPin,
    IconSearch,
    IconChevronDown,
    IconChevronUp,
    IconArrowRight,
    IconBuilding,
    IconLoader2,
    IconPlus,
    IconMinus,
    IconStarFilled,
    IconChecks,
    IconSend,
    IconPhone,
    IconUser,
    IconMail
} from '@tabler/icons-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const CATEGORY_MAP = {
    'gmb': {
        title: 'Google My Business Metro Services',
        icon: IconBuildingStore,
        label: 'Google My Business',
        img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1920&q=80',
        dbCategory: 'Google Business',
        color: 'blue',
        colors: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:bg-blue-100', button: 'bg-blue-600 hover:bg-blue-700', hero: 'to-blue-900/70', badge: 'text-blue-300' }
    },
    'marketing': {
        title: 'Digital Marketing Metro Services',
        icon: IconSpeakerphone,
        label: 'Digital Marketing',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        dbCategory: 'Digital Marketing',
        color: 'orange',
        colors: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', hover: 'hover:bg-orange-100', button: 'bg-orange-600 hover:bg-orange-700', hero: 'to-orange-900/70', badge: 'text-orange-300' }
    },
    'web': {
        title: 'Web Development Metro Services',
        icon: IconCode,
        label: 'Web Development',
        img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
        dbCategory: 'Web Development',
        color: 'purple',
        colors: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:bg-purple-100', button: 'bg-purple-600 hover:bg-purple-700', hero: 'to-purple-900/70', badge: 'text-purple-300' }
    },
    'content-writing': {
        title: 'Content Writing Metro Services',
        icon: IconPencil,
        label: 'Content Writing',
        img: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?w=1920&q=80',
        dbCategory: 'Content Writing',
        color: 'teal',
        colors: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', hover: 'hover:bg-teal-100', button: 'bg-teal-600 hover:bg-teal-700', hero: 'to-teal-900/70', badge: 'text-teal-300' }
    },
    'wordpress': {
        title: 'WordPress Metro Services',
        icon: IconBrandWordpress,
        label: 'WordPress Development',
        img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1920&q=80',
        dbCategory: 'Wordpress Development',
        color: 'indigo',
        colors: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', hover: 'hover:bg-indigo-100', button: 'bg-indigo-600 hover:bg-indigo-700', hero: 'to-indigo-900/70', badge: 'text-indigo-300' }
    },
    'social-media': {
        title: 'Social Media Metro Services',
        icon: IconBrandInstagram,
        label: 'Social Media Marketing',
        img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80',
        dbCategory: 'Social Media',
        color: 'pink',
        colors: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600', hover: 'hover:bg-pink-100', button: 'bg-pink-600 hover:bg-pink-700', hero: 'to-pink-900/70', badge: 'text-pink-300' }
    }
};

export default function MetroCityServicePage({ params }) {
    const rawParams = use(params);
    const service = rawParams.service;
    
    const config = CATEGORY_MAP[service];
    if (!config) {
        redirect(`/${service}`);
    }

    const Icon = config.icon;

    const [expandedState, setExpandedState] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [originalData, setOriginalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`${API_BASE}/market/${service}/metrocities`);
                const json = await res.json();
                if (json.success) {
                    setOriginalData(json.data || []);
                } else {
                    setError('Failed to load data');
                }
            } catch (err) {
                setError('Could not connect to server');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [service]);

    useEffect(() => {
        async function fetchFaqs() {
            try {
                const res = await fetch(`${API_BASE}/faqs?category=${encodeURIComponent(config.dbCategory)}&page_slug=market`);
                const json = await res.json();
                if (json.success) {
                    setFaqs(json.data.map(f => ({ q: f.question, a: f.answer })));
                }
            } catch (err) {
                console.error('Failed to fetch FAQs:', err);
            }
        }
        fetchFaqs();
    }, [config.dbCategory]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API_BASE}/contacts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, number: formData.phone, message: formData.message || `[metro] ${config.label}`, pageurl: `/metro-cities/${service}` })
            }).catch(() => {});
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, message: formData.message || '', _subject: `New Metro Enquiry - ${config.label}`, _captcha: 'false', _template: 'table' })
            }).catch(() => {});
        } catch (err) {}
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };

    const groupedData = useMemo(() => {
        const stateMap = {};
        
        let filtered = originalData;
        if (searchQuery) {
            const lowerSearch = searchQuery.toLowerCase();
            filtered = originalData.filter(item => 
                (item.state_name?.toLowerCase() || '').includes(lowerSearch) ||
                (item.metrocity?.toLowerCase() || '').includes(lowerSearch) ||
                (item.parent_city?.toLowerCase() || '').includes(lowerSearch)
            );
        }

        filtered.forEach((item) => {
            const stateName = item.state_name || 'Other States';
            if (!stateMap[stateName]) stateMap[stateName] = [];
            stateMap[stateName].push(item);
        });

        return Object.keys(stateMap)
            .sort((a, b) => a.localeCompare(b))
            .map((stateName) => ({
                name: stateName,
                cities: stateMap[stateName].sort((a, b) => (a.metrocity || '').localeCompare(b.metrocity || ''))
            }));
    }, [originalData, searchQuery]);

    const totalCities = originalData.length;
    const sidebarCities = originalData.slice(0, 12);

    return (
        <>
            <Header />
            <LocationStructuredData locationData={{ id: 1, name: 'India' }} locationType="country" serviceType={service} />
            <OGMetaTags serviceName={config.label} pageSlug={`metro-cities/${service}`} />

            {loading ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <IconLoader2 className='w-12 h-12 text-blue-600 animate-spin mx-auto mb-4' />
                        <p className='text-gray-600 text-lg'>Loading metro cities...</p>
                    </div>
                </div>
            ) : error ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <p className='text-red-600 text-lg mb-4'>{error}</p>
                        <button onClick={() => window.location.reload()} className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                            Try Again
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {/* Hero Section */}
                    <section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                        <div className='absolute inset-0 z-0'>
                            <div className={`absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 ${config.colors.hero} z-10`} />
                            <img src={config.img} alt={config.label} className='w-full h-full object-cover' />
                        </div>

                        <div className='max-w-7xl mx-auto relative z-20 w-full'>
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <Link href='/metro-cities' className={`inline-flex items-center gap-2 ${config.colors.badge} hover:text-white mb-4 mr-4 transition-colors`}>
                                    <IconArrowRight className='w-4 h-4 rotate-180' /> Back to Metro Categories
                                </Link>

                                <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'>
                                    <Icon className='w-4 h-4' /> {config.label} Metro Cities
                                </motion.span>

                                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                                    {config.title}
                                </h1>

                                <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                                    Find dedicated {config.label} experts stationed strictly in {totalCities}+ premier metro cities across {groupedData.length} key states.
                                </p>

                                <div className='flex flex-wrap gap-4 mb-8'>
                                    <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                        Get Free Consultation <IconArrowRight className='w-5 h-5' />
                                    </Link>
                                </div>

                                <div className='flex flex-wrap gap-6'>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconBuilding className={`w-6 h-6 ${config.colors.badge}`} />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{groupedData.length}</div>
                                            <div className='text-sm text-gray-300'>States</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconMapPin className={`w-6 h-6 ${config.colors.badge}`} />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{totalCities}+</div>
                                            <div className='text-sm text-gray-300'>Metro Cities</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <div className='flex items-center gap-1'>
                                            {[...Array(5)].map((_, i) => (<IconStarFilled key={i} className='w-5 h-5 text-amber-400' />))}
                                        </div>
                                        <div>
                                            <div className='text-xl font-bold text-white'>4.9/5</div>
                                            <div className='text-sm text-gray-300'>Client Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section className='py-20 px-4 md:px-8 lg:px-16 bg-gray-50'>
                        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12'>
                            <div className='w-full lg:w-4/12 order-2 lg:order-1'>
                                <div className='sticky top-24 space-y-8'>
                                    <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
                                        <h3 className='text-2xl font-bold text-gray-900 mb-6'>Quick Enquiry</h3>
                                        <form onSubmit={handleFormSubmit} className='space-y-4'>
                                            <div>
                                                <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                                                <div className='relative'>
                                                    <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                                    <input required type='text' value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' placeholder='John Doe' />
                                                </div>
                                            </div>
                                            <div>
                                                <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                                                <div className='relative'>
                                                    <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                                    <input required type='tel' value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' placeholder='+91 98765 43210' />
                                                </div>
                                            </div>
                                            <div>
                                                <label className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
                                                <div className='relative'>
                                                    <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                                    <input required type='email' value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' placeholder='john@example.com' />
                                                </div>
                                            </div>
                                            <button type='submit' className={`w-full py-4 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${config.colors.button}`}>
                                                Send Message <IconSend className='w-5 h-5' />
                                            </button>
                                            {formStatus === 'success' && <p className='text-green-600 text-sm text-center mt-2 font-medium'>Message sent successfully!</p>}
                                        </form>
                                    </div>
                                    <div className='bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden'>
                                        <div className='absolute top-0 right-0 p-4 opacity-10'><IconBuildingStore className='w-24 h-24' /></div>
                                        <h3 className='text-xl font-bold mb-6 relative z-10'>Popular Metro Cities</h3>
                                        <div className='space-y-4 relative z-10'>
                                            {sidebarCities.map((city, idx) => (
                                                <Link key={idx} href={`/${city.metrocity_slug}`} className='flex items-center justify-between group hover:bg-white/10 p-3 rounded-lg transition-colors'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center'>
                                                            <IconMapPin className='w-4 h-4 text-blue-300' />
                                                        </div>
                                                        <div>
                                                            <div className='font-medium text-sm group-hover:text-blue-300 transition-colors'>{city.metrocity}</div>
                                                            <div className='text-xs text-gray-400 truncate'>{city.state_name}</div>
                                                        </div>
                                                    </div>
                                                    <IconArrowRight className='w-4 h-4 text-gray-500 group-hover:text-blue-300 transform group-hover:translate-x-1 transition-all' />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-8/12 order-1 lg:order-2'>
                                <div className='mb-10 relative'>
                                    <div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
                                        <IconSearch className='w-6 h-6 text-gray-400' />
                                    </div>
                                    <input type='text' placeholder='Search states or metro cities...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-full pl-14 pr-6 py-5 bg-white border-2 border-gray-100 rounded-2xl text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 shadow-lg transition-all' />
                                </div>
                                <div className='space-y-6'>
                                    {groupedData.length === 0 ? (
                                        <div className='bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100'>
                                            <IconMapPin className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No locations found</h3>
                                            <p className='text-gray-500'>Try adjusting your search terms</p>
                                        </div>
                                    ) : (
                                        groupedData.map((stateGroup, index) => {
                                            const isExpanded = expandedState === index;
                                            return (
                                                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className='bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden'>
                                                    <button onClick={() => setExpandedState(isExpanded ? null : index)} className='w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors'>
                                                        <div className='flex items-center gap-4'>
                                                            <div className={`w-12 h-12 ${config.colors.bg} rounded-xl flex items-center justify-center`}>
                                                                <IconBuilding className={`w-6 h-6 ${config.colors.text}`} />
                                                            </div>
                                                            <div className='text-left'>
                                                                <h3 className='text-xl font-bold text-gray-900'>{stateGroup.name}</h3>
                                                                <p className='text-sm text-gray-500 font-medium'>{stateGroup.cities.length} metro cities available</p>
                                                            </div>
                                                        </div>
                                                        <div className={`p-2 rounded-full transition-colors ${isExpanded ? config.colors.bg : 'bg-gray-100'}`}>
                                                            {isExpanded ? <IconChevronUp className={`w-5 h-5 ${config.colors.text}`} /> : <IconChevronDown className='w-5 h-5 text-gray-500' />}
                                                        </div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className='border-t border-gray-100 bg-gray-50/50'>
                                                                <div className='p-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                                                    {stateGroup.cities.map((city, idx) => (
                                                                        <Link key={idx} href={`/${city.metrocity_slug}`} className='group relative flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300'>
                                                                            <div className={`w-10 h-10 ${config.colors.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                                                <IconMapPin className={`w-5 h-5 ${config.colors.text}`} />
                                                                            </div>
                                                                            <div className='min-w-0 flex-1'>
                                                                                <div className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate'>{city.metrocity}</div>
                                                                                {city.parent_city && <div className='text-xs text-gray-500 truncate'>Part of {city.parent_city}</div>}
                                                                            </div>
                                                                            <IconArrowRight className={`w-5 h-5 ${config.colors.text} opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all`} />
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {faqs.length > 0 && (
                        <section className='py-20 px-4 md:px-8 lg:px-16 bg-white'>
                            <div className='max-w-4xl mx-auto'>
                                <div className='text-center mb-12'>
                                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Frequently Asked Questions</h2>
                                    <p className='text-lg text-gray-600'>Everything you need to know about our {config.label} services.</p>
                                </div>
                                <div className='space-y-4'>
                                    {faqs.map((faq, index) => (
                                        <motion.div key={index} className='bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
                                            <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left'>
                                                <span className='text-lg font-semibold text-gray-900'>{faq.q}</span>
                                                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${openFaq === index ? 'bg-blue-600' : 'bg-blue-100'}`}>
                                                    {openFaq === index ? <IconMinus className='w-5 h-5 text-white' /> : <IconPlus className='w-5 h-5 text-blue-600' />}
                                                </div>
                                            </button>
                                            <AnimatePresence>
                                                {openFaq === index && (
                                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className='overflow-hidden'>
                                                        <div className='px-6 pb-6 pt-2'>
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
                    )}
                </>
            )}
            <Footer />
        </>
    );
}
