"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
// import serviceCategories from './serviceData';
import {
    IconArrowRight, IconStarFilled, IconChecks, IconUsers, IconTrendingUp,
    IconBulb, IconRocket, IconCheck, IconPlus, IconMinus, IconUser, IconPhone, IconMail, IconSend, IconBriefcase, IconCode, IconPalette, IconSearch, IconFileText,IconDatabase, IconCpu 
} from '@tabler/icons-react';
const trustStats = [
    { value: '500+', label: 'Projects Delivered', icon: IconChecks },
    { value: '50+', label: 'Industries Served', icon: IconUsers },
    { value: '4.9/5', label: 'Average Rating', icon: IconStarFilled },
    { value: '12+', label: 'Years Experience', icon: IconTrendingUp },
];

export default function PerformanceClientPage(){
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);
     const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            await fetch(`${API_URL}/contacts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    number: formData.phone,
                    message: formData.message || `[service_page] ${sub.name}`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => {});
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone, message: formData.message || '',
                    _subject: `New Enquiry - ${sub.name}`, _captcha: 'false', _template: 'table'
                })
            }).catch(() => {});
        } catch (err) { console.error('Form error:', err); }
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };
    return (
        <>
        <Header />
        {/* Hero */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 to-blue-900/70 z-10' />
                    <img src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80' alt='Our Services' className='w-full h-full object-cover' />
                </div>
                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'>
                            Our Services
                        </motion.span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Performance Marketing 2.0: Why Indian Startups are Switching Agencies This Year
                        </h1>
                        {/* <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            From high-performance digital marketing and SEO to custom web development, branding, and automation — we provide everything your business needs to dominate online. Trusted by 500+ businesses across 50+ industries.
                        </p> */}
                        <div className='flex flex-wrap gap-4 mb-10'>
                            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                Get Free Consultation <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link href='#services' className='bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30'>
                                Explore Services
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-6'>
                            {trustStats.map((stat, i) => {
                                const StatIcon = stat.icon;
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                        className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                        <StatIcon className='w-5 h-5 text-amber-400' />
                                        <div>
                                            <div className='text-xl font-bold text-white'>{stat.value}</div>
                                            <div className='text-xs text-gray-300'>{stat.label}</div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Content: 70/30 layout */}
{/* Content: 70/30 layout */}
<section className='py-16 px-4 md:px-8 lg:px-16'>
    <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8'>
            {/* Left: 70% */}
            <div className='w-full lg:w-[70%]'>
                
                {/* Introduction Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Introduction</h2>
                    <div className='space-y-4 text-gray-600 leading-relaxed'>
                        <p>
                            In the era of AI and advanced learning, businesses and their online presence demand the necessary change. 
                            It is no longer the right time to publish traditional advertising banners online. These types of features 
                            are outdated and not going to grab more public attention.
                        </p>
                        <p>
                            That's why performance marketing needs something unique. Only the right strategists and executors in the 
                            digital world can give you the desired output.
                        </p>
                        <p>
                            In the latest framework of performance marketing, the integration of predictive AI, deep-funnel tracking, 
                            and creative intelligence is inevitable. To do so, you require professionals. Then comes the Digital Solution 360 
                            performance marketing team that achieves the targets before it's too late to revive.
                        </p>
                        <p className='font-semibold text-emerald-600'>
                            Deliver record-breaking ROI in 2026 with advanced Google Ads Management – join DigitalSolution360 for the quotes now!
                        </p>
                    </div>
                </motion.div>

                {/* The Evolution Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>The Evolution of the Indian Startup Growth Engine</h2>
                    <p className='text-gray-600 mb-6'>
                        Digital Solution 360 performance marketing has emerged as the frontrunner in this evolution and provides the best 
                        facilities to its clients to grow online. Still, some startups and businesses are there who are unaware of the 
                        current trends in the digital world of 2026.
                    </p>
                    <p className='text-gray-600 mb-8'>
                        The transition to a data-first partner is no longer an option—it is a survival mandate. So, time to understand 
                        the facts of the evolution in Performance Marketing.
                    </p>

                    {/* Evolution Points */}
                    <div className='space-y-8'>
                        {/* Point 1 */}
                        <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all'>
                            <h3 className='text-xl font-bold text-gray-900 mb-3'>1. The Shift from Vanity Metrics to Unit Economics</h3>
                            <p className='text-gray-600 mb-3'>
                                In the era of Performance Marketing 1.0, agencies often hid behind "CPM" and "CTR". However, this is not 
                                the game anymore. Digital Solution 360 performance marketing excels here by moving past top-of-funnel noise.
                            </p>
                            <p className='text-gray-600 mb-3'>
                                We focus more on performing the latest LTV (Lifetime Value) and CAC ratios. It adds long-term profitability 
                                rather than just temporary growth.
                            </p>
                            <p className='font-medium text-emerald-600'>
                                Stop measuring clicks and start measuring profit. Let Digital Solution 360 build your high-ROI roadmap today!
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all'>
                            <h3 className='text-xl font-bold text-gray-900 mb-3'>2. Mastering the AI-Driven Google Ads Management Landscape</h3>
                            <p className='text-gray-600 mb-3'>
                                The Google Ads ecosystem is always transforming. In 2026, it shifts more toward automated environments. 
                                That's why start-ups and businesses require a human-in-the-loop expert to steer the wheel of Google Ads 
                                Management for them.
                            </p>
                            <p className='text-gray-600 mb-3'>
                                As a trusted digital marketing brand in India, we ensure your name stays ahead of the curve of competition. 
                                That's why Startups are switching to Digital Solution 360, the Best performance marketing agency in India.
                            </p>
                            <p className='text-gray-600 mb-3'>
                                Our team gives their best shots all the time as they have a deep understanding of first-party data integration 
                                and signal-based bidding. We, as a unit, always prioritize setting up server-side tracking and custom 
                                conversion actions.
                            </p>
                            <p className='font-medium text-emerald-600'>
                                This is how we ensure your brand stays ahead and gets the best results through the DigitalSolution360's 
                                Google Ads Management services.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all'>
                            <h3 className='text-xl font-bold text-gray-900 mb-3'>3. The Power of Creative Intelligence and Generative Media</h3>
                            <p className='text-gray-600 mb-3'>
                                Creativity is everything the digital world seeks in 2026. Lack of next-gen ideas and generative media can 
                                ruin your digital presence. That's why we prefer using hyper-personalized video ads that convert your 
                                viewers into customers.
                            </p>
                            <p className='text-gray-600 mb-3'>
                                Yes, Digital Solution 360 performance marketing utilizes advanced AI tools smartly. We work as a team for 
                                comprehensive storytelling, ensuring your brand is the best.
                            </p>
                            <p className='font-medium text-emerald-600'>
                                Wait no more – partner with India's leaders in creative-first performance marketing.
                            </p>
                        </div>

                        {/* Point 4 */}
                        <div className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all'>
                            <h3 className='text-xl font-bold text-gray-900 mb-3'>4. Navigating the Post-Cookie Privacy Paradigm</h3>
                            <p className='text-gray-600 mb-3'>
                                Third-party cookies are no longer an operational tool to get into the Indian market. That's why you required 
                                someone to help you during these difficult periods in digital marketing. At Digital Solution 360, we have 
                                pioneered the transition to First-Party Data strategies.
                            </p>
                            <p className='text-gray-600 mb-3'>
                                We assist startups by establishing the technical foundation. Now, their ad spend is essentially a blind bet 
                                for their targeted customers.
                            </p>
                            <p className='font-medium text-emerald-600'>
                                Don't let privacy change everything – secure your data future with Digital Solution 360's advanced tracking solutions.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Conclusion Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Conclusion</h2>
                    <div className='bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100'>
                        <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                            The shift toward Performance Marketing 2.0 is the pure trend that the Indian market reflects the most. 
                            It is time to join the ranks of successful startups switching to the Best performance marketing agency in India.
                        </p>
                        <p className='text-gray-800 font-semibold text-xl'>
                            With Digital Solution 360 performance marketing, you secure your digital future in India.
                        </p>
                    </div>
                </motion.div>

                {/* FAQs Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Frequently Asked Questions</h2>
                    <div className='space-y-4'>
                        {[
                            { 
                                q: "What exactly is Performance Marketing 2.0?", 
                                a: "It is a new trend in performance marketing that focuses on predictive AI with first-party data." 
                            },
                            { 
                                q: "How does Digital Solution 360 lower my Customer Acquisition Cost (CAC)?", 
                                a: "Experts at Digital Solution 360 use creative intelligence to identify high-intent audiences." 
                            },
                            { 
                                q: "Why is first-party data important for my 2026 startup?", 
                                a: "First-party data is the only reliable way to track user behavior, which is why it is so important." 
                            },
                            { 
                                q: "Can you manage high-budget campaigns across multiple platforms?", 
                                a: "Yes, we provide services from multi-channel campaigns across Google, Meta, and LinkedIn." 
                            },
                            { 
                                q: "What sets Google Ads Management apart from other agencies?", 
                                a: "The server-side tracking and AI-driven bidding strategies are the important ones that are tailored for your environment." 
                            }
                        ].map((faq, index) => (
                            <div key={index} className='bg-gray-50 rounded-2xl overflow-hidden'>
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors'>
                                    <span className='text-lg font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openFaq === index ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                        {openFaq === index ? <IconMinus className='w-5 h-5' stroke={2.5} /> : <IconPlus className='w-5 h-5' stroke={2.5} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className='overflow-hidden'>
                                            <p className='px-6 pb-6 text-gray-600 leading-relaxed'>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right: 30% sidebar */}
            <div className='w-full lg:w-[30%]'>
                <div className='lg:sticky lg:top-24 space-y-6'>
                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                        <h3 className='text-xl font-bold text-gray-900 mb-1'>Get Free Consultation</h3>
                        <p className='text-sm text-gray-500 mb-4'>Talk to our performance marketing experts today</p>
                        <form onSubmit={handleFormSubmit} className='space-y-3'>
                            <div className='relative'>
                                <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                <input type='text' placeholder='Your Name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm`} />
                            </div>
                            <div className='relative'>
                                <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                <input type='tel' placeholder='Phone Number' required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm`} />
                            </div>
                            <div className='relative'>
                                <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                <input type='email' placeholder='Email Address' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm`} />
                            </div>
                            <textarea placeholder='Tell us about your requirements...' rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none`} />
                            <button type='submit' className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                                <IconSend className='w-4 h-4' /> Send Enquiry
                            </button>
                            {formStatus === 'success' && (
                                <p className='text-green-600 text-sm text-center font-medium'>Thank you! We'll contact you soon.</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Related services */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Our Services</h3>
                        <div className='space-y-2'>
                            {[
                                { name: "Performance Marketing 2.0", slug: "performance-marketing", icon: IconTrendingUp },
                                { name: "Google Ads Management", slug: "google-ads", icon: IconSearch },
                                { name: "Creative Intelligence", slug: "creative-intelligence", icon: IconPalette },
                                { name: "First-Party Data Solutions", slug: "first-party-data", icon: IconDatabase },
                                { name: "AI-Driven Bidding", slug: "ai-bidding", icon: IconCpu },
                                { name: "Server-Side Tracking", slug: "server-tracking", icon: IconCode }
                            ].slice(0, 8).map((sib, index) => {
                                const SibIcon = sib.icon;
                                return (
                                    <Link key={index} href={`/${sib.slug}`}
                                        className={`flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group`}>
                                        <div className='flex items-center gap-2'>
                                            <SibIcon className={`w-4 h-4 text-emerald-600`} stroke={1.5} />
                                            <span className='text-sm font-medium text-gray-800 group-hover:text-gray-900'>{sib.name}</span>
                                        </div>
                                        <IconArrowRight className='w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-colors' />
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
</section>
         {/* CTA */}
            <section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r from-slate-900 to-blue-900'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Ready to Grow Your Business?</h2>
                        <p className='text-xl text-gray-300 mb-8'>Get a free strategy session with our experts. We&apos;ll audit your digital presence and recommend the best path forward.</p>
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <Link href='/contact-us' className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                                Get Free Consultation
                            </Link>
                            <a href='tel:+919876543210' className='inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30'>
                                <IconStarFilled className='w-5 h-5 text-amber-400' /> Call Us Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        <Footer />
        </>
    );
}