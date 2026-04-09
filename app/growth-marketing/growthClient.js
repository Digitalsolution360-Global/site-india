"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
// import serviceCategories from './serviceData';
import {
    IconArrowRight, IconStarFilled, IconChecks, IconUsers, IconTrendingUp,
    IconBulb, IconRocket, IconCheck, IconPlus, IconMinus, IconUser, IconPhone, IconMail, IconSend, IconBriefcase, IconCode, IconPalette, IconSearch, IconFileText,IconDatabase, IconCpu, IconBrandGoogle, IconBrandFacebook, IconArrowLeft 
} from '@tabler/icons-react';


export default function GrowthClientPage(){
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
                    message: formData.message || `[service_page] Growth Marketing`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => {});
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone, message: formData.message || '',
                    _subject: `New Enquiry - Growth Marketing`, _captcha: 'false', _template: 'table'
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
                    <img src='/google-my-business-company-digitalsolution360.webp' alt='Our Services' className='w-full h-full object-cover' />
                </div>
                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Link href="/digital-marketing" className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 mr-6 transition-colors'>
                            <IconArrowLeft className='w-5 h-5' />
                            Back to Digital Marketing
                        </Link>
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'>
                            <IconRocket className='w-4 h-4' />
                            Digital Marketing
                        </motion.span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Harnessing Hyper-Growth: The Digital Solution 360 Guide to Growth Marketing
                        </h1>
                        {/* <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            From high-performance digital marketing and SEO to custom web development, branding, and automation — we provide everything your business needs to dominate online. Trusted by 500+ businesses across 50+ industries.
                        </p> */}
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
                            In the era of advanced marketing, traditional marketing is fading. That’s why businesses and industries need to adopt real-world, top-rated solutions to get the best results straight away.
                        </p>
                        <p>
                            Then came digital marketing and related services like growth marketing. It is a part of the advanced online solution, which is a holistic, data-driven methodology that optimizes every stage of the customer journey.  
                            It starts from initial awareness to long-term advocacy. Only a trusted agency, like <Link className="underline" href="/">Digital Solution 360</Link>, has the strength to enable systems that transform curious prospects into loyal brand ambassadors.
                        </p>
                        <p className='font-semibold text-emerald-600'>
                            Time to achieve success through relentless experimentation and agile pivoting – DM us now for complete “<Link className="underline" href="/growth-marketing">Growth Marketing</Link>”!
                        </p>
                    </div>
                </motion.div>

                {/* The Anatomy Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>The Anatomy of a High-Converting Growth Marketing Strategy</h2>
                    <p className='text-gray-600 mb-6'>
                        At Digital Solution 360, we keep you away from various ineffective isolated campaigns but give you the view of growth as a holistic ecosystem. The entire strategy is based on the following:
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-8'>
                        <li>Deep-diving into user behavior</li>
                        <li>Thorough Heatmaps</li>
                        <li>Advanced A/B testing</li>
                    </ul>
                    <p className='text-gray-600 mb-8'>
                        To get your name in the “FAMOUS” section, it requires a sophisticated approach to Marketing Funnel Optimization. To do so, we take the following responsibilities:
                    </p>
                    
                    <div className='space-y-8'>
                        <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-8'>
                        <li>Data-driven decisions</li>
                        <li>Agile methodology</li>
                        <li>Retention focus</li>
                    </ul>
                        <p className='font-medium text-emerald-600'>
                                Want promising growth – <Link className="underline" href="/contact-us">Connect with Digital Solution 360</Link> today to build your custom growth roadmap.
                            </p>
                    </div>
                </motion.div>

                {/* Why Local Brands Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Why Local Brands Seek a Performance Marketing Company Near Me</h2>
                    <p className='text-gray-600 mb-6'>
                        When business owners search for a <strong>performance marketing company near me</strong>, they want a loyal partner, like Digital Solution 360. We are the companion who understands the local market nuances while delivering global-standard results.
                    </p>
                    <p className='text-gray-600 mb-6'>
                        We combine the power of high-level Growth Marketing with localized execution. That is how we enable your brand to dominate local search results while maintaining a massive digital footprint. 
                    </p>
                    <p className='text-gray-600 mb-6'>
                        With us, your growth marketing journey would be easier through the implementation of the following takeaways:
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-600 mb-8'>
                        <li>Ensuring every cent of your budget is tracked and justified.</li>
                        <li>Tailoring growth strategies to capture the &quot;near me&quot; search intent effectively.</li>
                        <li>Reaching customers who are actively looking for your specific services in your area.</li>
                    </ul>
                    <div className='bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100'>
                        <p className='text-gray-800 font-semibold text-xl'>
                            Want clarity on Digital Solution 360 Growth marketing? Let&apos;s discuss your performance goals over a quick strategy call.
                        </p>
                    </div>
                </motion.div>

                {/* Conclusion Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Conclusion</h2>
                    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100'>
                        <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                            In 2026, there is no way to grow without the implementation and maintenance of digital marketing strategies, including growth marketing. The Digital Solution 360 is the only agency that understands the intricacies of Marketing Funnel Optimization.
                        </p>
                        <p className='text-gray-800 font-semibold text-xl'>
                            Let&apos;s build your company&apos;s future together. <Link className="underline" href="tel:+919990556217">Call us</Link> to learn more!
                        </p>
                    </div>
                </motion.div>

                {/* FAQs Section */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Frequently Asked Questions</h2>
                    <div className='space-y-4'>
                        {[
                            { 
                                q: "What is the main difference between traditional marketing and growth marketing?", 
                                a: "Traditional marketing is focused on building brand awareness. However, we use growth marketing to focus on the entire market, including referral and retention." 
                            },
                            { 
                                q: "How does Digital Solution 360 help with Marketing Funnel Optimization?", 
                                a: "Here, we check everything from your journey. Then the team will use A/B testing & AI tools for fixing the issues accordingly." 
                            },
                            { 
                                q: "Why should I look for a performance marketing company near me?", 
                                a: "A local partner, like Digital Solution 360, is rare to find as it has the legacy of understanding the local market trends and consumer behavior specific to your region." 
                            },
                            { 
                                q: "How long does it take to see results from a growth marketing campaign?", 
                                a: "The duration usually takes 3 to 6 months to achieve real growth after the completion of a strategic growth marketing campaign. " 
                            },
                            { 
                                q: "Is growth marketing suitable for small businesses or just large corporations?", 
                                a: "Yes, the use of growth marketing is essential for many small businesses across India, as it is focused on cost-effective and scalable tactics." 
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
                        <p className='text-sm text-gray-500 mb-4'>Talk to our growth marketing experts today</p>
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
                                <p className='text-green-600 text-sm text-center font-medium'>Thank you! We&apos;ll contact you soon.</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Related services */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Our Services</h3>
                        <div className='space-y-2'>
                            {[
                                { name: "Facebook & Instagram Ads", slug: "facebook-instagram-ads", icon: IconBrandFacebook },
                                { name: "Google Ads Management", slug: "google-ads-management", icon: IconBrandGoogle },
                                { name: "Performance Marketing", slug: "performance-marketing", icon: IconTrendingUp }
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