"use client";

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconArrowUp
} from '@tabler/icons-react'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaWhatsapp
} from 'react-icons/fa'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const services = [
        { name: 'Digital Marketing', href: '/digital-marketing' },
        { name: 'Website Development', href: '/web-app-development' },
        { name: 'SEO Services', href: '/seo' },
        { name: 'Brand & Creative', href: '/brand-creative' },
        { name: 'Social Media Marketing', href: '/media-advertising' },
        { name: 'Automation Solutions', href: '/automation-solution' },
    ];

    const quickLinks = [
        { name: 'About Us', href: '/about-us' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/case-studies' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact-us' },
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: 'https://www.facebook.com/digitalsolution360india', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/digital-solution-360-global', label: 'LinkedIn', color: 'hover:text-blue-700' },
        { icon: FaInstagram, href: 'https://www.instagram.com/digitalsolution.360/', label: 'Instagram', color: 'hover:text-pink-600' },
        { icon: FaYoutube, href: 'https://www.youtube.com/@digitalsolution360', label: 'YouTube', color: 'hover:text-red-600' },
    ];

    return (
        <footer className='bg-gray-900 text-gray-300 relative'>
            {/* Main Footer Content */}
            <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/">
                            <img src="/logo.png" alt="Digital Solution 360 Logo" className='w-48 mb-6 brightness-0 invert' />
                        </Link>
                        <p className='text-gray-400 mb-6 leading-relaxed'>
                            Transforming businesses through innovative digital solutions. Your trusted partner in achieving online excellence.
                        </p>

                        {/* Social Links */}
                        <div className='flex gap-3'>
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                                        aria-label={social.label}
                                    >
                                        <Icon className='w-5 h-5' stroke={1.5} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className='text-white text-xl font-bold mb-6'>Our Services</h3>
                        <ul className='space-y-3'>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className='text-gray-400 hover:text-blue-500 transition-colors duration-300 inline-flex items-center group'
                                    >
                                        <span className='w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2'></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className='text-white text-xl font-bold mb-6'>Quick Links</h3>
                        <ul className='space-y-3'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className='text-gray-400 hover:text-blue-500 transition-colors duration-300 inline-flex items-center group'
                                    >
                                        <span className='w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2'></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className='text-white text-xl font-bold mb-6'>Get In Touch</h3>
                        <ul className='space-y-4'>
                            <li className='flex items-start gap-3'>
                                <IconMapPin className='w-5 h-5 text-blue-500 shrink-0 mt-1' stroke={1.5} />
                                <span className='text-gray-400'>
                                    123 Business Street, Digital Hub,<br />
                                    New Delhi, India 110001
                                </span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IconPhone className='w-5 h-5 text-blue-500 shrink-0' stroke={1.5} />
                                <a href='tel:+919990556217' className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                    +91 99905 56217
                                </a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IconMail className='w-5 h-5 text-blue-500 shrink-0' stroke={1.5} />
                                <a href='mailto:info@digitalsolution360.com' className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                    info@digitalsolution360.com
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        {/* <div className='mt-6'>
                            <h4 className='text-white font-semibold mb-3'>Subscribe to Newsletter</h4>
                            <form className='flex gap-2'>
                                <input
                                    type='email'
                                    placeholder='Your email'
                                    className='flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300'
                                />
                                <button
                                    type='submit'
                                    className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold'
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div> */}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-gray-800'>
                <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-gray-400 text-sm text-center md:text-left'>
                            © {currentYear} Digital Solution 360. All rights reserved.
                        </p>
                        <div className='flex gap-6 text-sm'>
                            <Link href='/privacy-policy' className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                Privacy Policy
                            </Link>
                            <Link href='/terms-conditions' className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                Terms & Conditions
                            </Link>
                            <Link href='/sitemap' className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {/* <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300 z-40'
                aria-label='Scroll to top'
            >
                <IconArrowUp className='w-6 h-6' stroke={2} />
            </motion.button> */}

            {/* WhatsApp Floating Chat Button */}
            <div className="hidden md:block fixed bottom-4 right-4 z-100 text-white">
                <button
                    onClick={() => window.open("https://wa.me/919990556217", "_blank")}
                    className="bg-green-500 p-3 rounded-full shadow-lg animate-bounce"
                >
                    <FaWhatsapp size={40} />
                </button>
            </div>
        </footer>
    )
}

export default Footer