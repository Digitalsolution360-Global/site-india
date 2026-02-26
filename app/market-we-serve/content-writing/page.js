"use client";

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import LocationStructuredData from '@/components/seo/LocationStructuredData'
import OGMetaTags from '@/components/seo/OGMetaTags'
import {
    IconMapPin,
    IconSearch,
    IconChevronDown,
    IconChevronUp,
    IconArrowRight,
    IconBuilding,
    IconLoader2,
    IconPencil,
    IconPlus,
    IconMinus,
    IconStarFilled,
    IconChecks,
    IconSend,
    IconPhone,
    IconUser,
    IconMail
} from '@tabler/icons-react'
import MarketServiceCards from '@/components/sections/MarketServiceCards'
import { SERVICE_CARDS } from '@/components/services/serviceContent'

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function ContentWritingMarketPage() {
    const [expandedState, setExpandedState] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statesData, setStatesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`${API_BASE}/market/content-writing`);
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

    const sidebarCities = statesData.flatMap(state =>
        state.cities.slice(0, 3).map(city => ({ ...city, stateName: state.name }))
    ).slice(0, 12);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };

    return (
        <>
            <Header />
            <LocationStructuredData locationData={{ id: 5, name: 'India' }} locationType="country" serviceType="content-writing" />
            <OGMetaTags serviceName="Content Writing" pageSlug="market-we-serve/content-writing" />

            {loading ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <IconLoader2 className='w-12 h-12 text-teal-600 animate-spin mx-auto mb-4' />
                        <p className='text-gray-600 text-lg'>Loading locations...</p>
                    </div>
                </div>
            ) : error ? (
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <p className='text-red-600 text-lg mb-4'>{error}</p>
                        <button onClick={() => window.location.reload()} className='px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700'>
                            Try Again
                        </button>
                    </div>
                </div>
            ) : (
                <>

                    {/* Hero Section */}
                    <section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                        <div className='absolute inset-0 z-0'>
                            <div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 to-teal-900/70 z-10' />
                            <img
                                src='https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80'
                                alt='Content Writing Services'
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
                                    className='inline-flex items-center gap-2 text-teal-200 hover:text-white mb-4 mr-4 transition-colors'
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
                                    <IconPencil className='w-4 h-4' />
                                    Content Writing
                                </motion.span>

                                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                                    Content Writing Services Across India
                                </h1>

                                <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                                    Professional content writing, SEO copywriting, and creative content services in {statesData.length}+ states and {totalCities}+ cities across India.
                                </p>

                                <Link
                                    href='/contact-us'
                                    className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl mb-8'
                                >
                                    Get Free Consultation
                                    <IconArrowRight className='w-5 h-5' />
                                </Link>

                                <div className='flex flex-wrap gap-6'>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconBuilding className='w-6 h-6 text-teal-300' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{statesData.length}</div>
                                            <div className='text-sm text-gray-300'>States</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconMapPin className='w-6 h-6 text-teal-300' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>{totalCities}+</div>
                                            <div className='text-sm text-gray-300'>Cities</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <div className='flex gap-0.5'>
                                            {[...Array(5)].map((_, i) => (
                                                <IconStarFilled key={i} className='w-4 h-4 text-amber-400' />
                                            ))}
                                        </div>
                                        <div>
                                            <div className='text-2xl font-bold text-white'>1,650</div>
                                            <div className='text-sm text-gray-300'>Ratings</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <IconChecks className='w-6 h-6 text-emerald-400' />
                                        <div>
                                            <div className='text-2xl font-bold text-white'>210+</div>
                                            <div className='text-sm text-gray-300'>Projects</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* <MarketServiceCards
                        cards={SERVICE_CARDS['Content Writing']}
                        title='Our Content Writing Services'
                        subtitle='Professional content writing solutions that drive traffic, engage audiences, and boost conversions.'
                        accentColor='teal'
                    /> */}

                    {/* Search & Directory */}
                    <section className='py-16 px-4 md:px-8 lg:px-16'>
                        <div className='max-w-7xl mx-auto'>
                            <div className='flex flex-col lg:flex-row gap-8'>

                                {/* Left Column - Search & States */}
                                <div className='w-full lg:w-[70%]'>
                                    {/* Search Bar */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className='mb-8'
                                    >
                                        <div className='relative max-w-xl'>
                                            <IconSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                            <input
                                                type='text'
                                                placeholder='Search for a state or city...'
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg'
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
                                                        <div className='w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center'>
                                                            <IconBuilding className='w-5 h-5 text-teal-600' />
                                                        </div>
                                                        <div>
                                                            <h3 className='text-xl font-bold text-gray-900'>{state.name}</h3>
                                                            <p className='text-sm text-gray-500'>{state.cities.length} cities available</p>
                                                        </div>
                                                    </div>
                                                    {expandedState === state.slug ? (
                                                        <IconChevronUp className='w-6 h-6 text-teal-600' />
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
                                                                <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                                                                    {state.cities.map((city) => (
                                                                        <Link
                                                                            key={city.slug}
                                                                            href={`/${city.slug}`}
                                                                            className='flex items-center gap-2 px-4 py-3 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all duration-300 group'
                                                                        >
                                                                            <IconMapPin className='w-4 h-4 text-teal-600' />
                                                                            <span className='text-gray-700 font-medium group-hover:text-teal-700'>{city.name}</span>
                                                                            <IconArrowRight className='w-4 h-4 text-teal-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity' />
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

                                {/* Right Column - Sidebar */}
                                <div className='w-full lg:w-[30%] lg:sticky lg:top-24 space-y-6 h-fit'>

                                    {/* Contact Form */}
                                    <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                                        <h3 className='text-xl font-bold text-gray-900 mb-1'>Get Free Consultation</h3>
                                        <p className='text-sm text-gray-500 mb-4'>Talk to our content experts today</p>

                                        {formStatus === 'success' && (
                                            <div className='mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm'>
                                                Thank you! We&apos;ll get back to you soon.
                                            </div>
                                        )}

                                        <form onSubmit={handleFormSubmit} className='space-y-3'>
                                            <div className='relative'>
                                                <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                                <input
                                                    type='text'
                                                    placeholder='Your Name'
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className='w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                                                    required
                                                />
                                            </div>
                                            <div className='relative'>
                                                <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                                <input
                                                    type='tel'
                                                    placeholder='Phone Number'
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className='w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                                                    required
                                                />
                                            </div>
                                            <div className='relative'>
                                                <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                                <input
                                                    type='email'
                                                    placeholder='Email Address'
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className='w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                                                    required
                                                />
                                            </div>
                                            <textarea
                                                placeholder='Your Message'
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                rows={3}
                                                className='w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none'
                                            />
                                            <button
                                                type='submit'
                                                className='w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors'
                                            >
                                                <IconSend className='w-4 h-4' />
                                                Send Message
                                            </button>
                                        </form>
                                    </div>

                                    {/* Popular Cities */}
                                    <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Popular Cities</h3>
                                        <div className='space-y-2'>
                                            {sidebarCities.map((city) => (
                                                <Link
                                                    key={city.slug}
                                                    href={`/${city.slug}`}
                                                    className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-teal-50 transition-colors group'
                                                >
                                                    <IconMapPin className='w-4 h-4 text-teal-600' />
                                                    <span className='text-sm text-gray-700 group-hover:text-teal-700'>{city.name}</span>
                                                    <IconArrowRight className='w-3 h-3 text-gray-400 ml-auto group-hover:text-teal-500 transition-colors' />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className='py-20 px-4 md:px-8 lg:px-16'>
                        <div className='max-w-4xl mx-auto'>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                                <span className='inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>FAQs</span>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Content Writing FAQs</h2>
                                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Common questions about our content writing services across India.</p>
                            </motion.div>
                            <div className='space-y-4'>
                                {[
                                    { q: 'What types of content do you write?', a: 'We write blogs, articles, website copy, product descriptions, social media content, email newsletters, whitepapers, case studies, press releases, and technical documentation. Every piece is tailored to your brand voice, target audience, and business objectives.' },
                                    { q: 'Is the content SEO-optimized?', a: 'Yes, all our content is written with SEO best practices in mind. We conduct keyword research, optimize heading structures, include strategic internal and external links, write compelling meta descriptions, and ensure the content addresses search intent — all while keeping it natural and engaging for readers.' },
                                    { q: 'How do you ensure content quality and originality?', a: 'Every piece goes through a rigorous process: research, writing, editing, proofreading, and plagiarism checking using industry-standard tools. We also have subject matter experts review technical content. All content is 100% original and passes Copyscape checks.' },
                                    { q: 'How many articles/blogs can you deliver per month?', a: 'Our output depends on your package. Standard packages include 8-12 blog posts per month (800-1500 words each). Enterprise clients receive 20-30+ pieces monthly. We also offer on-demand content services for one-time projects. Turnaround is typically 3-5 business days per piece.' },
                                    { q: 'Can you write content in regional languages?', a: 'Yes! We have writers proficient in Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam, Gujarati, and other Indian languages. Multilingual content helps you connect with local audiences more effectively and improves regional SEO performance.' },
                                    { q: 'What is your content revision policy?', a: 'We offer unlimited revisions until you\'re 100% satisfied. Most content requires just 1-2 rounds of minor edits. We encourage detailed briefs upfront so the first draft is close to your vision. Our collaborative process ensures the final output perfectly matches your expectations.' }
                                ].map((faq, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className='bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden'>
                                        <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors duration-300'>
                                            <span className='text-lg md:text-xl font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                            <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-teal-600' : 'bg-teal-100'}`}>
                                                {openFaq === index ? <IconMinus className='w-5 h-5 text-white' stroke={2.5} /> : <IconPlus className='w-5 h-5 text-teal-600' stroke={2.5} />}
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
                    <section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r from-slate-900 to-teal-900'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                                    Need Content Writing Services in Your City?
                                </h2>
                                <p className='text-xl text-gray-300 mb-8'>
                                    Don&apos;t see your city listed? Contact us and we&apos;ll craft compelling content for your business.
                                </p>
                                <Link
                                    href='/contact-us'
                                    className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'
                                >
                                    Get Started Today
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
