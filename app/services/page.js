"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import serviceCategories from './serviceData';
import {
    IconArrowRight, IconStarFilled, IconChecks, IconUsers, IconTrendingUp,
    IconBulb, IconRocket, IconCheck, IconPlus, IconMinus
} from '@tabler/icons-react';

const COLOR_MAP = {
    blue: { iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-100', hoverBorder: 'hover:border-blue-300' },
    emerald: { iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-100', hoverBorder: 'hover:border-emerald-300' },
    orange: { iconBg: 'bg-orange-100', iconText: 'text-orange-600', border: 'border-orange-100', hoverBorder: 'hover:border-orange-300' },
    violet: { iconBg: 'bg-violet-100', iconText: 'text-violet-600', border: 'border-violet-100', hoverBorder: 'hover:border-violet-300' },
    pink: { iconBg: 'bg-pink-100', iconText: 'text-pink-600', border: 'border-pink-100', hoverBorder: 'hover:border-pink-300' },
    indigo: { iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', border: 'border-indigo-100', hoverBorder: 'hover:border-indigo-300' },
    teal: { iconBg: 'bg-teal-100', iconText: 'text-teal-600', border: 'border-teal-100', hoverBorder: 'hover:border-teal-300' },
};

const trustStats = [
    { value: '500+', label: 'Projects Delivered', icon: IconChecks },
    { value: '50+', label: 'Industries Served', icon: IconUsers },
    { value: '4.9/5', label: 'Average Rating', icon: IconStarFilled },
    { value: '12+', label: 'Years Experience', icon: IconTrendingUp },
];

const processSteps = [
    { step: '01', title: 'Discovery & Audit', description: 'We analyze your current digital presence, competitors, and market opportunities to build a data-backed strategy.', icon: IconBulb },
    { step: '02', title: 'Custom Strategy', description: 'Our experts craft a tailored roadmap with clear milestones, KPIs, and timelines aligned to your business goals.', icon: IconRocket },
    { step: '03', title: 'Execute & Optimize', description: 'We implement the strategy across channels, continuously testing and optimizing for maximum ROI.', icon: IconTrendingUp },
    { step: '04', title: 'Report & Scale', description: 'Transparent reporting with actionable insights. Once we find what works, we scale it aggressively.', icon: IconChecks },
];

const generalFaqs = [
    { q: 'How do I know which services are right for my business?', a: 'We start with a free consultation and audit of your current digital presence. Based on your goals, budget, and industry, we recommend the ideal mix of services — whether it\'s SEO, paid ads, social media, or a full-stack approach.' },
    { q: 'How long does it take to see results?', a: 'It depends on the service. Paid advertising can deliver results within days, while SEO typically takes 2-4 months for significant improvements. We set clear expectations upfront and provide regular progress reports.' },
    { q: 'Do you work with small businesses and startups?', a: 'Absolutely. We have flexible packages designed for businesses of all sizes — from bootstrapped startups to enterprise brands. Our managed services are especially popular with growing businesses.' },
    { q: 'Can I combine multiple services?', a: 'Yes, and we highly recommend it. An integrated approach — combining SEO, content, social media, and paid ads — delivers far better results than any single channel alone. We offer bundled packages at discounted rates.' },
    { q: 'What industries do you serve?', a: 'We\'ve worked across 50+ industries including SaaS, ecommerce, healthcare, real estate, education, finance, hospitality, and more. Our strategies are always customized to your specific market.' },
];

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState(null);

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
                            Complete Digital Solutions for Your Business Growth
                        </h1>
                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            From high-performance digital marketing and SEO to custom web development, branding, and automation — we provide everything your business needs to dominate online. Trusted by 500+ businesses across 50+ industries.
                        </p>
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

            {/* Why Choose Us */}
            <section className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                        <span className='inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>Why DigitalSolution 360</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Why Businesses Trust Us</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>We don&apos;t just run campaigns — we build growth engines. Here&apos;s what makes us different.</p>
                    </motion.div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {[
                            { title: 'Data-Driven Approach', desc: 'Every decision backed by analytics. We track 100+ metrics to optimize your ROI continuously.' },
                            { title: 'Industry Experts', desc: 'Dedicated specialists for each channel — not generalists. Deep expertise where it matters.' },
                            { title: 'Transparent Reporting', desc: 'Real-time dashboards, monthly reports, and strategy calls. You always know where your budget goes.' },
                            { title: 'Proven Track Record', desc: '500+ successful projects, 4.9/5 rating, and 90%+ client retention. Results speak for themselves.' },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300'>
                                <div className='w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4'>
                                    <IconCheck className='w-6 h-6 text-amber-600' stroke={2.5} />
                                </div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>{item.title}</h3>
                                <p className='text-sm text-gray-600 leading-relaxed'>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            <section id='services' className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <span className='inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>Our Expertise</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Full-Stack Digital Services</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>7 core service categories, 45+ specialized offerings — everything under one roof to grow your business online.</p>
                    </motion.div>

                    <div className='space-y-20'>
                        {serviceCategories.map((cat, catIdx) => {
                            const CatIcon = cat.icon;
                            const theme = COLOR_MAP[cat.color] || COLOR_MAP.blue;
                            return (
                                <motion.div key={cat.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                    <div className='flex flex-col md:flex-row md:items-center gap-4 mb-8'>
                                        <div className={`w-14 h-14 ${theme.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                                            <CatIcon className={`w-7 h-7 ${theme.iconText}`} stroke={1.5} />
                                        </div>
                                        <div>
                                            <Link href={`/${cat.slug}`} className='group'>
                                                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-2'>
                                                    {cat.name}
                                                    <IconArrowRight className='w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity' />
                                                </h2>
                                            </Link>
                                            <p className='text-gray-600 mt-1'>{cat.description}</p>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                                        {cat.subServices.map((sub, subIdx) => {
                                            const SubIcon = sub.icon;
                                            return (
                                                <motion.div key={sub.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: subIdx * 0.05 }}>
                                                    <Link href={`/${sub.slug}`}
                                                        className={`block bg-white rounded-xl p-5 border ${theme.border} ${theme.hoverBorder} hover:shadow-lg transition-all duration-300 group h-full`}>
                                                        <div className={`w-10 h-10 ${theme.iconBg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                                            <SubIcon className={`w-5 h-5 ${theme.iconText}`} stroke={1.5} />
                                                        </div>
                                                        <h3 className='text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors'>{sub.name}</h3>
                                                        <p className='text-xs text-gray-500 leading-relaxed'>{sub.description.slice(0, 80)}...</p>
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process / How We Work */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <span className='inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>Our Process</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>How We Deliver Results</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>A proven 4-step framework that has helped 500+ businesses achieve their digital growth goals.</p>
                    </motion.div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {processSteps.map((item, i) => {
                            const StepIcon = item.icon;
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className='relative bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                                    <div className='text-5xl font-black text-emerald-600 absolute top-4 right-4'>{item.step}</div>
                                    <div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 relative z-10'>
                                        <StepIcon className='w-6 h-6 text-emerald-600' stroke={1.5} />
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-900 mb-2 relative z-10'>{item.title}</h3>
                                    <p className='text-sm text-gray-600 leading-relaxed relative z-10'>{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-4xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                        <span className='inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>FAQs</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Common Questions</h2>
                    </motion.div>
                    <div className='space-y-4'>
                        {generalFaqs.map((faq, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
                                className='bg-gray-50 rounded-2xl overflow-hidden'>
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors'>
                                    <span className='text-lg font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openFaq === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
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
                            </motion.div>
                        ))}
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
