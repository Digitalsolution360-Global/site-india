"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import LocationStructuredData from '@/components/seo/LocationStructuredData'
import OGMetaTags from '@/components/seo/OGMetaTags'
import { IconChevronLeft, IconTrendingUp, IconUsers, IconExternalLink, IconChartBar } from '@tabler/icons-react'
import data from './content.json'

export default function SEOProjectsPage() {
    const { client } = data;

    return (
        <>
            <Header />
            <LocationStructuredData locationData={{ id: 25, name: 'India' }} locationType="country" serviceType="seo-service" />
            <OGMetaTags serviceName="SEO" pageSlug="case-studies/seo-project" />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
                        alt='SEO Projects'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <Link href='/case-studies' className='flex items-center gap-2 text-white hover:text-gray-200 transition-all mb-6'>
                        <IconChevronLeft className='w-5 h-5' />
                        Back to Case Studies
                    </Link>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                        SEO Success Stories
                    </h1>
                    <p className='text-xl text-blue-100'>
                        Proven results driving organic growth and revenue for our clients
                    </p>
                </div>
            </section>

            {/* Clients Grid */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {client.map((clientItem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                {/* Client Header */}
                                <div className='bg-linear-to-r from-blue-600 to-blue-800 p-8 text-white'>
                                    <div className='flex items-center gap-4 mb-6'>
                                        {clientItem.logo && (
                                            <img
                                                src={clientItem.logo}
                                                alt={clientItem.name}
                                                className='w-16 h-16 rounded-lg bg-white object-contain p-2'
                                            />
                                        )}
                                        <div>
                                            <h3 className='text-2xl font-bold mb-2'>{clientItem.name}</h3>
                                            <a 
                                                href={clientItem.website}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-1'
                                            >
                                                {clientItem.website.replace('https://www.', '').replace('https://', '')}
                                                <IconExternalLink className='w-3 h-3' />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className='grid grid-cols-2 gap-4 p-6 bg-gray-50'>
                                    {clientItem.stats.map((stat, idx) => (
                                        <div key={idx} className='text-center p-4 bg-white rounded-lg'>
                                            <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                {idx === 0 && <IconTrendingUp className='w-5 h-5 text-blue-600' />}
                                                {idx === 1 && <IconUsers className='w-5 h-5 text-green-600' />}
                                                {idx === 2 && <IconChartBar className='w-5 h-5 text-purple-600' />}
                                                {idx === 3 && <IconTrendingUp className='w-5 h-5 text-orange-600' />}
                                            </div>
                                            <div className='text-2xl font-bold text-blue-600 mb-1'>{stat.value}</div>
                                            <div className='text-xs text-gray-600'>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Visit Button */}
                                <div className='p-6 border-t border-gray-200'>
                                    <a
                                        href={clientItem.website}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full justify-center'
                                    >
                                        Visit Website
                                        <IconExternalLink className='w-5 h-5' />
                                    </a>
                                </div>
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
                            Ready to Grow Your Organic Traffic?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Let us help you achieve similar results with our proven SEO strategies.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Free SEO Audit
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}