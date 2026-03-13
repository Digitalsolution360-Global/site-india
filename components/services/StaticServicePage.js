"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
    IconArrowRight, IconCheck, IconPlus, IconMinus,
    IconStarFilled, IconChecks, IconSend, IconPhone, IconUser, IconMail
} from '@tabler/icons-react';

const COLOR_MAP = {
    blue:    { gradient: 'from-slate-900/95 via-slate-800/90 to-blue-900/70',    ctaGrad: 'from-slate-900 to-blue-900',    badge: 'bg-blue-100 text-blue-800',    iconBg: 'bg-blue-100',    iconText: 'text-blue-600',    ring: 'focus:ring-blue-500',    btn: 'bg-blue-600 hover:bg-blue-700',    lightBg: 'bg-blue-50',    border: 'border-blue-200',    hoverBg: 'hover:bg-blue-50' },
    emerald: { gradient: 'from-slate-900/95 via-slate-800/90 to-emerald-900/70', ctaGrad: 'from-slate-900 to-emerald-900', badge: 'bg-emerald-100 text-emerald-800', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', ring: 'focus:ring-emerald-500', btn: 'bg-emerald-600 hover:bg-emerald-700', lightBg: 'bg-emerald-50', border: 'border-emerald-200', hoverBg: 'hover:bg-emerald-50' },
    orange:  { gradient: 'from-slate-900/95 via-slate-800/90 to-orange-900/70',  ctaGrad: 'from-slate-900 to-orange-900',  badge: 'bg-orange-100 text-orange-800',  iconBg: 'bg-orange-100',  iconText: 'text-orange-600',  ring: 'focus:ring-orange-500',  btn: 'bg-orange-600 hover:bg-orange-700',  lightBg: 'bg-orange-50',  border: 'border-orange-200',  hoverBg: 'hover:bg-orange-50' },
    violet:  { gradient: 'from-slate-900/95 via-slate-800/90 to-violet-900/70',  ctaGrad: 'from-slate-900 to-violet-900',  badge: 'bg-violet-100 text-violet-800',  iconBg: 'bg-violet-100',  iconText: 'text-violet-600',  ring: 'focus:ring-violet-500',  btn: 'bg-violet-600 hover:bg-violet-700',  lightBg: 'bg-violet-50',  border: 'border-violet-200',  hoverBg: 'hover:bg-violet-50' },
    pink:    { gradient: 'from-slate-900/95 via-slate-800/90 to-pink-900/70',    ctaGrad: 'from-slate-900 to-pink-900',    badge: 'bg-pink-100 text-pink-800',    iconBg: 'bg-pink-100',    iconText: 'text-pink-600',    ring: 'focus:ring-pink-500',    btn: 'bg-pink-600 hover:bg-pink-700',    lightBg: 'bg-pink-50',    border: 'border-pink-200',    hoverBg: 'hover:bg-pink-50' },
    indigo:  { gradient: 'from-slate-900/95 via-slate-800/90 to-indigo-900/70',  ctaGrad: 'from-slate-900 to-indigo-900',  badge: 'bg-indigo-100 text-indigo-800',  iconBg: 'bg-indigo-100',  iconText: 'text-indigo-600',  ring: 'focus:ring-indigo-500',  btn: 'bg-indigo-600 hover:bg-indigo-700',  lightBg: 'bg-indigo-50',  border: 'border-indigo-200',  hoverBg: 'hover:bg-indigo-50' },
    teal:    { gradient: 'from-slate-900/95 via-slate-800/90 to-teal-900/70',    ctaGrad: 'from-slate-900 to-teal-900',    badge: 'bg-teal-100 text-teal-800',    iconBg: 'bg-teal-100',    iconText: 'text-teal-600',    ring: 'focus:ring-teal-500',    btn: 'bg-teal-600 hover:bg-teal-700',    lightBg: 'bg-teal-50',    border: 'border-teal-200',    hoverBg: 'hover:bg-teal-50' },
};

export default function StaticServicePage({
    name,
    description,
    heroImage,
    badge,
    color = 'blue',
    features = [],
    benefits = [],
    sidebarTitle = 'Our Services',
    sidebarItems = [],
    faqs = [],
    ctaText = 'Get Started Today',
}) {
    const theme = COLOR_MAP[color] || COLOR_MAP.blue;

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
                    message: formData.message || `[service_page] ${name}`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => {});
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone,
                    message: formData.message || '',
                    _subject: `New Enquiry - ${name}`, _captcha: 'false', _template: 'table'
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
            <section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className={`absolute inset-0 bg-linear-to-r ${theme.gradient} z-10`} />
                    <img src={heroImage} alt={name} className='w-full h-full object-cover' />
                </div>
                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'>
                            {badge}
                        </motion.span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>{name}</h1>
                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>{description}</p>
                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                Get Free Consultation <IconArrowRight className='w-5 h-5' />
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <IconStarFilled key={i} className='w-4 h-4 text-amber-400' />
                                    ))}
                                </div>
                                <div>
                                    <div className='text-2xl font-bold text-white'>4.9/5</div>
                                    <div className='text-sm text-gray-300'>Client Rating</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <IconChecks className='w-6 h-6 text-emerald-400' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>500+</div>
                                    <div className='text-sm text-gray-300'>Projects Delivered</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content: 70/30 layout */}
            <section className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-8'>

                        {/* Left: 70% */}
                        <div className='w-full lg:w-[70%]'>

                            {/* What's Included */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>What&apos;s Included</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    {features.map((feature, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                                            className={`flex items-start gap-3 p-4 ${theme.lightBg} rounded-xl border ${theme.border}`}>
                                            <div className={`w-8 h-8 ${theme.iconBg} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                                                <IconCheck className={`w-4 h-4 ${theme.iconText}`} stroke={2.5} />
                                            </div>
                                            <span className='text-gray-800 font-medium'>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Key Benefits */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Key Benefits</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {benefits.map((benefit, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                                            className='bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300'>
                                            <div className='flex items-center gap-3 mb-2'>
                                                <div className='w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center'>
                                                    <IconChecks className='w-4 h-4 text-emerald-600' stroke={2} />
                                                </div>
                                                <h3 className='text-lg font-bold text-gray-900'>{benefit}</h3>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* FAQs */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Frequently Asked Questions</h2>
                                <div className='space-y-4'>
                                    {faqs.map((faq, index) => (
                                        <div key={index} className='bg-gray-50 rounded-2xl overflow-hidden'>
                                            <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors'>
                                                <span className='text-lg font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openFaq === index ? `${theme.iconBg} ${theme.iconText}` : 'bg-gray-200 text-gray-600'}`}>
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
                                    <p className='text-sm text-gray-500 mb-4'>Talk to our experts today</p>
                                    <form onSubmit={handleFormSubmit} className='space-y-3'>
                                        <div className='relative'>
                                            <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                            <input type='text' placeholder='Your Name' required value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                        </div>
                                        <div className='relative'>
                                            <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                            <input type='tel' placeholder='Phone Number' required value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                        </div>
                                        <div className='relative'>
                                            <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                            <input type='email' placeholder='Email Address' value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                        </div>
                                        <textarea placeholder='Tell us about your requirements...' rows={3} value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm resize-none`} />
                                        <button type='submit' className={`w-full ${theme.btn} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                                            <IconSend className='w-4 h-4' /> Send Enquiry
                                        </button>
                                        {formStatus === 'success' && (
                                            <p className='text-green-600 text-sm text-center font-medium'>Thank you! We&apos;ll contact you soon.</p>
                                        )}
                                    </form>
                                </motion.div>

                                {/* Sidebar list */}
                                {/* {sidebarItems.length > 0 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                                        className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                                        <h3 className='text-lg font-bold text-gray-900 mb-4'>{sidebarTitle}</h3>
                                        <div className='space-y-2'>
                                            {sidebarItems.map((item, index) => (
                                                <div key={index} className={`flex items-center justify-between px-3 py-2 rounded-lg ${theme.hoverBg} transition-colors`}>
                                                    <div className='flex items-center gap-2'>
                                                        <IconCheck className={`w-3.5 h-3.5 ${theme.iconText} shrink-0`} stroke={2.5} />
                                                        <span className='text-sm font-medium text-gray-800'>{item}</span>
                                                    </div>
                                                    <IconArrowRight className='w-3 h-3 text-gray-300' />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r ${theme.ctaGrad}`}>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Ready to Get Started with {name}?</h2>
                        <p className='text-xl text-gray-300 mb-8'>Let our experts help you achieve your business goals with a customized strategy.</p>
                        <Link href='/contact-us' className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                            {ctaText}
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
