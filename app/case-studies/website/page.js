"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import LocationStructuredData from '@/components/seo/LocationStructuredData'
import OGMetaTags from '@/components/seo/OGMetaTags'
import { IconChevronLeft, IconExternalLink, IconClock, IconCode, IconSparkles } from '@tabler/icons-react'
import data from './content.json'

export default function WebsiteCaseStudiesPage() {
    const { projects } = data;

    return (
        <>
            <Header />
            <LocationStructuredData locationData={{ id: 22, name: 'India' }} locationType="country" serviceType="website-development" />
            <OGMetaTags serviceName="Website Development" pageSlug="case-studies/website" />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-purple-900/95 via-purple-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80'
                        alt='Website Development'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <Link href='/case-studies' className='flex items-center gap-2 text-white hover:text-gray-200 transition-all mb-6'>
                        <IconChevronLeft className='w-5 h-5' />
                        Back to Case Studies
                    </Link>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                        Website Development Projects
                    </h1>
                    <p className='text-xl text-purple-100'>
                        High-performance websites that drive results and conversions
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto space-y-12'>
                    {projects.reverse().map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Website Screenshot */}
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className='relative group'>
                                    <div className='border-8 border-gray-900 rounded-2xl overflow-hidden shadow-2xl'>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                                        />
                                    </div>
                                    {/* Device Frame Effect */}
                                    <div className='absolute -inset-4 bg-linear-to-r from-purple-600 to-blue-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 -z-10' />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className='bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300'>
                                    <div className='mb-6'>
                                        <h3 className='text-3xl font-bold text-gray-900 mb-2'>{project.title}</h3>
                                        {project.subtitle && (
                                            <p className='text-lg text-purple-600 font-semibold'>{project.subtitle}</p>
                                        )}
                                    </div>

                                    <p className='text-gray-600 mb-6 leading-relaxed'>
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    {project.tags && (
                                        <div className='mb-6'>
                                            <h4 className='text-sm font-semibold text-gray-700 mb-3'>Technologies & Tags</h4>
                                            <div className='flex flex-wrap gap-2'>
                                                {project.tags.map((tag, idx) => (
                                                    <span key={idx} className='bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-xs font-medium'>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Highlights */}
                                    <div className='mb-6'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2'>
                                            <IconSparkles className='w-4 h-4' />
                                            Key Highlights
                                        </h4>
                                        <ul className='space-y-2'>
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className='flex items-start gap-2 text-gray-600 text-sm'>
                                                    <div className='w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 shrink-0' />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Visit Button */}
                                    {project.isLink && project.link && (
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105'
                                        >
                                            Visit Website
                                            <IconExternalLink className='w-5 h-5' />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-purple-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Ready for Your Dream Website?
                        </h2>
                        <p className='text-xl text-purple-100 mb-8'>
                            Let's create a high-performance website that converts visitors into customers.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
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