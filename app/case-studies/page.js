"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconSearch,
    IconWorld,
    IconCode,
    IconShare2,
    IconMap,
    IconDeviceMobile,
    IconTrendingUp,
    IconUsers,
    IconTarget,
    IconArrowRight
} from '@tabler/icons-react'

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            id: 'seo-project',
            title: 'SEO Project',
            subtitle: 'Organic Growth Through Strategic Optimization',
            description: 'Increased organic traffic by 250% for an e-commerce business through comprehensive SEO strategies, keyword optimization, and technical improvements.',
            image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80',
            icon: IconSearch,
            stats: [
                { label: 'Traffic Growth', value: '250%' },
                { label: 'Keywords Ranking', value: '1,200+' },
                { label: 'ROI Increase', value: '380%' }
            ],
            color: 'blue',
            darkColor: 'blue-600'
        },
        {
            id: 'gmb',
            title: 'Google My Business',
            subtitle: 'Local Visibility & Map Rankings',
            description: 'Optimized GMB profile and achieved top 3 local rankings, resulting in 45% increase in foot traffic and customer inquiries.',
            image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
            icon: IconMap,
            stats: [
                { label: 'Local Rankings', value: 'Top 3' },
                { label: 'Foot Traffic', value: '+45%' },
                { label: 'Reviews Score', value: '4.8/5' }
            ],
            color: 'green',
            darkColor: 'green-600'
        },
        {
            id: 'website',
            title: 'Website Development',
            subtitle: 'High-Performance Web Solutions',
            description: 'Designed and developed a responsive website with 99.9% uptime, resulting in 60% improvement in user experience and conversion rates.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
            icon: IconWorld,
            stats: [
                { label: 'Page Speed', value: '1.2s' },
                { label: 'Conversions', value: '+60%' },
                { label: 'Mobile Score', value: '98/100' }
            ],
            color: 'purple',
            darkColor: 'purple-600'
        },
        {
            id: 'social-media-service',
            title: 'Social Media Project',
            subtitle: 'Community Building & Engagement',
            description: 'Grew Instagram & Facebook presence from 5K to 150K followers in 6 months with engaging content and strategic campaigns.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
            icon: IconShare2,
            stats: [
                { label: 'Followers Growth', value: '150K' },
                { label: 'Engagement Rate', value: '8.5%' },
                { label: 'Brand Reach', value: '2.5M' }
            ],
            color: 'pink',
            darkColor: 'pink-600'
        },
        {
            id: 'gmb-promotion',
            title: 'Google My Business Promotion',
            subtitle: 'Advanced Local Marketing',
            description: 'Comprehensive GMB campaign with photo optimization, posts, and review management achieving maximum visibility in local searches.',
            image: 'https://images.unsplash.com/photo-1556741049-0cfed4f6a45d?w=600&q=80',
            icon: IconTrendingUp,
            stats: [
                { label: 'Search Visibility', value: '+380%' },
                { label: 'Customer Contacts', value: '+220%' },
                { label: 'Local Leads', value: '500+' }
            ],
            color: 'orange',
            darkColor: 'orange-600'
        },
        {
            id: 'app-development',
            title: 'App Development',
            subtitle: 'Mobile Solutions That Drive Results',
            description: 'Built a feature-rich mobile app with 50K+ downloads, 4.7 star rating, and seamless user experience across iOS and Android.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
            icon: IconDeviceMobile,
            stats: [
                { label: 'Total Downloads', value: '50K+' },
                { label: 'App Rating', value: '4.7/5' },
                { label: 'Daily Active Users', value: '8K+' }
            ],
            color: 'indigo',
            darkColor: 'indigo-600'
        }
    ];

    const bgColorMap = {
        blue: 'bg-blue-50',
        green: 'bg-green-50',
        purple: 'bg-purple-50',
        pink: 'bg-pink-50',
        orange: 'bg-orange-50',
        indigo: 'bg-indigo-50'
    };

    const borderColorMap = {
        blue: 'border-blue-200',
        green: 'border-green-200',
        purple: 'border-purple-200',
        pink: 'border-pink-200',
        orange: 'border-orange-200',
        indigo: 'border-indigo-200'
    };

    const hoverColorMap = {
        blue: 'hover:border-blue-300 hover:shadow-blue-200',
        green: 'hover:border-green-300 hover:shadow-green-200',
        purple: 'hover:border-purple-300 hover:shadow-purple-200',
        pink: 'hover:border-pink-300 hover:shadow-pink-200',
        orange: 'hover:border-orange-300 hover:shadow-orange-200',
        indigo: 'hover:border-indigo-300 hover:shadow-indigo-200'
    };

    const badgeColorMap = {
        blue: 'bg-blue-100 text-blue-700',
        green: 'bg-green-100 text-green-700',
        purple: 'bg-purple-100 text-purple-700',
        pink: 'bg-pink-100 text-pink-700',
        orange: 'bg-orange-100 text-orange-700',
        indigo: 'bg-indigo-100 text-indigo-700'
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80'
                        alt='Case Studies'
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
                            className='inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            Case Studies
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl'>
                            Real Results, Real Impact
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl'>
                            Explore how we've transformed businesses with data-driven strategies and innovative digital solutions across various industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Our Success Stories
                        </h2>
                        <p className='text-lg text-gray-600'>
                            Discover how we've helped businesses achieve remarkable growth and transformation
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {caseStudies.map((caseStudy, index) => {
                            const Icon = caseStudy.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <Link href={`/case-studies/${caseStudy.id}`}>
                                        <div className={`h-full border-2 ${borderColorMap[caseStudy.color]} ${hoverColorMap[caseStudy.color]} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white`}>
                                            {/* Image Section */}
                                            <div className='relative h-48 overflow-hidden bg-gray-900'>
                                                <img
                                                    src={caseStudy.image}
                                                    alt={caseStudy.title}
                                                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                                                />
                                                <div className={`absolute inset-0 ${bgColorMap[caseStudy.color]} opacity-0 hover:opacity-20 transition-opacity duration-300`} />
                                                <div className={`absolute top-4 right-4 ${badgeColorMap[caseStudy.color]} px-4 py-2 rounded-full flex items-center gap-2`}>
                                                    <Icon className='w-4 h-4' />
                                                    <span className='text-sm font-semibold'>{caseStudy.title}</span>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className='p-6'>
                                                <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                                                    {caseStudy.title}
                                                </h3>
                                                <p className={`text-sm font-semibold text-${caseStudy.color}-600 mb-3`}>
                                                    {caseStudy.subtitle}
                                                </p>
                                                <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                                                    {caseStudy.description}
                                                </p>

                                                {/* Stats */}
                                                <div className='grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-200'>
                                                    {caseStudy.stats.map((stat, idx) => (
                                                        <div key={idx} className='text-center'>
                                                            <div className={`text-lg font-bold text-${caseStudy.color}-600 mb-1`}>
                                                                {stat.value}
                                                            </div>
                                                            <div className='text-xs text-gray-600'>
                                                                {stat.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <div className={`flex items-center gap-2 text-${caseStudy.color}-600 font-semibold group`}>
                                                    <span>View Case Study</span>
                                                    <IconArrowRight className='w-4 h-4 group-hover:translate-x-2 transition-transform' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className='text-center'
                        >
                            <div className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>50+</div>
                            <p className='text-gray-600 font-medium'>Projects Completed</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='text-center'
                        >
                            <div className='text-4xl md:text-5xl font-bold text-green-600 mb-2'>95%</div>
                            <p className='text-gray-600 font-medium'>Client Satisfaction</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-center'
                        >
                            <div className='text-4xl md:text-5xl font-bold text-purple-600 mb-2'>$5M+</div>
                            <p className='text-gray-600 font-medium'>Client Revenue Growth</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='text-center'
                        >
                            <div className='text-4xl md:text-5xl font-bold text-orange-600 mb-2'>30+</div>
                            <p className='text-gray-600 font-medium'>Active Clients</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Our Process
                        </h2>
                        <p className='text-lg text-gray-600'>
                            How we deliver exceptional results for every project
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {[
                            { number: '01', title: 'Discovery', description: 'Understanding your business, goals, and target audience' },
                            { number: '02', title: 'Strategy', description: 'Developing data-driven strategies tailored to your needs' },
                            { number: '03', title: 'Execution', description: 'Implementing campaigns with precision and excellence' },
                            { number: '04', title: 'Analysis', description: 'Measuring results and optimizing for maximum ROI' },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='relative'
                            >
                                <div className='bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300'>
                                    <div className='text-4xl font-bold text-blue-600 mb-3'>{step.number}</div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{step.title}</h3>
                                    <p className='text-gray-600'>{step.description}</p>
                                </div>
                                {index < 3 && (
                                    <div className='hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-blue-400 to-transparent' />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Ready for Your Success Story?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Let's collaborate and create amazing results together.
                        </p>
                        <Link
                            href='/contact'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}