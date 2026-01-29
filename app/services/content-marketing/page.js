"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ClientSection from '@/components/sections/clients'
import {
    IconWriting,
    IconFileText,
    IconVideo,
    IconBulb,
    IconStar,
    IconTrendingUp,
    IconCheck,
    IconPlus,
    IconMinus,
    IconArrowRight,
    IconBrandYoutube,
    IconNews,
    IconMail
} from '@tabler/icons-react'

export default function ContentMarketingServicePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const features = [
        {
            icon: IconFileText,
            title: 'Blog Writing & SEO Content',
            description: 'Engaging, SEO-optimized blog posts that rank well and drive organic traffic.',
            color: 'orange'
        },
        {
            icon: IconWriting,
            title: 'Website Copywriting',
            description: 'Compelling website copy that converts visitors into customers.',
            color: 'blue'
        },
        {
            icon: IconVideo,
            title: 'Video Content Creation',
            description: 'Professional video scripts and production for social media and YouTube.',
            color: 'red'
        },
        {
            icon: IconMail,
            title: 'Email Marketing Content',
            description: 'Persuasive email campaigns that nurture leads and boost conversions.',
            color: 'purple'
        },
        {
            icon: IconNews,
            title: 'Social Media Content',
            description: 'Creative posts, captions, and graphics for all social platforms.',
            color: 'green'
        },
        {
            icon: IconBulb,
            title: 'Content Strategy',
            description: 'Comprehensive content plans aligned with your business goals.',
            color: 'yellow'
        }
    ];

    const contentTypes = [
        'Blog Posts & Articles',
        'Website Copy',
        'Social Media Content',
        'Video Scripts',
        'Email Campaigns',
        'Infographics',
        'E-books & Whitepapers',
        'Case Studies'
    ];

    const benefits = [
        'Establish thought leadership in your industry',
        'Boost SEO rankings with quality content',
        'Increase brand awareness and visibility',
        'Generate qualified leads',
        'Build trust and credibility',
        'Improve customer engagement'
    ];

    const process = [
        {
            step: '01',
            title: 'Research & Strategy',
            description: 'Understand your audience, goals, and develop a content roadmap.'
        },
        {
            step: '02',
            title: 'Content Creation',
            description: 'Write, design, and produce high-quality content pieces.'
        },
        {
            step: '03',
            title: 'Distribution',
            description: 'Publish and promote content across relevant channels.'
        },
        {
            step: '04',
            title: 'Measure & Optimize',
            description: 'Track performance and refine strategy for better results.'
        }
    ];

    const faqs = [
        {
            question: "What types of content do you create?",
            answer: "We create a wide range of content including blog posts, articles, website copy, social media posts, video scripts, email campaigns, infographics, e-books, whitepapers, and case studies. We tailor our content offerings to your specific needs and marketing goals."
        },
        {
            question: "How do you ensure content is SEO-optimized?",
            answer: "We conduct thorough keyword research, optimize headlines and meta descriptions, use proper heading structure, include internal and external links, optimize images, and ensure content readability. Our writers are trained in SEO best practices and create content that ranks well while remaining engaging."
        },
        {
            question: "Can you write content for my specific industry?",
            answer: "Yes! We have experience creating content across various industries including technology, healthcare, finance, e-commerce, real estate, education, and more. We research your industry thoroughly and work with subject matter experts when needed to ensure accuracy and relevance."
        },
        {
            question: "How often should we publish new content?",
            answer: "Consistency is key. We typically recommend publishing 2-4 blog posts per month minimum, with daily social media updates. The ideal frequency depends on your goals, audience, and resources. We'll create a content calendar that balances quality with consistency."
        },
        {
            question: "Do you help with content distribution and promotion?",
            answer: "Absolutely! We don't just create content; we help distribute it across relevant channels including your website, social media, email newsletters, and guest posting opportunities. We also provide strategies for content amplification through paid promotion when appropriate."
        },
        {
            question: "How do you measure content marketing success?",
            answer: "We track metrics including organic traffic growth, time on page, bounce rate, social shares, lead generation, conversion rates, and ROI. We provide monthly reports showing content performance and recommendations for optimization based on data insights."
        }
    ];

    const colorMap = {
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-orange-900/95 via-orange-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=80'
                        alt='Content Marketing'
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
                            <IconWriting className='w-4 h-4' />
                            Content Marketing
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Engage Your Audience with Compelling Content
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Create meaningful connections with your audience through strategic content marketing that educates, entertains, and converts.
                        </p>

                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                            >
                                Get Started
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link
                                href='/case-studies'
                                className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300'
                            >
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Our Content Marketing Services
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Comprehensive content solutions that resonate with your audience and drive results.
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

            {/* Content Types */}
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
                                Content That Connects
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                We create diverse content formats tailored to your audience's preferences and consumption habits across different platforms and touchpoints.
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {contentTypes.map((type, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className='flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg p-3'
                                    >
                                        <IconStar className='w-5 h-5 text-orange-600 shrink-0' stroke={1.5} />
                                        <span className='text-gray-700 font-medium'>{type}</span>
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
                                src='https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&q=80'
                                alt='Content Marketing'
                                className='rounded-2xl shadow-2xl'
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Why Content Marketing Works
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Quality content is the foundation of modern digital marketing strategy.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-4'
                            >
                                <div className='w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0'>
                                    <IconCheck className='w-5 h-5 text-orange-600' stroke={2} />
                                </div>
                                <div>
                                    <p className='text-gray-700 font-medium'>{benefit}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                                Our Content Marketing Process
                            </h2>
                            <p className='text-lg text-gray-600 mb-6'>
                                A strategic approach to creating and distributing valuable content that drives results.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
                                alt='Content Marketing Process'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>
                    </div>

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
                                    <div className='text-5xl font-bold text-orange-500 mb-4'>{item.step}</div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                                    <p className='text-gray-600'>{item.description}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-200' />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <ClientSection />

            {/* FAQs */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
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
                            Everything you need to know about our content marketing services
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
                                        <IconMinus className='w-5 h-5 text-orange-600 shrink-0' />
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
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-orange-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Tell Your Story?
                        </h2>
                        <p className='text-xl text-orange-100 mb-8'>
                            Let's create content that captivates your audience and drives business growth.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Start Creating Content
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
