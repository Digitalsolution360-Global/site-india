"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ClientSection from '@/components/sections/clients'
import {
    IconBriefcase,
    IconTargetArrow,
    IconBrandGoogle,
    IconMail,
    IconChartBar,
    IconAd,
    IconCheck,
    IconPlus,
    IconMinus,
    IconArrowRight,
    IconRocket,
    IconUsers,
    IconCurrencyRupee
} from '@tabler/icons-react'

export default function DigitalMarketingServicePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const features = [
        {
            icon: IconBrandGoogle,
            title: 'PPC Advertising',
            description: 'Google Ads and paid search campaigns that deliver immediate results and high ROI.',
            color: 'red'
        },
        {
            icon: IconMail,
            title: 'Email Marketing',
            description: 'Nurture leads and drive conversions with targeted email campaigns.',
            color: 'blue'
        },
        {
            icon: IconAd,
            title: 'Display Advertising',
            description: 'Eye-catching banner ads and retargeting campaigns across the web.',
            color: 'purple'
        },
        {
            icon: IconTargetArrow,
            title: 'Marketing Strategy',
            description: 'Comprehensive digital marketing plans aligned with your business goals.',
            color: 'green'
        },
        {
            icon: IconChartBar,
            title: 'Analytics & Reporting',
            description: 'Data-driven insights to track performance and optimize campaigns.',
            color: 'orange'
        },
        {
            icon: IconRocket,
            title: 'Growth Marketing',
            description: 'Innovative strategies to scale your business rapidly and sustainably.',
            color: 'indigo'
        }
    ];

    const services = [
        'Pay-Per-Click (PPC) Advertising',
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Email Marketing Campaigns',
        'Marketing Automation',
        'Conversion Rate Optimization',
        'Landing Page Design'
    ];

    const benefits = [
        'Immediate visibility and traffic',
        'Highly targeted audience reach',
        'Measurable ROI and results',
        'Cost-effective lead generation',
        'Complete campaign control',
        'Quick market testing and validation'
    ];

    const process = [
        {
            step: '01',
            title: 'Goal Setting',
            description: 'Define clear objectives and KPIs for your campaigns.'
        },
        {
            step: '02',
            title: 'Strategy Development',
            description: 'Create comprehensive marketing plans and budgets.'
        },
        {
            step: '03',
            title: 'Campaign Launch',
            description: 'Execute campaigns across selected channels.'
        },
        {
            step: '04',
            title: 'Optimize & Scale',
            description: 'Continuously improve performance and scale winners.'
        }
    ];

    const faqs = [
        {
            question: "What's the difference between digital marketing and traditional marketing?",
            answer: "Digital marketing leverages online channels (search engines, social media, email, websites) to reach customers, offering precise targeting, real-time tracking, and better ROI measurement. Traditional marketing uses offline channels like TV, radio, and print. Digital marketing typically offers lower costs, better targeting, and immediate results."
        },
        {
            question: "How much should I budget for digital marketing?",
            answer: "Budget depends on your industry, competition, and goals. A typical starting point is 5-10% of revenue for B2C and 2-5% for B2B companies. For PPC, we recommend starting with at least ₹30,000-50,000 per month to see meaningful results. We'll help determine the optimal budget based on your specific situation."
        },
        {
            question: "How quickly will I see results from digital marketing?",
            answer: "PPC campaigns can show results within days, though optimization takes 2-3 months. SEO typically takes 3-6 months for significant improvements. Email marketing shows results within weeks. Social media marketing varies. We set realistic expectations and focus on sustainable, long-term growth alongside quick wins."
        },
        {
            question: "Do you work with specific industries?",
            answer: "We work with businesses across all industries including healthcare, real estate, e-commerce, technology, finance, education, and more. Our strategies are customized based on your industry's unique challenges, audience behavior, and competitive landscape."
        },
        {
            question: "How do you measure digital marketing success?",
            answer: "We track multiple metrics including website traffic, conversion rates, cost per lead, cost per acquisition, ROI, engagement rates, and revenue growth. Success metrics are customized to your goals. We provide detailed monthly reports with insights and recommendations for improvement."
        },
        {
            question: "Can you integrate with our existing marketing efforts?",
            answer: "Absolutely! We work collaboratively with your in-house team or other agencies. We can handle specific channels, provide strategic consulting, or manage your entire digital presence. Our goal is to complement and enhance your existing efforts for maximum impact."
        }
    ];

    const colorMap = {
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
        indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-red-900/95 via-red-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
                        alt='Digital Marketing'
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
                            <IconBriefcase className='w-4 h-4' />
                            Digital Marketing
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Comprehensive Digital Marketing Solutions That Drive Growth
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            From PPC advertising to email marketing, we create integrated digital campaigns that maximize your ROI and accelerate business growth.
                        </p>

                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link
                                href='/contact-us'
                                className='bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                            >
                                Get Free Consultation
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link
                                href='/case-studies'
                                className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300'
                            >
                                View Success Stories
                            </Link>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            {[
                                { icon: IconUsers, value: '300+', label: 'Happy Clients' },
                                { icon: IconRocket, value: '500+', label: 'Campaigns Launched' },
                                { icon: IconChartBar, value: '250%', label: 'Avg. ROI' },
                                { icon: IconCurrencyRupee, value: '10Cr+', label: 'Revenue Generated' }
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4'
                                    >
                                        <Icon className='w-6 h-6 text-white mb-2' />
                                        <div className='text-2xl font-bold text-white mb-1'>{stat.value}</div>
                                        <div className='text-sm text-gray-200'>{stat.label}</div>
                                    </motion.div>
                                );
                            })}
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
                            Our Digital Marketing Services
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Full-service digital marketing solutions to help your business thrive online.
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

            {/* Services List */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src='https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80'
                                alt='Digital Marketing'
                                className='rounded-2xl shadow-2xl'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                What We Offer
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                A complete suite of digital marketing services designed to drive traffic, generate leads, and increase revenue.
                            </p>
                            <div className='space-y-3'>
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className='flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all'
                                    >
                                        <div className='w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0'>
                                            <IconCheck className='w-4 h-4 text-red-600' stroke={2} />
                                        </div>
                                        <span className='text-gray-700 font-medium'>{service}</span>
                                    </motion.div>
                                ))}
                            </div>
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
                            Why Choose Digital Marketing?
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Digital marketing offers unmatched advantages for modern businesses.
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
                                <div className='w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0'>
                                    <IconCheck className='w-5 h-5 text-red-600' stroke={2} />
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
                                Our Process
                            </h2>
                            <p className='text-lg text-gray-600 mb-6'>
                                A systematic approach to achieving your digital marketing goals.
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
                                src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
                                alt='Digital Marketing Process'
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
                                    <div className='text-5xl font-bold text-red-500 mb-4'>{item.step}</div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                                    <p className='text-gray-600'>{item.description}</p>
                                </div>
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
                            Everything you need to know about our digital marketing services
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
                                    className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                                >
                                    <span className='text-lg font-semibold text-gray-900 pr-8'>{faq.question}</span>
                                    {openFaq === index ? (
                                        <IconMinus className='w-5 h-5 text-red-600 shrink-0' />
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
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-red-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Accelerate Your Growth?
                        </h2>
                        <p className='text-xl text-red-100 mb-8'>
                            Let's create a digital marketing strategy that drives real results for your business.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Your Free Strategy Session
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
