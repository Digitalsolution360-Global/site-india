"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconSeo,
    IconBrandFacebook,
    IconCode,
    IconWriting,
    IconBriefcase,
    IconDeviceDesktop,
    IconArrowRight,
    IconCheck,
    IconSparkles
} from '@tabler/icons-react'

export default function ServicesPage() {
    const services = [
        {
            id: 'search-engine-optimization-seo',
            icon: IconSeo,
            title: 'Search Engine Optimization (SEO)',
            description: 'Boost your organic rankings and drive qualified traffic to your website with proven SEO strategies.',
            features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO'],
            color: 'blue',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80'
        },
        {
            id: 'social-media',
            icon: IconBrandFacebook,
            title: 'Social Media Marketing',
            description: 'Build a strong social presence and engage your audience across all major platforms.',
            features: ['Content Strategy', 'Community Management', 'Paid Campaigns', 'Analytics'],
            color: 'purple',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
        },
        {
            id: 'web-development',
            icon: IconCode,
            title: 'Web Development',
            description: 'Create stunning, high-performance websites that convert visitors into customers.',
            features: ['Custom Design', 'Responsive', 'E-commerce', 'Maintenance'],
            color: 'green',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80'
        },
        {
            id: 'content-marketing',
            icon: IconWriting,
            title: 'Content Marketing',
            description: 'Engage your audience with compelling content that drives results and builds brand authority.',
            features: ['Blog Writing', 'Copywriting', 'Video Content', 'Content Strategy'],
            color: 'orange',
            image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80'
        },
        {
            id: 'digital-marketing',
            icon: IconBriefcase,
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing solutions to grow your business and maximize ROI.',
            features: ['PPC Advertising', 'Email Marketing', 'Marketing Strategy', 'Analytics'],
            color: 'red',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        },
        {
            id: 'crm-development',
            icon: IconDeviceDesktop,
            title: 'CRM Development',
            description: 'Custom CRM solutions to streamline your business operations and improve customer relationships.',
            features: ['Custom CRM', 'Integration', 'Automation', 'Support'],
            color: 'indigo',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        }
    ];

    const colorMap = {
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-400' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-400' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-400' },
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200', hover: 'hover:border-red-400' },
        indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200', hover: 'hover:border-indigo-400' }
    };

    const stats = [
        { value: '300+', label: 'Happy Clients' },
        { value: '500+', label: 'Projects Completed' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Client Satisfaction' }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80'
                        alt='Our Services'
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
                            <IconSparkles className='w-4 h-4' />
                            Our Services
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Comprehensive Digital Solutions for Your Business Growth
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            From SEO and social media to web development and CRM solutions, we offer end-to-end digital services to help your business thrive in the digital age.
                        </p>

                        <div className='flex flex-wrap gap-8 text-white'>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className='text-3xl md:text-4xl font-bold mb-1'>{stat.value}</div>
                                    <div className='text-blue-100'>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
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
                            Our Service Offerings
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Explore our comprehensive range of digital services designed to elevate your brand and drive measurable results.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const colors = colorMap[service.color];
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/services/${service.id}`}>
                                        <div className={`group bg-white border-2 ${colors.border} ${colors.hover} rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col`}>
                                            {/* Image */}
                                            <div className='relative h-48 overflow-hidden'>
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                                />
                                                <div className={`absolute top-4 left-4 w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                                                    <Icon className={`w-7 h-7 ${colors.icon}`} stroke={1.5} />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className='p-6 flex-1 flex flex-col'>
                                                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                                                    {service.title}
                                                </h3>
                                                <p className='text-gray-600 mb-4 flex-1'>
                                                    {service.description}
                                                </p>

                                                {/* Features */}
                                                <div className='space-y-2 mb-4'>
                                                    {service.features.map((feature, idx) => (
                                                        <div key={idx} className='flex items-center gap-2 text-sm text-gray-700'>
                                                            <IconCheck className='w-4 h-4 text-green-600' stroke={2} />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <div className='flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all'>
                                                    Learn More
                                                    <IconArrowRight className='w-5 h-5' stroke={2} />
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

            {/* Why Choose Us */}
            {/* <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Why Choose Digitalsolution360?
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            We combine expertise, innovation, and dedication to deliver exceptional results for your business.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                title: 'Expert Team',
                                description: 'Skilled professionals with years of industry experience',
                                icon: '👥'
                            },
                            {
                                title: 'Proven Results',
                                description: 'Track record of successful projects and satisfied clients',
                                icon: '📊'
                            },
                            {
                                title: 'Custom Solutions',
                                description: 'Tailored strategies to meet your unique business needs',
                                icon: '🎯'
                            },
                            {
                                title: '24/7 Support',
                                description: 'Dedicated support team available whenever you need us',
                                icon: '💬'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-center'
                            >
                                <div className='text-5xl mb-4'>{item.icon}</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
                                <p className='text-gray-600'>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Let's discuss how our services can help you achieve your business goals.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Started Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
