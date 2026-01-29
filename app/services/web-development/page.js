"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ClientSection from '@/components/sections/clients'
import {
    IconCode,
    IconDeviceDesktop,
    IconShoppingCart,
    IconPalette,
    IconRocket,
    IconShieldCheck,
    IconCheck,
    IconPlus,
    IconMinus,
    IconArrowRight,
    IconBrandReact,
    IconBrandWordpress,
    IconBuildingStore
} from '@tabler/icons-react'

export default function WebDevelopmentServicePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const features = [
        {
            icon: IconDeviceDesktop,
            title: 'Website Planning',
            description: 'Effective end-to-end structure planning before development.',
            color: 'green'
        },
        {
            icon: IconPalette,
            title: 'UI/UX Design',
            description: 'Modern, user-friendly interface and experience design.',
            color: 'blue'
        },
        {
            icon: IconCode,
            title: 'Frontend Development',
            description: 'Pixel-perfect coding with fast and responsive UI.',
            color: 'purple'
        },
        {
            icon: IconRocket,
            title: 'Backend Development',
            description: 'Secure and scalable server-side development.',
            color: 'pink'
        },
        {
            icon: IconDeviceDesktop,
            title: 'Responsive Design',
            description: 'Perfect fit across all screen sizes and devices.',
            color: 'orange'
        },
        {
            icon: IconShieldCheck,
            title: 'SEO-Friendly Development',
            description: 'Clean code + fast loading = Google-friendly websites.',
            color: 'red'
        }
    ];

    const technologies = [
        { icon: IconBrandReact, name: 'React/Next.js', color: 'text-blue-600' },
        { icon: IconBrandWordpress, name: 'WordPress', color: 'text-blue-700' },
        { icon: IconBuildingStore, name: 'Shopify', color: 'text-green-600' },
        { icon: IconCode, name: 'Custom PHP', color: 'text-purple-600' }
    ];

    const benefits = [
        'Skilled developers with massive experience',
        'Modern tech usage and latest frameworks',
        'Affordable packages without compromising quality',
        'Transparent communication throughout',
        'SEO-optimized for better rankings',
        'Fast loading speeds and performance',
        'Scalable architecture for future growth',
        'Maintenance without the hassle'
    ];

    const process = [
        {
            step: '01',
            title: 'Requirement Discussion',
            description: 'You share your ideas. We listen and understand your vision.'
        },
        {
            step: '02',
            title: 'Planning & Wireframes',
            description: 'The blueprint gets ready with detailed structure planning.'
        },
        {
            step: '03',
            title: 'Design',
            description: 'Colors, layout, branding - all the visuals come to life.'
        },
        {
            step: '04',
            title: 'Development',
            description: 'The magic really takes place with clean, efficient code.'
        },
        {
            step: '05',
            title: 'Testing',
            description: 'We work out bugs, increase velocity, and perfect everything.'
        },
        {
            step: '06',
            title: 'Launch & Support',
            description: 'The site goes live. We maintain things in order and clean.'
        }
    ];

    const faqs = [
        {
            question: "How long does it take to build a website?",
            answer: "Timeline varies based on complexity. A basic website takes 4-6 weeks, while complex e-commerce sites or custom applications can take 8-12 weeks. We provide a detailed timeline during the project kickoff and keep you updated throughout development."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktops. We test thoroughly across different devices and browsers before launch."
        },
        {
            question: "Can I update the website content myself?",
            answer: "Yes! We build websites with user-friendly content management systems (CMS) like WordPress or custom admin panels. We also provide training and documentation so you can easily update content, images, and pages yourself."
        },
        {
            question: "Do you provide hosting and domain services?",
            answer: "Yes, we offer reliable hosting solutions and can help with domain registration and management. We also work with your existing hosting provider if preferred. Our hosting includes SSL certificates, regular backups, and security monitoring."
        },
        {
            question: "Will my website be SEO-friendly?",
            answer: "Yes! We build all websites with SEO best practices including clean code, fast loading speeds, proper heading structure, mobile optimization, schema markup, and SEO-friendly URLs. We can also provide ongoing SEO services to improve rankings."
        },
        {
            question: "What happens after the website launches?",
            answer: "We provide ongoing support and maintenance packages including security updates, backups, performance monitoring, content updates, and technical support. We're always available to help with any issues or improvements you need."
        }
    ];

    const colorMap = {
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-green-900/95 via-green-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80'
                        alt='Web Development'
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
                            <IconCode className='w-4 h-4' />
                            Web Development
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            India Web Development Companies - DigitalSolution360
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            From simple landing pages to complex e-commerce platforms, we create high-performance websites that engage visitors and convert them into customers. Affordable packages with modern tech and transparent communication.
                        </p>

                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link
                                href='/contact-us'
                                className='bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                            >
                                Start Your Project
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link
                                href='/case-studies/website'
                                className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300'
                            >
                                View Portfolio
                            </Link>
                        </div>

                        <div className='flex flex-wrap gap-4'>
                            {technologies.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 flex items-center gap-2'
                                    >
                                        <Icon className='w-5 h-5 text-white' />
                                        <span className='text-white font-medium'>{tech.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className='py-10 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            What DigitalSolution360 Does
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Consider us your online building contractors. We construct clean informational websites and large eCommerce stores with end-to-end solutions.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const colors = colorMap[feature.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`${colors.bg} border ${colors.border} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}
                                >
                                    <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4'>
                                        <Icon className={`w-6 h-6 ${colors.icon}`} stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
                                alt='Web Development'
                                className='rounded-2xl shadow-2xl'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                Why Choose Us for Web Development?
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                We combine cutting-edge technology with creative design to deliver websites that not only look amazing but also perform exceptionally. Skilled developers, modern tools, and affordable pricing.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className='flex items-center gap-3'
                                    >
                                        <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0'>
                                            <IconCheck className='w-4 h-4 text-green-600' stroke={2} />
                                        </div>
                                        <span className='text-gray-700'>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className='py-10 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            The Real Process of Web Development
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Creating a website is not only about coding. It's a full journey from idea to launch.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='relative'
                            >
                                <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full'>
                                    <div className='text-5xl font-bold text-green-500 mb-4'>{item.step}</div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                                    <p className='text-gray-600'>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <ClientSection />

            {/* FAQs */}
            <section className='py-10 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-4xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Frequently Asked Questions
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600'>
                            Everything you need to know about our web development services
                        </p>
                    </motion.div>

                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className='bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300'
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className='w-full px-6 py-5 flex items-center justify-between text-left hover: transition-colors'
                                >
                                    <span className='text-lg font-semibold text-gray-900 pr-8'>{faq.question}</span>
                                    {openFaq === index ? (
                                        <IconMinus className='w-5 h-5 text-green-600 shrink-0' />
                                    ) : (
                                        <IconPlus className='w-5 h-5 text-gray-400 shrink-0' />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden'
                                        >
                                            <div className='px-6 pb-5 text-gray-600 leading-relaxed'>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-green-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Build Your Dream Website?
                        </h2>
                        <p className='text-xl text-green-100 mb-8'>
                            Let's create a website that elevates your brand and drives business growth.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get a Free Quote
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
