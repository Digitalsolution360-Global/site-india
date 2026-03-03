"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import LocationStructuredData from '@/components/seo/LocationStructuredData'
import OGMetaTags from '@/components/seo/OGMetaTags'
import { IconChevronLeft, IconUsers, IconHeart, IconEye, IconPhoto, IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react'
import data from './content.json'

export default function SocialMediaCaseStudiesPage() {
    const { clients } = data;

    const getPlatformIcon = (platform) => {
        switch (platform.toLowerCase()) {
            case 'instagram': return IconBrandInstagram;
            case 'facebook': return IconBrandFacebook;
            case 'youtube': return IconBrandYoutube;
            default: return IconUsers;
        }
    };

    return (
        <>
            <Header />
            <LocationStructuredData locationData={{ id: 24, name: 'India' }} locationType="country" serviceType="social-media-marketing" />
            <OGMetaTags serviceName="Social Media Marketing" pageSlug="case-studies/social-media-service" />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-pink-900/95 via-pink-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&q=80'
                        alt='Social Media Marketing'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <Link href='/case-studies' className='flex items-center gap-2 text-white hover:text-gray-200 transition-all mb-6'>
                        <IconChevronLeft className='w-5 h-5' />
                        Back to Case Studies
                    </Link>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                        Social Media Marketing Projects
                    </h1>
                    <p className='text-xl text-pink-100'>
                        Building engaged communities and driving brand growth through social media
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
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
                                {/* Brand Header */}
                                <div className={`bg-linear-to-r ${client.color} p-8 text-white`}>
                                    <div className='mb-4'>
                                        <h3 className='text-2xl font-bold mb-1'>{client.name}</h3>
                                        <a 
                                            href={client.instagramUrl} 
                                            target='_blank' 
                                            rel='noopener noreferrer'
                                            className='text-white/90 hover:text-white transition-colors'
                                        >
                                            {client.handle}
                                        </a>
                                    </div>
                                    <span className='inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold'>
                                        {client.niche}
                                    </span>
                                </div>

                                {/* Stats Grid */}
                                <div className='grid grid-cols-4 gap-4 p-6 bg-gray-50'>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconUsers className='w-5 h-5 text-blue-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{client.stats.followers}</div>
                                        <div className='text-xs text-gray-600'>Followers</div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconHeart className='w-5 h-5 text-pink-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{client.stats.engagement}</div>
                                        <div className='text-xs text-gray-600'>Engagement</div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconEye className='w-5 h-5 text-purple-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{client.stats.reach}</div>
                                        <div className='text-xs text-gray-600'>Reach</div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconPhoto className='w-5 h-5 text-green-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{client.stats.posts}</div>
                                        <div className='text-xs text-gray-600'>Posts</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    <p className='text-gray-600 mb-6 leading-relaxed'>
                                        {client.description}
                                    </p>

                                    {/* Results */}
                                    <div className='mb-6'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Results Achieved</h4>
                                        <ul className='space-y-2'>
                                            {client.results.map((result, idx) => (
                                                <li key={idx} className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <div className='w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0' />
                                                    <span>{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Services */}
                                    <div className='mb-6 pt-6 border-t border-gray-200'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Services Provided</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {client.services.map((service, idx) => (
                                                <span key={idx} className='bg-pink-50 text-pink-700 px-3 py-1 rounded-lg text-xs font-medium'>
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    {client.testimonial && (
                                        <div className='pt-6 border-t border-gray-200 bg-gray-50 -mx-6 -mb-6 px-6 py-4'>
                                            <p className='text-sm italic text-gray-700'>"{client.testimonial}"</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-pink-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Ready to Grow Your Social Presence?
                        </h2>
                        <p className='text-xl text-pink-100 mb-8'>
                            Let's build an engaged community around your brand on social media.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
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