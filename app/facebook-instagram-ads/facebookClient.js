"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
    IconArrowRight, IconStarFilled, IconChecks, IconUsers, IconTrendingUp,
    IconBulb, IconRocket, IconCheck, IconPlus, IconMinus, IconUser, IconPhone, IconMail, IconSend, IconBriefcase, IconCode, IconPalette, IconSearch, IconFileText, IconDatabase, IconCpu, IconBrandGoogle, IconBrandFacebook, IconArrowLeft
} from '@tabler/icons-react';

export default function FacebookClientPage() {
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
                    message: formData.message || `[service_page] Facebook Ads`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => { });
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone, message: formData.message || '',
                    _subject: `New Enquiry - Facebook & Instagram Ads`, _captcha: 'false', _template: 'table'
                })
            }).catch(() => { });
        } catch (err) { console.error('Form error:', err); }
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };

    // FAQ data based on new content
    const faqData = [
        {
            q: "Why should I hire a Meta Ads Agency in Delhi NCR instead of doing it myself?",
            a: "With the best Facebook and Instagram Ads Professionals, you can fast-track the digital environment. Capturing the audience's attention becomes easier, allowing you to focus on your core business while experts maximize your ad ROI."
        },
        {
            q: "How do you ensure high-quality leads from Facebook Ads?",
            a: "At DigitalSolution360, our Facebook Ads Specialists prioritize proven strategies to grab the lead. We use high-intent forms, automated CRM sync, and continuous A/B testing to attract and convert qualified traffic."
        },
        {
            q: "What makes your Instagram Ads strategy different for 2026?",
            a: "Yes, of course! We have the specialities to give you high-quality leads using Sales Funnel Facebook Ads. Our strategy focuses on AI-generated creative variations to beat 'Creative Fatigue' and maintain high engagement rates."
        },
        {
            q: "Can you manage WhatsApp Ads for my business in Noida or Gurgaon?",
            a: "Yes, our Performance Ads Agency can manage all the Meta ads and provide conversational commerce that leads to higher trust and faster closing rates across Delhi NCR, including Noida, Gurgaon, and other territories."
        },
        {
            q: "What is the typical ROI I can expect from your Paid Social campaigns?",
            a: "When you join DigitalSolution360, our Social Media Campaign Experts ensure profitability. Our goal is always to deliver a measurable increase in your bottom line. We focus on ROI-driven strategies tailored to your business objectives."
        }
    ];

    return (
        <>
            <Header />
            {/* Hero */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 to-blue-900/70 z-10' />
                    <img src='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&q=80' alt='Facebook Ads Services' className='w-full h-full object-cover' />
                </div>
                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Link href="/digital-marketing" className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 mr-6 transition-colors'>
                            <IconArrowLeft className='w-5 h-5' />
                            Back to Digital Marketing
                        </Link>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconBrandFacebook className='w-4 h-4' />
                            Digital Marketing
                        </motion.span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Best Facebook & Instagram Ads Agency in Delhi NCR
                        </h1>
                        <div className='flex flex-wrap gap-4 mb-10'>
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
                                    <div className='text-sm text-gray-300'>Ratings</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <IconChecks className='w-6 h-6 text-emerald-400' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>500+</div>
                                    <div className='text-sm text-gray-300'>Projects Done</div>
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

                            {/* Introduction Section */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Scale Your ROI with Digital Solution 360 in Delhi NCR!</h2>
                                <div className='space-y-4 text-gray-600 leading-relaxed'>
                                    <p>
                                        The demand for running ads is not enough for any business in Delhi NCR or around its territory. Every small to large business decides to go "BIG" in the online world. That's why they require the power of strategies and an agency that understands the pulse of <strong className="text-emerald-600">Meta ads</strong> and its ever-changing algorithms.
                                    </p>
                                    <p>
                                        Then comes "<Link href="/" className="underline">DigitalSolution360</Link>". We provide the <strong className="text-emerald-600">Best Facebook & Instagram Ads Agency in Delhi NCR</strong>. With our prominent <strong className="text-emerald-600">Paid Campaign Managers</strong>, businesses can get the perfect aid to bridge the gap between brand visibility and actual revenue.
                                    </p>
                                    <p className='font-semibold text-emerald-600'>
                                        Not just claims, we have many happy clients and their positive feedback, ensuring the quality of services and defining our legacy as the finest <strong className="text-emerald-600">Meta Ads Agency in Delhi NCR.</strong>
                                    </p>
                                    <p className='text-amber-600 font-semibold'>
                                        The Blueprint to 10X Growth is Here – Grab Our Lead Generation Facebook Ads Plans Now!
                                    </p>
                                </div>
                            </motion.div>

                            {/* Why Digital Solution 360 Section */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Why Digital Solution 360 is the Best Facebook & Instagram Ads Agency in Delhi NCR</h2>
                                <p className='text-gray-600 mb-6'>
                                    Results always matter more than false promises. DigitalSolution360 has proven its legacy through its campaigns and architectural growth strategies.
                                </p>
                                <p className='text-gray-600 mb-6'>
                                    Our team of <strong className="text-emerald-600">Meta Ads Experts</strong> focuses on the entire funnel, working together to deliver the ultimate integration of <Link href="facebook-instagram-ads" className="underline">Facebook Ads, Instagram Ads,</Link> and even <strong className="text-emerald-600">WhatsApp Ads.</strong>
                                </p>
                                <p className='text-gray-600 mb-6'>
                                    We understand that a business in Noida has different needs than other territories of Delhi or the rest of India. So, we go through the key takeaways:
                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-8'>
                                    <li>Understand the demographics of Delhi NCR to design <Link href="/social-media-management" className="underline">Social Ads</Link> and <strong className="text-emerald-600">Ad Campaigns</strong> accordingly.</li>
                                    <li>Full-funnel strategy for everything, starting from Lead Ads & Conversion Ads to Growth Ads.</li>
                                    <li>Seamlessly connecting Facebook, Instagram, and WhatsApp.</li>
                                </ul>
                                <p className='font-medium text-emerald-600'>
                                    Ready to dominate the Delhi market? Connect with the Facebook Ads Specialists & Meta Ads Experts now!
                                </p>
                            </motion.div>

                            {/* Scale Your Business Section */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Scale Your Business: Start with Facebook and Instagram Ads for Business Growth</h2>
                                <p className='text-gray-600 mb-6'>
                                    Are you searching "<Link href="/instagram-marketing" className="underline">Instagram Ads</Link> Professionals" in Delhi NCR? Well, end your search by starting with the best ROI Driven Meta Ads Agency. DigitalSolution360 is the ultimate solution that helps you connect with Paid Social campaigns and all its benefits.
                                </p>
                                <p className='text-gray-600 mb-6'>
                                    With the High Conversion Facebook Ads and Sales Funnel Facebook Ads, your business can thrive for sure.
                                </p>
                                <p className='text-gray-600 mb-6'>
                                    Let's take a look at our Ads Management Experts, who strategize everything:
                                </p>
                                <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-8'>
                                    <li>High-Intent Forms</li>
                                    <li>Automated and instant CRM sync</li>
                                    <li>A/B Testing for better hooks</li>
                                    <li>Qualified traffic</li>
                                </ul>
                                <div className='bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100'>
                                    <p className='text-gray-800 font-semibold text-xl'>
                                        Stop wasting money on junk leads – Get the benefits from the best <Link href="/performance-marketing" className="underline">Performance Ads Agency</Link> now!
                                    </p>
                                </div>
                            </motion.div>

                            {/* Data-Driven Decisions Section */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Data-Driven Decisions: The ROI Driven Meta Ads Agency</h2>
                                <p className='text-gray-600 mb-6'>
                                    You can't just add anything without a proper strategy. As a trusted Performance Marketing Meta Ads agency, we deliver Result Oriented Instagram Ads and all the requisite campaigns that suffice the growth.
                                </p>
                                <p className='text-gray-600 mb-6'>
                                    Our Meta Ads Experts also utilize AI-generated creative variations to stay ahead of "Creative Fatigue."
                                </p>
                                <p className='font-medium text-emerald-600'>
                                    Start your first WhatsApp-driven ad campaign today with the best Meta Ads Agency in Delhi NCR!
                                </p>
                            </motion.div>

                            {/* Conclusion Section */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Conclusion</h2>
                                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100'>
                                    <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                                        In a vibrant market, you require the Best Facebook & Instagram Ads Agency in Delhi NCR to keep your online mission active. That's the spirit of DigitalSolution360, and it ensures your brand dominates the digital space.
                                    </p>
                                    <p className='text-gray-800 font-semibold text-xl'>
                                        Don't let your competitors take your spot on the feed – spend on high-performing Ad Campaigns developed by Social Media Campaign Experts at DigitalSolution360!
                                    </p>
                                </div>
                            </motion.div>

                            {/* FAQs Section */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Frequently Asked Questions</h2>
                                <div className='space-y-4'>
                                    {faqData.map((faq, index) => (
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
                                    <p className='text-sm text-gray-500 mb-4'>Talk to our Meta Ads experts today</p>
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
                                            { name: "Growth Marketing", slug: "growth-marketing", icon: IconRocket },
                                            { name: "Google Ads Management", slug: "google-ads-management", icon: IconBrandGoogle },
                                            { name: "Performance Marketing", slug: "performance-marketing", icon: IconTrendingUp }
                                        ].map((sib, index) => {
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
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Ready to Scale Your ROI?</h2>
                        <p className='text-xl text-gray-300 mb-8'>Get a free strategy session with our Meta Ads experts. We'll audit your current campaigns and recommend the best path forward.</p>
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