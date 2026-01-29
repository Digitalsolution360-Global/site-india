"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ClientSection from '@/components/sections/clients'
import {
    IconDeviceDesktop,
    IconUsers,
    IconChartBar,
    IconBell,
    IconDatabase,
    IconPlugConnected,
    IconCheck,
    IconPlus,
    IconMinus,
    IconArrowRight,
    IconCode,
    IconSettings,
    IconShieldCheck
} from '@tabler/icons-react'

export default function CRMDevelopmentServicePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const features = [
        {
            icon: IconUsers,
            title: 'Contact Management',
            description: 'Centralize customer data and manage all interactions from a single platform.',
            color: 'indigo'
        },
        {
            icon: IconChartBar,
            title: 'Sales Pipeline Tracking',
            description: 'Visualize your sales process and track deals through every stage.',
            color: 'blue'
        },
        {
            icon: IconBell,
            title: 'Marketing Automation',
            description: 'Automate email campaigns, lead nurturing, and customer communications.',
            color: 'purple'
        },
        {
            icon: IconDatabase,
            title: 'Custom Reporting',
            description: 'Generate detailed reports and insights about your business performance.',
            color: 'green'
        },
        {
            icon: IconPlugConnected,
            title: 'Third-Party Integrations',
            description: 'Connect with your existing tools and platforms seamlessly.',
            color: 'orange'
        },
        {
            icon: IconShieldCheck,
            title: 'Security & Support',
            description: 'Enterprise-grade security with ongoing maintenance and support.',
            color: 'red'
        }
    ];

    const crmTypes = [
        'Custom CRM Development',
        'Salesforce Implementation',
        'HubSpot Setup & Customization',
        'Zoho CRM Configuration',
        'CRM Migration Services',
        'CRM Training & Support'
    ];

    const benefits = [
        'Improved customer relationships',
        'Increased sales productivity',
        'Better data organization',
        'Enhanced team collaboration',
        'Automated workflows',
        'Data-driven decision making',
        'Higher customer retention',
        'Scalable business processes'
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'Understand your business processes, challenges, and requirements.'
        },
        {
            step: '02',
            title: 'Design',
            description: 'Create custom workflows and design user interfaces.'
        },
        {
            step: '03',
            title: 'Development',
            description: 'Build and configure your CRM system with custom features.'
        },
        {
            step: '04',
            title: 'Training & Launch',
            description: 'Train your team and deploy the system with ongoing support.'
        }
    ];

    const faqs = [
        {
            question: "What is a CRM and why do I need one?",
            answer: "A CRM (Customer Relationship Management) system helps you manage customer interactions, sales processes, and business relationships. It centralizes customer data, automates tasks, improves communication, and provides insights that help grow your business. If you're managing leads, customers, or sales processes, a CRM is essential for efficiency and growth."
        },
        {
            question: "Should I build a custom CRM or use an existing platform?",
            answer: "It depends on your needs. Existing platforms like Salesforce or HubSpot are great for standard requirements and faster deployment. Custom CRM is ideal when you need unique workflows, specific integrations, or specialized features. We'll assess your needs and recommend the best solution – whether custom development, platform implementation, or a hybrid approach."
        },
        {
            question: "How long does CRM implementation take?",
            answer: "Timeline varies based on complexity. Simple platform setup takes 2-4 weeks, while custom CRM development can take 2-6 months. Implementation includes discovery, design, development, data migration, integration, testing, and training. We provide a detailed timeline after understanding your requirements."
        },
        {
            question: "Can you integrate CRM with our existing tools?",
            answer: "Yes! We specialize in integrating CRMs with various tools including email platforms, accounting software, marketing automation, e-commerce systems, phone systems, and more. We can create custom integrations or use pre-built connectors depending on your tech stack."
        },
        {
            question: "What if we need changes after the CRM is built?",
            answer: "We provide ongoing support and maintenance packages that include updates, modifications, and feature additions. CRMs evolve with your business, and we're committed to helping you adapt. We also offer training to help your team make simple changes independently."
        },
        {
            question: "How do you ensure our data is secure?",
            answer: "We implement enterprise-grade security including data encryption, secure authentication, role-based access control, regular backups, and compliance with data protection regulations. For cloud-based systems, we use secure hosting with SSL certificates and regular security audits."
        }
    ];

    const colorMap = {
        indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-indigo-900/95 via-indigo-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80'
                        alt='CRM Development'
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
                            <IconDeviceDesktop className='w-4 h-4' />
                            CRM Development
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Custom CRM Solutions to Streamline Your Business
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Build stronger customer relationships and boost productivity with powerful CRM systems tailored to your unique business needs.
                        </p>

                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link
                                href='/contact-us'
                                className='bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                            >
                                Schedule a Demo
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link
                                href='/case-studies'
                                className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300'
                            >
                                View Case Studies
                            </Link>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {[
                                { icon: IconCode, label: 'Custom Development' },
                                { icon: IconSettings, label: 'Platform Configuration' },
                                { icon: IconPlugConnected, label: 'Seamless Integration' }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 flex items-center gap-3'
                                    >
                                        <Icon className='w-6 h-6 text-white' />
                                        <span className='text-white font-medium'>{item.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
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
                            CRM Features & Capabilities
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Powerful features designed to transform how you manage customer relationships.
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

            {/* CRM Types & Benefits */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
                                alt='CRM Dashboard'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                Our CRM Services
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                Whether you need a custom solution or help with existing platforms, we've got you covered.
                            </p>
                            <div className='space-y-3'>
                                {crmTypes.map((type, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className='flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all'
                                    >
                                        <div className='w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center shrink-0'>
                                            <IconCheck className='w-4 h-4 text-indigo-600' stroke={2} />
                                        </div>
                                        <span className='text-gray-700 font-medium'>{type}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                Benefits of CRM
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                Transform your business operations with a powerful CRM system.
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
                                alt='CRM Benefits'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process */}
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
                            Our CRM Implementation Process
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            A structured approach to delivering CRM solutions that work.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
                                    <div className='text-5xl font-bold text-indigo-500 mb-4'>{item.step}</div>
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
            <section className='py-10 px-4 md:px-8 lg:px-16'>
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
                            Everything you need to know about our CRM development services
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
                                    className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                                >
                                    <span className='text-lg font-semibold text-gray-900 pr-8'>{faq.question}</span>
                                    {openFaq === index ? (
                                        <IconMinus className='w-5 h-5 text-indigo-600 shrink-0' />
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
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-indigo-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Transform Your Customer Management?
                        </h2>
                        <p className='text-xl text-indigo-100 mb-8'>
                            Let's build a CRM solution that perfectly fits your business needs.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
