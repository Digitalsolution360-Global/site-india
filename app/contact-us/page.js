"use client";

import React, { useState } from 'react'
import { motion } from 'motion/react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconPhone,
    IconMail,
    IconMapPin,
    IconSend,
    IconBuilding,
    IconClock,
    IconBrandWhatsapp
} from '@tabler/icons-react'

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formsubmit.co/ajax/info@digitalsolution360.in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const offices = [
        {
            type: 'Head Office',
            city: 'Dhanbad',
            address: '374, Shri Ram Plaza, Bank More, Dhanbad, Jharkhand, 826001',
            icon: IconBuilding
        },
        {
            type: 'Branch',
            city: 'Bangalore',
            address: 'SB-203, Near Anandapura, K.R.Puram, T.C.Palya, Bangalore-560036',
            icon: IconMapPin
        },
        {
            type: 'Branch',
            city: 'Noida',
            address: 'B-76, Basement, Noida Sec-2, Near Noida Sec-15 Metro Station',
            icon: IconMapPin
        }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                {/* Background Image */}
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80'
                        alt='Contact us'
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
                            className='inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            Contact Us
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl'>
                            Let's Start Your Growth Journey Together
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8'>
                            Have a project in mind or need expert advice? Our team is here to help you achieve your digital marketing goals.
                        </p>

                        <div className='flex flex-wrap gap-6'>
                            <a
                                href='tel:+919990556217'
                                className='flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300'
                            >
                                <IconPhone className='w-5 h-5' />
                                <span className='font-semibold'>+91 9990556217</span>
                            </a>
                            <a
                                href='mailto:info@digitalsolution360.in'
                                className='flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300'
                            >
                                <IconMail className='w-5 h-5' />
                                <span className='font-semibold'>info@digitalsolution360.in</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                                Send Us a Message
                            </h2>
                            <p className='text-gray-600 mb-8'>
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Full Name *
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                        placeholder='John Doe'
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                                            Email Address *
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                            placeholder='john@example.com'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            type='tel'
                                            id='phone'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                            placeholder='+91 98765 43210'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='subject' className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Subject *
                                    </label>
                                    <input
                                        type='text'
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                        placeholder='What can we help you with?'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Message *
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none'
                                        placeholder='Tell us more about your project...'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <IconSend className='w-5 h-5' />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg'
                                    >
                                        Thank you! We'll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg'
                                    >
                                        Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='space-y-6'
                        >
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                                Get in Touch
                            </h2>

                            {/* Contact Cards */}
                            <div className='space-y-4'>
                                <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-start gap-4'>
                                    <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                                        <IconPhone className='w-6 h-6 text-blue-600' stroke={1.5} />
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-gray-900 mb-1'>Phone</h3>
                                        <a href='tel:+919990556217' className='text-blue-600 hover:text-blue-700 font-medium'>
                                            +91 9990556217
                                        </a>
                                    </div>
                                </div>

                                <div className='bg-orange-50 border border-orange-200 rounded-lg p-6 flex items-start gap-4'>
                                    <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0'>
                                        <IconMail className='w-6 h-6 text-orange-600' stroke={1.5} />
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-gray-900 mb-1'>Email</h3>
                                        <a href='mailto:info@digitalsolution360.in' className='text-orange-600 hover:text-orange-700 font-medium break-all'>
                                            info@digitalsolution360.in
                                        </a>
                                    </div>
                                </div>

                                <div className='bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-4'>
                                    <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0'>
                                        <IconBrandWhatsapp className='w-6 h-6 text-green-600' stroke={1.5} />
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-gray-900 mb-1'>WhatsApp</h3>
                                        <a href='https://wa.me/919990556217' target='_blank' rel='noopener noreferrer' className='text-green-600 hover:text-green-700 font-medium'>
                                            Chat with us on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className='bg-purple-50 border border-purple-200 rounded-lg p-6 flex items-start gap-4'>
                                    <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0'>
                                        <IconClock className='w-6 h-6 text-purple-600' stroke={1.5} />
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-gray-900 mb-1'>Business Hours</h3>
                                        <p className='text-gray-600'>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                        <p className='text-gray-600'>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Our Office Locations
                        </h2>
                        <p className='text-lg text-gray-600'>
                            Visit us at any of our offices across India
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                        {offices.map((office, index) => {
                            const Icon = office.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                                >
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                                            <Icon className='w-5 h-5 text-blue-600' stroke={1.5} />
                                        </div>
                                        <div>
                                            <div className='text-sm text-gray-600'>{office.type}</div>
                                            <div className='text-xl font-bold text-gray-900'>{office.city}</div>
                                        </div>
                                    </div>
                                    <p className='text-gray-600 leading-relaxed'>{office.address}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Google Maps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='rounded-2xl overflow-hidden shadow-xl border border-gray-200'
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29209.88710821313!2d86.375184!3d23.774613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a3a95555556d%3A0x9ef46a5b1044df98!2sDigitalsolution360%20%7C%20Web%20Designing%20%7C%20Digital%20Marketing%20Services!5e0!3m2!1sen!2sin!4v1769094537277!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Digitalsolution360 Office Location"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Ready to Grow Your Business?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Let's discuss how we can help you achieve your digital marketing goals.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <a
                                href='tel:+919990556217'
                                className='bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2'
                            >
                                <IconPhone className='w-5 h-5' />
                                Call Us Now
                            </a>
                            <a
                                href='https://wa.me/919990556217'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2'
                            >
                                <IconBrandWhatsapp className='w-5 h-5' />
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}