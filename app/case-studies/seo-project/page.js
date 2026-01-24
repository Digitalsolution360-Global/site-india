"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { IconChevronLeft, IconRocket, IconBell } from '@tabler/icons-react'

export default function SEOProjectComingSoonPage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[80vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95 z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&q=80'
                        alt='SEO Project'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-4xl mx-auto relative z-20 w-full text-center'>
                    <Link href='/case-studies' className='inline-flex items-center gap-2 text-white hover:text-gray-200 transition-all mb-8'>
                        <IconChevronLeft className='w-5 h-5' />
                        Back to Case Studies
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8'>
                            <IconRocket className='w-10 h-10 text-white' />
                        </div>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                            SEO Projects
                        </h1>

                        <div className='inline-block bg-yellow-500 text-yellow-900 px-6 py-3 rounded-full text-lg font-bold mb-8'>
                            Coming Soon
                        </div>

                        <p className='text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto'>
                            We're compiling our best SEO success stories and results. Check back soon to see how we've helped businesses achieve top rankings and massive organic growth.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link
                                href='/contact'
                                className='inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                <IconBell className='w-5 h-5' />
                                Get Notified
                            </Link>
                            <Link
                                href='/case-studies'
                                className='inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105'
                            >
                                View Other Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Preview */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            What to Expect
                        </h2>
                        <p className='text-lg text-gray-600'>
                            Our SEO case studies will showcase real results and proven strategies
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            { title: 'Traffic Growth', description: 'See how we increased organic traffic by 200%+ for multiple clients', icon: '📈' },
                            { title: 'Keyword Rankings', description: 'Discover our proven strategies for achieving top 10 rankings', icon: '🎯' },
                            { title: 'ROI Results', description: 'Learn how SEO delivered 300%+ return on investment', icon: '💰' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300'
                            >
                                <div className='text-4xl mb-4'>{item.icon}</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
                                <p className='text-gray-600'>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}