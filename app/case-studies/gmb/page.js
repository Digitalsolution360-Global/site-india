"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import LocationStructuredData from '@/components/seo/LocationStructuredData'
import OGMetaTags from '@/components/seo/OGMetaTags'
import { IconChevronLeft, IconMapPin, IconStar, IconEye, IconSearch, IconClick } from '@tabler/icons-react'
import data from './content.json'

export default function GMBCaseStudiesPage() {
    const { projects } = data;

    return (
        <>
            <Header />
            <LocationStructuredData locationData={{ id: 21, name: 'India' }} locationType="country" serviceType="gmb" />
            <OGMetaTags serviceName="Google My Business" pageSlug="case-studies/gmb" />

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
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                {/* Before/After Images */}
                                <div className='grid grid-cols-2 h-64 overflow-hidden bg-gray-100'>
                                    <div className='relative'>
                                        <img
                                            src={project.beforeImage}
                                            alt={`${project.title} Before`}
                                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                                        />
                                        <div className='absolute top-2 left-2 bg-gray-900/80 text-white px-3 py-1 rounded text-xs font-semibold'>Before</div>
                                    </div>
                                    <div className='relative'>
                                        <img
                                            src={project.afterImage}
                                            alt={`${project.title} After`}
                                            className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                                        />
                                        <div className='absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold'>After</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    <div className='mb-4'>
                                        <h3 className='text-2xl font-bold text-gray-900 mb-2'>{project.title}</h3>
                                        <div className='flex items-center gap-2 text-gray-600'>
                                            <IconMapPin className='w-4 h-4' />
                                            <span>{project.location}</span>
                                        </div>
                                    </div>

                                    <p className='text-gray-600 mb-6 leading-relaxed'>
                                        {project.description}
                                    </p>

                                    {/* Results */}
                                    <div className='mb-6 pt-6 border-t border-gray-200'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Results Achieved</h4>
                                        <ul className='space-y-2'>
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <div className='w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0' />
                                                    <span>{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Services */}
                                    <div>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Services Provided</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {project.services.map((service, idx) => (
                                                <span key={idx} className='bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs font-medium'>
                                                    {service}
                                                </span>
                                            ))}
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
                            href='/contact-us'
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