"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { IconChevronLeft, IconDownload, IconStar, IconUsers, IconExternalLink, IconBrandAndroid, IconBrandApple } from '@tabler/icons-react'
import data from './data.json'

export default function AppDevelopmentCaseStudiesPage() {
    const { apps } = data;

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-indigo-900/95 via-indigo-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80'
                        alt='App Development'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <Link href='/case-studies' className='flex items-center gap-2 text-white hover:text-gray-200 transition-all mb-6'>
                        <IconChevronLeft className='w-5 h-5' />
                        Back to Case Studies
                    </Link>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                        App Development Projects
                    </h1>
                    <p className='text-xl text-indigo-100'>
                        Mobile solutions that deliver exceptional user experiences
                    </p>
                </div>
            </section>

            {/* Apps Grid */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto space-y-12'>
                    {apps.map((app, index) => (
                        <motion.div
                            key={app.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className='bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300'
                        >
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                                {/* App Screenshot */}
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} lg:col-span-1 bg-linear-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center`}>
                                    <div className='relative'>
                                        <img
                                            src={app.screenshot}
                                            alt={app.name}
                                            className='rounded-3xl shadow-2xl border-8 border-white/20 max-w-xs'
                                        />
                                        {/* Glow Effect */}
                                        <div className='absolute -inset-4 bg-white/20 blur-2xl -z-10 rounded-3xl' />
                                    </div>
                                </div>

                                {/* App Details */}
                                <div className='lg:col-span-2 p-8'>
                                    <div className='flex items-start gap-4 mb-6'>
                                        <img
                                            src={app.icon}
                                            alt={app.name}
                                            className='w-16 h-16 rounded-2xl shadow-lg object-cover'
                                        />
                                        <div className='flex-1'>
                                            <h3 className='text-3xl font-bold text-gray-900 mb-2'>{app.name}</h3>
                                            <span className='inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold'>
                                                {app.category}
                                            </span>
                                        </div>
                                    </div>

                                    <p className='text-gray-600 leading-relaxed mb-6'>
                                        {app.description}
                                    </p>

                                    {/* Platform Badge */}
                                    <div className='flex items-center gap-2 mb-6'>
                                        <IconBrandAndroid className='w-5 h-5 text-green-600' />
                                        <IconBrandApple className='w-5 h-5 text-gray-700' />
                                        <span className='text-sm text-gray-600 font-medium'>{app.platform}</span>
                                    </div>

                                    {/* Stats */}
                                    <div className='grid grid-cols-4 gap-4 mb-6 p-6 bg-gray-50 rounded-xl'>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconDownload className='w-5 h-5 text-blue-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{app.stats.downloads}</div>
                                            <div className='text-xs text-gray-600'>Downloads</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconStar className='w-5 h-5 text-yellow-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{app.stats.rating}</div>
                                            <div className='text-xs text-gray-600'>Rating</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconUsers className='w-5 h-5 text-purple-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{app.stats.reviews}</div>
                                            <div className='text-xs text-gray-600'>Reviews</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                                <IconUsers className='w-5 h-5 text-green-600' />
                                            </div>
                                            <div className='text-lg font-bold text-gray-900'>{app.stats.activeUsers}</div>
                                            <div className='text-xs text-gray-600'>Active Users</div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className='mb-6'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Key Features</h4>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                            {app.features.map((feature, idx) => (
                                                <div key={idx} className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <div className='w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0' />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Store Buttons */}
                                    <div className='flex flex-wrap gap-4 pt-6 border-t border-gray-200'>
                                        <a
                                            href={app.playStoreUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105'
                                        >
                                            <IconBrandAndroid className='w-5 h-5' />
                                            Google Play
                                            <IconExternalLink className='w-4 h-4' />
                                        </a>
                                        <a
                                            href={app.appStoreUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105'
                                        >
                                            <IconBrandApple className='w-5 h-5' />
                                            App Store
                                            <IconExternalLink className='w-4 h-4' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-indigo-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Have an App Idea?
                        </h2>
                        <p className='text-xl text-indigo-100 mb-8'>
                            Let's build a mobile app that your users will love.
                        </p>
                        <Link
                            href='/contact'
                            className='inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Start Your App Project
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}