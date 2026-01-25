"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { IconChevronLeft, IconUsers, IconHeart, IconEye, IconPhoto, IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react'
import data from './data.json'

export default function SocialMediaCaseStudiesPage() {
    const { projects } = data;

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
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                {/* Brand Header */}
                                <div className='bg-linear-to-r from-pink-500 to-purple-600 p-8 text-white'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <img
                                            src={project.logo}
                                            alt={project.brandName}
                                            className='w-16 h-16 rounded-full border-4 border-white object-cover'
                                        />
                                        <div>
                                            <h3 className='text-2xl font-bold'>{project.brandName}</h3>
                                            <p className='text-pink-100'>{project.username}</p>
                                        </div>
                                    </div>
                                    <span className='inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold'>
                                        {project.category}
                                    </span>
                                </div>

                                {/* Stats Grid */}
                                <div className='grid grid-cols-4 gap-4 p-6 bg-gray-50'>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconUsers className='w-5 h-5 text-blue-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{project.stats.followers}</div>
                                        <div className='text-xs text-gray-600'>Followers</div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconHeart className='w-5 h-5 text-pink-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{project.stats.engagement}</div>
                                        <div className='text-xs text-gray-600'>Engagement</div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconEye className='w-5 h-5 text-purple-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{project.stats.reach}</div>
                                        <div className='text-xs text-gray-600'>Reach</div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
                                            <IconPhoto className='w-5 h-5 text-green-600' />
                                        </div>
                                        <div className='text-lg font-bold text-gray-900'>{project.stats.posts}</div>
                                        <div className='text-xs text-gray-600'>Posts</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    {/* Platforms */}
                                    <div className='mb-6'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Platforms</h4>
                                        <div className='flex gap-2'>
                                            {project.platforms.map((platform, idx) => {
                                                const Icon = getPlatformIcon(platform);
                                                return (
                                                    <span key={idx} className='flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm'>
                                                        <Icon className='w-4 h-4' />
                                                        {platform}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className='mb-6'>
                                        <span className='text-sm text-gray-600'>Project Duration: <span className='font-semibold text-gray-900'>{project.duration}</span></span>
                                    </div>

                                    {/* Key Achievements */}
                                    <div className='mb-6'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Key Achievements</h4>
                                        <ul className='space-y-2'>
                                            {project.keyAchievements.map((achievement, idx) => (
                                                <li key={idx} className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <div className='w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0' />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Services */}
                                    <div className='pt-6 border-t border-gray-200'>
                                        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Services Provided</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {project.services.map((service, idx) => (
                                                <span key={idx} className='bg-pink-50 text-pink-700 px-3 py-1 rounded-lg text-xs font-medium'>
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
                            href='/contact'
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