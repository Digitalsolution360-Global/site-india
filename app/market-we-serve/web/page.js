"use client";

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconSearch,
    IconMapPin,
    IconChevronDown,
    IconChevronUp,
    IconArrowRight,
    IconBuilding,
    IconCode,
    IconLoader2,
    IconPlus,
    IconMinus
} from '@tabler/icons-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function WebDevelopmentMarketPage() {
    const [expandedState, setExpandedState] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statesData, setStatesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`${API_BASE}/market/web`);
                const json = await res.json();
                if (json.success) {
                    setStatesData(json.data);
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
    }, []);

    const filteredStates = statesData.filter(state =>
        state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.cities.some(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const totalCities = statesData.reduce((acc, state) => acc + state.cities.length, 0);

    return (
        <>
            <Header />

            {loading ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <IconLoader2 className='w-12 h-12 text-purple-600 animate-spin mx-auto mb-4' />
                        <p className='text-gray-600 text-lg'>Loading locations...</p>
                    </div>
                </div>
            ) : error ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <p className='text-red-600 text-lg mb-4'>{error}</p>
                        <button onClick={() => window.location.reload()} className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700'>
                            Try Again
                        </button>
                    </div>
                </div>
            ) : (
                <>

                    {/* Hero Section */}
                    <section className='relative min-h-[50vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                        <div className='absolute inset-0 z-0'>
                            <div className='absolute inset-0 bg-linear-to-r from-purple-900/95 via-purple-800/90 to-transparent z-10' />
                            <img
                                src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80'
                                alt='Website Development Services'
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
                                    className='inline-flex items-center gap-2 text-purple-200 hover:text-white mb-4 mr-4 transition-colors'
                                >
                                    <IconArrowRight className='w-4 h-4 rotate-180' />
                                    Back to All Services
                                </Link>

                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                                >
                                    <IconCode className='w-4 h-4' />
                                    Website Development
                                </motion.span>

                                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                                    Website Development Across India
                                </h1>

                                <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                                    Professional website development services to build stunning, high-performance websites in {statesData.length}+ states and {totalCities}+ cities across India.
                                </p>

                                <div className='flex flex-wrap gap-6'>
                                    <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                        <IconBuilding className='w-6 h-6 text-white' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{statesData.length}</div>
                                            <div className='text-sm text-gray-200'>States</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                        <IconMapPin className='w-6 h-6 text-white' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{totalCities}+</div>
                                            <div className='text-sm text-gray-200'>Cities</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Search & Directory */}
                    <section className='py-16 px-4 md:px-8 lg:px-16'>
                        <div className='max-w-7xl mx-auto'>
                            {/* Search Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className='mb-12'
                            >
                                <div className='relative max-w-xl mx-auto'>
                                    <IconSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                    <input
                                        type='text'
                                        placeholder='Search for a state or city...'
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg'
                                    />
                                </div>
                            </motion.div>

                            {/* States Directory */}
                            <div className='space-y-4'>
                                {filteredStates.map((state, index) => (
                                    <motion.div
                                        key={state.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className='bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300'
                                    >
                                        <button
                                            onClick={() => setExpandedState(expandedState === state.slug ? null : state.slug)}
                                            className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                                        >
                                            <div className='flex items-center gap-4'>
                                                <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                                                    <IconBuilding className='w-5 h-5 text-purple-600' />
                                                </div>
                                                <div>
                                                    <h3 className='text-xl font-bold text-gray-900'>{state.name}</h3>
                                                    <p className='text-sm text-gray-500'>{state.cities.length} cities available</p>
                                                </div>
                                            </div>
                                            {expandedState === state.slug ? (
                                                <IconChevronUp className='w-6 h-6 text-purple-600' />
                                            ) : (
                                                <IconChevronDown className='w-6 h-6 text-gray-400' />
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {expandedState === state.slug && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className='overflow-hidden'
                                                >
                                                    <div className='px-6 pb-6 pt-2'>
                                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                                                            {state.cities.map((city) => (
                                                                <Link
                                                                    key={city.slug}
                                                                    href={`/${city.slug}`}
                                                                    className='flex items-center gap-2 px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 hover:shadow-md transition-all duration-300 group'
                                                                >
                                                                    <IconMapPin className='w-4 h-4 text-purple-600' />
                                                                    <span className='text-gray-700 font-medium group-hover:text-purple-700'>{city.name}</span>
                                                                    <IconArrowRight className='w-4 h-4 text-purple-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredStates.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className='text-center py-12'
                                >
                                    <IconSearch className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                                    <h3 className='text-xl font-semibold text-gray-600 mb-2'>No results found</h3>
                                    <p className='text-gray-500'>Try searching for a different state or city</p>
                                </motion.div>
                            )}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className='py-20 px-4 md:px-8 lg:px-16'>
                        <div className='max-w-4xl mx-auto'>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                                <span className='inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>FAQs</span>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Website Development FAQs</h2>
                                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Common questions about our web development services across India.</p>
                            </motion.div>
                            <div className='space-y-4'>
                                {[
                                    { q: 'How long does it take to build a website?', a: 'Timeline depends on complexity. A standard business website takes 2-4 weeks, an e-commerce site 4-8 weeks, and a custom web application 8-16 weeks. We provide a detailed timeline during our initial consultation and keep you updated at every milestone.' },
                                    { q: 'What technologies do you use for web development?', a: 'We work with modern technologies including React, Next.js, Node.js, WordPress, PHP, Python, and various databases (MySQL, MongoDB, PostgreSQL). We choose the best tech stack based on your project requirements, scalability needs, and long-term maintenance considerations.' },
                                    { q: 'Will my website be mobile-friendly and SEO-optimized?', a: 'Absolutely. Every website we build is mobile-first and fully responsive across all devices. We also implement SEO best practices including proper meta tags, structured data, fast loading speeds, clean URL structures, and accessibility standards from day one.' },
                                    { q: 'Do you provide website maintenance and support after launch?', a: 'Yes, we offer ongoing maintenance packages that include security updates, performance monitoring, content updates, bug fixes, regular backups, and technical support. Most clients opt for our monthly maintenance plans to keep their sites running smoothly and securely.' },
                                    { q: 'How much does a website cost?', a: 'Website costs vary based on requirements. A basic business website starts from ₹15,000-₹30,000, e-commerce sites from ₹40,000-₹1,50,000, and custom web applications from ₹1,00,000+. We provide detailed quotes after understanding your specific needs. No hidden charges.' },
                                    { q: 'Can you redesign my existing website?', a: 'Yes! We specialize in website redesigns that preserve your SEO rankings while delivering a modern, faster, and more user-friendly experience. We handle everything from design to content migration to proper URL redirects so you don\'t lose any existing search traffic.' }
                                ].map((faq, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className='bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden'>
                                        <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors duration-300'>
                                            <span className='text-lg md:text-xl font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                            <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-purple-600' : 'bg-purple-100'}`}>
                                                {openFaq === index ? <IconMinus className='w-5 h-5 text-white' stroke={2.5} /> : <IconPlus className='w-5 h-5 text-purple-600' stroke={2.5} />}
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === index && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className='overflow-hidden'>
                                                    <div className='px-6 md:px-8 pb-6 pt-2'><p className='text-gray-600 leading-relaxed'>{faq.a}</p></div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className='py-16 px-4 md:px-8 lg:px-16 bg-purple-600'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                                    Need a Website for Your Business?
                                </h2>
                                <p className='text-xl text-purple-100 mb-8'>
                                    Don't see your city listed? Contact us and we'll build an amazing website for you.
                                </p>
                                <Link
                                    href='/contact-us'
                                    className='inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                                >
                                    Get Free Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </section>

                    <Footer />
                </>
            )}
        </>
    )
}
