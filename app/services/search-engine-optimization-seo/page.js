"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ClientSection from '@/components/sections/clients'
import {
    IconSeo,
    IconChartBar,
    IconRocket,
    IconSearch,
    IconLink,
    IconFileText,
    IconDeviceDesktop,
    IconCheck,
    IconPlus,
    IconMinus,
    IconArrowRight,
    IconTarget,
    IconTrendingUp,
    IconShieldCheck,
    IconWorld,
    IconMapPin,
    IconShoppingCart,
    IconBriefcase,
    IconStar,
    IconUsers,
    IconBrandFacebook,
    IconWriting,
    IconExternalLink
} from '@tabler/icons-react'

export default function SEOServicePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const benefits = [
        {
            icon: IconSearch,
            title: 'Smart Keyword Integration',
            description: 'SEO experts and content writers work together to boost visibility and traffic through strategic keyword placement.'
        },
        {
            icon: IconUsers,
            title: 'Improved User Experience',
            description: 'Technical fixes and UX optimization to create better experiences for your visitors.'
        },
        {
            icon: IconTarget,
            title: 'Deep Research',
            description: 'Engage the right customers and accelerate brand growth with data-driven insights.'
        },
        {
            icon: IconTrendingUp,
            title: 'Long-term Results',
            description: 'Measurable results across a comprehensive service stack that compound over time.'
        },
        {
            icon: IconShieldCheck,
            title: 'Cost-effective Marketing',
            description: 'Build trustworthiness and sustainable growth with affordable, quality SEO services.'
        }
    ];

    const seoServices = [
        {
            icon: IconWorld,
            title: 'Global SEO',
            subtitle: 'Global SEO Services',
            description: 'Expand your business globally as we get you high search engine rankings and quality leads with our global SEO services.'
        },
        {
            icon: IconMapPin,
            title: 'National SEO',
            subtitle: 'National SEO Services',
            description: 'Avail of our National SEO services to bring clients for your business from different corners of the country.'
        },
        {
            icon: IconTarget,
            title: 'Local SEO',
            subtitle: 'Local SEO Services',
            description: 'Team up with us to make your website local SEO compliant and connect with your local audience with our result-driven local SEO services.'
        },
        {
            icon: IconShoppingCart,
            title: 'Ecommerce SEO',
            subtitle: 'Ecommerce SEO Services',
            description: 'Guarantee your ecommerce business\'s success with our modern Ecommerce SEO strategies.'
        },
        {
            icon: IconBriefcase,
            title: 'SEO for Small Business',
            subtitle: 'SEO Services for Small Business',
            description: 'Collaborate with us to step into the business world and make a strong impression with our intricately designed SEO services for small businesses.'
        },
        {
            icon: IconStar,
            title: 'Professional SEO',
            subtitle: 'Professional SEO Services',
            description: 'Strengthen your digital presence and get found by millions of customers who are ready to convert with our professional SEO services.'
        }
    ];

    const onPageElements = [
        {
            icon: IconWriting,
            title: 'Content Creation',
            description: 'Authentic content that engages your audience.'
        },
        {
            icon: IconSearch,
            title: 'Appropriate Keywords',
            description: 'Research-driven, relevant keywords for visibility.'
        },
        {
            icon: IconFileText,
            title: 'Title/Meta/Alt Tags',
            description: 'Precise implementation by experts.'
        },
        {
            icon: IconExternalLink,
            title: 'URL Linking',
            description: 'Meaningful internal linking to guide users and crawlers.'
        }
    ];

    const offPageElements = [
        {
            icon: IconLink,
            title: 'Backlink Building',
            description: 'Strategic, quality-first link acquisition led by experts.'
        },
        {
            icon: IconBrandFacebook,
            title: 'Social Media Marketing',
            description: 'Brand promotion with relevant creatives to amplify visibility and engagement.'
        }
    ];

    const workProcess = [
        {
            step: '01',
            title: 'Website Audit',
            description: 'Before implementing the best SEO practices, auditing identifies on-page/off-page issues, broken links, and more.'
        },
        {
            step: '02',
            title: 'Business Analysis',
            description: 'Understand your process, KPIs, goals, and conversion paths to align expectations.'
        },
        {
            step: '03',
            title: 'Keyword Research & Analysis',
            description: 'Extensive research to target terms that drive relevant traffic.'
        },
        {
            step: '04',
            title: 'Competitor Keyword Analysis',
            description: 'Compare ranking keywords and craft superior tactics.'
        },
        {
            step: '05',
            title: 'On-Page Optimization',
            description: 'Content, UX, meta/alt/schema tags, and media optimization.'
        },
        {
            step: '06',
            title: 'Keyword & URL Optimization',
            description: 'Ensure crawlers discover relevant pages with clean URLs.'
        },
        {
            step: '07',
            title: 'Content Creation',
            description: 'Readable, engaging content that powers growth.'
        },
        {
            step: '08',
            title: 'Link Building',
            description: 'Quality-led backlinks that actually move the needle.'
        },
        {
            step: '09',
            title: 'Reporting & Analysis',
            description: 'Monthly visibility, analytics, conversion, and revenue reports.'
        }
    ];

    const localSEOBenefits = [
        'Rank higher in local search results and map packs',
        'Capture regional shoppers who prefer nearby businesses',
        'Generate qualified, purchase-ready local leads'
    ];

    const faqs = [
        {
            question: "How long does it take to see SEO results?",
            answer: "SEO is a long-term strategy. You can typically start seeing initial improvements within 3-4 months, with significant results appearing after 6-12 months. The timeline depends on competition, current website status, and the strategies implemented."
        },
        {
            question: "What's the difference between on-page and off-page SEO?",
            answer: "On-page SEO involves optimizing elements on your website (content, meta tags, site structure), while off-page SEO focuses on external factors like backlinks, social signals, and brand mentions. Both are crucial for comprehensive SEO success."
        },
        {
            question: "Do you guarantee first-page rankings?",
            answer: "We don't guarantee specific rankings as search algorithms constantly change and are beyond anyone's control. However, we use proven white-hat strategies that have consistently delivered top rankings for our clients across various industries."
        },
        {
            question: "How do you measure SEO success?",
            answer: "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, bounce rates, backlink quality, domain authority, and ultimately ROI. We provide detailed monthly reports showing progress across all these metrics."
        },
        {
            question: "Will SEO work for my industry?",
            answer: "Yes! SEO is effective for virtually every industry. We customize our strategies based on your specific industry, target audience, and competition. Whether you're B2B, B2C, local, or e-commerce, we have proven strategies that work."
        },
        {
            question: "What's your approach to link building?",
            answer: "We focus on white-hat link building through quality content creation, digital PR, guest posting on authoritative sites, broken link building, and relationship building. We never use black-hat tactics that could harm your site."
        }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80'
                        alt='SEO Services'
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
                            <IconSeo className='w-4 h-4' />
                            Result-Driven SEO Services
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Dominate Search Results with Expert SEO Services
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            DigitalSolution 360 is a leading SEO services company providing cost-effective, comprehensive solutions. We offer affordable SEO services without compromising quality.
                        </p>

                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
                            >
                                Get Free SEO Audit
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <Link
                                href='/case-studies'
                                className='bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300'
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
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
                            Benefits of SEO for Your Business with DigitalSolution 360
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            SEO isn't instant—it requires time and consistent effort for compounding gains.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                                >
                                    <div className='w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center mb-4'>
                                        <Icon className='w-6 h-6 text-blue-600' stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{benefit.title}</h3>
                                    <p className='text-gray-600'>{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our SEO Services */}
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
                            Our SEO Services
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Comprehensive SEO solutions tailored to your business goals and industry requirements.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {seoServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                                >
                                    <div className='w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center mb-4'>
                                        <Icon className='w-6 h-6 text-blue-600' stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{service.title}</h3>
                                    <h4 className='text-sm font-semibold text-blue-600 mb-3'>{service.subtitle}</h4>
                                    <p className='text-gray-600'>{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* On-Page SEO Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                                On-Page SEO Elements
                            </h2>
                            <p className='text-lg text-gray-600 mb-6'>
                                Optimizing every element on your website for maximum search visibility.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
                                alt='On-Page SEO'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {onPageElements.map((element, index) => {
                            const Icon = element.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center'
                                >
                                    <div className='w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                                        <Icon className='w-7 h-7 text-blue-600' stroke={1.5} />
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-900 mb-2'>{element.title}</h3>
                                    <p className='text-gray-600 text-sm'>{element.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Off-Page SEO Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
                                alt='Off-Page SEO'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='order-1 lg:order-2'
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                                Off-Page SEO Elements
                            </h2>
                            <p className='text-lg text-gray-600 mb-6'>
                                Building your authority and reputation across the web.
                            </p>
                        </motion.div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                        {offPageElements.map((element, index) => {
                            const Icon = element.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300'
                                >
                                    <div className='w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center mb-4'>
                                        <Icon className='w-7 h-7 text-blue-600' stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{element.title}</h3>
                                    <p className='text-gray-600'>{element.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Work Process */}
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
                            Our SEO Work Process
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            A proven methodology that consistently delivers results for our clients.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {workProcess.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                <div className='text-4xl font-bold text-blue-600 mb-4'>{item.step}</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                                <p className='text-gray-600'>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Local SEO Section */}
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
                            Why Local SEO?
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Local SEO helps your business connect with customers in your area.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {localSEOBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                <div className='flex items-start gap-3'>
                                    <div className='w-6 h-6 border border-gray-200 rounded-full flex items-center justify-center shrink-0 mt-1'>
                                        <IconCheck className='w-4 h-4 text-blue-600' stroke={2} />
                                    </div>
                                    <p className='text-gray-700'>{benefit}</p>
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
                            Everything you need to know about our SEO services
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
                                        <IconMinus className='w-5 h-5 text-blue-600 shrink-0' />
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
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Boost Your Rankings?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Get a free SEO audit and discover how we can help you dominate search results.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Your Free Audit
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
