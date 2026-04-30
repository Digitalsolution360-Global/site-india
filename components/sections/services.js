"use client";

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  IconBuildingStore,
  IconDeviceLaptop,
  IconBrandWordpress,
  IconCode,
  IconFileDescription,
  IconRefresh
} from '@tabler/icons-react'

function ServiceSection() {
  const services = [
    {
      icon: IconDeviceLaptop,
      title: 'Custom Web Development Services',
      description: 'We design custom-made and high-speed websites, including your business’s niche, with the use of modern frameworks and the latest security.',
      link: '/website-development',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: IconBuildingStore,
      title: 'E-commerce Website Development',
      description: 'Upscale your online store with great features, super-fast loading speed, smooth operations, and enhanced security for high-volume transactions.',
      link: '/website-development/ecommerce-website-development',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: IconBrandWordpress,
      title: 'CMS Development (WordPress, Laravel)',
      description: 'Manage the entire content with the intuitive CMS platforms and optimize everything to boost web vitals and security protocols.',
      link: '/website-development/wordpress-website-development',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: IconCode,
      title: 'UI/UX Design & Brand Strategy',
      description: 'Smooth “Human-Centered Design” to create an engaged interface with our audience to lower the bounce rates and build better engagement.',
      link: '/website-development/custom-website-development',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: IconFileDescription,
      title: 'CRM Development & Automation Solutions',
      description: 'Integrate smart CRM systems and automation to build a strong impression for sales and give genuine leads to clients efficiently.',
      link: '/website-development/landing-page-development',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: IconRefresh,
      title: 'Website Redesign Services',
      description: 'Redesign existing websites to improve performance, modernize design, enhance user experience, and boost search engine rankings.',
      link: '/website-development/website-redesign-services',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
          >
            Our Services
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Our Website Development Services
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            As a reputable agency, Digital Solution 360 understands how to bridge the gaps between aesthetic brilliance and technical precision. That’s how our Website Development Company focuses on different factors of building your digital presence, starting with speed, security, and scalability. 
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className='group'
              >
                <Link href={service.link}>
                  <div className='bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden'>
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    {/* Icon Container */}
                    <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <Icon className={`${service.iconColor} w-8 h-8`} stroke={1.5} />
                    </div>

                    {/* Content */}
                    <div className='relative z-10'>
                      <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                        {service.title}
                      </h3>

                      <p className='text-gray-600 mb-6 leading-relaxed'>
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className='flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300'>
                        Learn More
                        <svg
                          className='w-5 h-5 ml-2'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 8l4 4m0 0l-4 4m4-4H3'
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-linear-to-br ${service.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center mt-16'
        >
          <p className='text-lg text-gray-600 mb-6'>
           Ready to build a future-proof website? Get a Free Technical Audit Today!
          </p>
          <Link
            href='/contact-us'
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceSection