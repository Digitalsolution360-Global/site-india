"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { IconChevronLeft, IconMapPin, IconStar, IconEye, IconSearch, IconClick } from '@tabler/icons-react'
import data from './data.json'

export default function GMBCaseStudiesPage() {
    const { clients } = data;

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-green-900/95 via-green-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80'
                        alt='Google My Business'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <Link href='/case-studies' className='flex items-center gap-2 text-white hover:text-gray-200 transition-all mb-6'>
                        <IconChevronLeft className='w-5 h-5' />
                        Back to Case Studies
                    </Link>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                        Google My Business Projects
                    </h1>
                    <p className='text-xl text-green-100'>
                        Helping local businesses dominate their local search results
                    </p>
                </div>
            </section>

            {/* Clients Grid */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {clients.map((client, index) => (
                            <motion.div
                                key={client.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                {/* Dashboard Image */}
                                <div className='h-100 overflow-hidden bg-gray-100'>
                                    <img
                                        src={client.dashboardImage}
                                        alt={`${client.businessName} GMB Dashboard`}
                                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                                    />
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    <div className='flex items-start justify-between mb-4'>
                                        <div>
                                            <h3 className='text-2xl font-bold text-gray-900 mb-1'>{client.businessName}</h3>
                                            <div className='flex items-center gap-2 text-gray-600'>
                                                <IconMapPin className='w-4 h-4' />
                                                <span>{client.location}</span>
                                            </div>
                                        </div>
                                        <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold'>
                                            {client.category}
                                        </span>
                                    </div>

                                    <p className='text-gray-600 mb-6 leading-relaxed'>
                                        {client.description}
                                    </p>

                                    {/* Stats Grid */}
                                    <div className='grid grid-cols-4 gap-4 mb-6 pt-6 border-t border-gray-200'>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconEye className='w-5 h-5 text-blue-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{client.stats.views}</div>
                                            <div className='text-xs text-gray-600'>Views</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconSearch className='w-5 h-5 text-purple-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{client.stats.searches}</div>
                                            <div className='text-xs text-gray-600'>Searches</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconClick className='w-5 h-5 text-green-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{client.stats.actions}</div>
                                            <div className='text-xs text-gray-600'>Actions</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconStar className='w-5 h-5 text-yellow-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{client.stats.rating}</div>
                                            <div className='text-xs text-gray-600'>Rating</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-green-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Want to Dominate Local Search?
                        </h2>
                        <p className='text-xl text-green-100 mb-8'>
                            Let us optimize your Google My Business profile for maximum visibility.
                        </p>
                        <Link
                            href='/contact'
                            className='inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
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