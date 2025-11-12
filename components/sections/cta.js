"use client";

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { IconRocket, IconCheck } from '@tabler/icons-react'

function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country_code: '+91',
          company: null,
          website: null,
          services: null,
          message: null,
          source: 'cta_section',
          page_url: window.location.pathname
        })
      });

      // Send email notification using FormSubmit
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.name);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('phone', formData.phone);
      formSubmitData.append('_subject', 'New Lead - Digital Solution 360');
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('_template', 'table');

      await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        body: formSubmitData
      });

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600 relative overflow-hidden'>
      {/* Decorative Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute -top-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className='absolute -bottom-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl'
        />
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='text-white space-y-6'
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center'
            >
              <IconRocket className='w-8 h-8 text-white' stroke={1.5} />
            </motion.div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
              Ready to Transform Your Business?
            </h2>

            {/* Description */}
            <p className='text-lg md:text-xl text-blue-100 leading-relaxed'>
              Let's discuss how we can help you achieve your digital goals. Get a free consultation and discover the perfect solution for your business.
            </p>

            {/* Benefits List */}
            <div className='space-y-4 pt-4'>
              {[
                'Free consultation with our experts',
                'Custom solutions tailored to your needs',
                'Transparent pricing with no hidden costs',
                'Dedicated support throughout your journey'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-start gap-3'
                >
                  <div className='w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0 mt-0.5'>
                    <IconCheck className='w-4 h-4 text-white' stroke={2.5} />
                  </div>
                  <span className='text-blue-50'>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className='bg-white rounded-3xl p-8 md:p-10 shadow-2xl'>
              {!isSuccess ? (
                <>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                    Get Started Today
                  </h3>
                  <p className='text-gray-600 mb-8'>
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Name Field */}
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
                        className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900'
                        placeholder='Enter your full name'
                      />
                    </div>

                    {/* Email Field */}
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
                        className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900'
                        placeholder='your.email@example.com'
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern='[0-9]{10,15}'
                        className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900'
                        placeholder='+91 XXXXX XXXXX'
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                    </button>

                    {/* Privacy Note */}
                    <p className='text-xs text-gray-500 text-center'>
                      By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className='text-center py-8'
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'
                  >
                    <IconCheck className='w-10 h-10 text-green-600' stroke={2.5} />
                  </motion.div>

                  <h3 className='text-3xl font-bold text-gray-900 mb-3'>
                    Thank You!
                  </h3>
                  <p className='text-gray-600 text-lg mb-2'>
                    Your request has been received successfully.
                  </p>
                  <p className='text-gray-500'>
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection