"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ClientSection from '@/components/sections/clients'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandYoutube,
    IconUsers,
    IconHeart,
    IconTrendingUp,
    IconBulb,
    IconCheck,
    IconPlus,
    IconMinus,
    IconArrowRight,
    IconPhoto,
    IconVideo,
    IconCalendar
} from '@tabler/icons-react'

export default function SocialMediaServicePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const features = [
        {
            icon: IconBulb,
            title: 'Content Strategy & Planning',
            description: 'Develop comprehensive content calendars aligned with your brand voice and marketing goals.',
            color: 'purple'
        },
        {
            icon: IconPhoto,
            title: 'Content Creation',
            description: 'Design engaging graphics, videos, and copy that resonate with your target audience.',
            color: 'pink'
        },
        {
            icon: IconUsers,
            title: 'Community Management',
            description: 'Build and nurture engaged communities through timely responses and active engagement.',
            color: 'blue'
        },
        {
            icon: IconTrendingUp,
            title: 'Paid Social Advertising',
            description: 'Run targeted ad campaigns on Facebook, Instagram, LinkedIn to maximize ROI.',
            color: 'green'
        },
        {
            icon: IconCalendar,
            title: 'Social Media Scheduling',
            description: 'Post consistently at optimal times to maximize reach and engagement.',
            color: 'orange'
        },
        {
            icon: IconHeart,
            title: 'Analytics & Reporting',
            description: 'Track performance metrics and provide actionable insights to improve results.',
            color: 'red'
        }
    ];

    const platforms = [
        { icon: IconBrandFacebook, name: 'Facebook', color: 'text-blue-600' },
        { icon: IconBrandInstagram, name: 'Instagram', color: 'text-pink-600' },
        { icon: IconBrandLinkedin, name: 'LinkedIn', color: 'text-blue-700' },
        { icon: IconBrandTwitter, name: 'Twitter/X', color: 'text-gray-900' },
        { icon: IconBrandYoutube, name: 'YouTube', color: 'text-red-600' }
    ];

    const benefits = [
        'Increased brand awareness and visibility',
        'Higher engagement and follower growth',
        'Better customer relationships',
        'Increased website traffic',
        'Higher conversion rates',
        'Real-time customer feedback and insights'
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery & Strategy',
            description: 'Understand your brand, audience, and goals to create a tailored strategy.'
        },
        {
            step: '02',
            title: 'Content Creation',
            description: 'Design and produce engaging content that reflects your brand identity.'
        },
        {
            step: '03',
            title: 'Publishing & Engagement',
            description: 'Schedule posts and actively engage with your community.'
        },
        {
            step: '04',
            title: 'Analyze & Optimize',
            description: 'Monitor performance and refine strategy for continuous improvement.'
        }
    ];

    const faqs = [
        {
            question: "Which social media platforms should my business be on?",
            answer: "The right platforms depend on your target audience and business type. B2B companies typically excel on LinkedIn, while B2C brands see success on Instagram and Facebook. We analyze your audience demographics, behaviors, and preferences to recommend the most effective platforms for your business."
        },
        {
            question: "How often should I post on social media?",
            answer: "Posting frequency varies by platform and industry. Generally, 1-2 times daily on Instagram, 1-2 times daily on Facebook, 3-5 times weekly on LinkedIn, and multiple times daily on Twitter. We create a custom posting schedule based on when your audience is most active and engagement data."
        },
        {
            question: "Do you create content or do we need to provide it?",
            answer: "We offer full-service content creation including graphics, videos, copy, and captions. However, we also work with client-provided content and can adapt our approach based on your resources and preferences. We can handle everything or collaborate on content creation."
        },
        {
            question: "How do you measure social media success?",
            answer: "We track multiple metrics including reach, engagement rate, follower growth, click-through rates, conversions, and ROI. Success metrics are customized to your goals – whether that's brand awareness, lead generation, or sales. We provide monthly reports showing progress and insights."
        },
        {
            question: "Can you help with social media advertising?",
            answer: "Absolutely! We specialize in paid social campaigns across Facebook, Instagram, LinkedIn, and other platforms. This includes strategy development, ad creation, audience targeting, budget management, and optimization to maximize your ad spend ROI."
        },
        {
            question: "How do you handle negative comments or reviews?",
            answer: "We have protocols for managing negative feedback professionally and promptly. This includes acknowledging concerns, providing solutions, and moving conversations to private channels when needed. We help turn negative situations into opportunities to demonstrate excellent customer service."
        }
    ];

    const colorMap = {
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-purple-900/95 via-purple-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80'
                        alt='Social Media Marketing'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconBrandFacebook className='w-4 h-4' />
                            Social Media Marketing
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Build Your Brand & Engage Your Audience on Social Media
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Connect with your customers, grow your following, and drive real business results with strategic social media marketing across all major platforms.
                        </p>

                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link
                                href='/contact-us'
                                className='bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                            >
                                Get Started Today
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link
                                href='/case-studies/social-media-service'
                                className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300'
                            >
                                View Case Studies
                            </Link>
                        </div>

                        <div className='flex flex-wrap gap-4'>
                            {platforms.map((platform, index) => {
                                const Icon = platform.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 flex items-center gap-2'
                                    >
                                        <Icon className='w-5 h-5 text-white' />
                                        <span className='text-white font-medium'>{platform.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className='py-10 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Our Social Media Services
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Comprehensive social media solutions to amplify your brand and drive engagement.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const colors = colorMap[feature.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`${colors.bg} border ${colors.border} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
                                >
                                    <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4'>
                                        <Icon className={`w-6 h-6 ${colors.icon}`} stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                Why Social Media Marketing Matters
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                With billions of active users daily, social media platforms offer unparalleled opportunities to connect with your audience, build brand loyalty, and drive business growth.
                            </p>
                            <div className='space-y-4'>
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className='flex items-center gap-3'
                                    >
                                        <div className='w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center shrink-0'>
                                            <IconCheck className='w-4 h-4 text-purple-600' stroke={2} />
                                        </div>
                                        <span className='text-gray-700'>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src='https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80'
                                alt='Social Media Marketing'
                                className='rounded-2xl shadow-2xl'
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className='py-10 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Our Social Media Process
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            A strategic approach to building and growing your social media presence.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='relative'
                            >
                                <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full'>
                                    <div className='text-5xl font-bold text-purple-600 mb-4'>{item.step}</div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                                    <p className='text-gray-600'>{item.description}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-200' />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <ClientSection />

            {/* FAQs */}
            <section className='py-10 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-4xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Frequently Asked Questions
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600'>
                            Everything you need to know about our social media services
                        </p>
                    </motion.div>

                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className='bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300'
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className='w-full px-6 py-5 flex items-center justify-between text-left hover: transition-colors'
                                >
                                    <span className='text-lg font-semibold text-gray-900 pr-8'>{faq.question}</span>
                                    {openFaq === index ? (
                                        <IconMinus className='w-5 h-5 text-purple-600 shrink-0' />
                                    ) : (
                                        <IconPlus className='w-5 h-5 text-gray-400 shrink-0' />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden'
                                        >
                                            <div className='px-6 pb-5 text-gray-600 leading-relaxed'>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-purple-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Grow Your Social Presence?
                        </h2>
                        <p className='text-xl text-purple-100 mb-8'>
                            Let's create a social media strategy that drives real results for your business.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Your Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
