"use client";

import React from 'react'
import { motion } from 'motion/react'
import {
  IconSearch,
  IconMapPin,
  IconBrandGoogle,
  IconBrandInstagram,
  IconTargetArrow,
  IconClipboardList,
  IconPalette,
  IconCode,
  IconTestPipe,
  IconRocket
} from '@tabler/icons-react'

function WebDevSection() {
  const digitalServices = [
    {
      icon: IconSearch,
      title: 'Local SEO Services',
      description: 'Easy to dominate your local market with the best Search Engine Optimization (SEO) and Google My Business Optimization.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/seo'
    },
    {
      icon: IconMapPin,
      title: 'Social Media Marketing (SMM)',
      description: 'Beautifully handle every social media platform, like Facebook, Instagram, LinkedIn, and other Media & Advertising Services, with targeted content.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/digital-marketing/google-business-profile-optimization'
    },
    {
      icon: IconBrandGoogle,
      title: 'Google Ads/PPC Advertising',
      description: 'Use high-intent keywords targeting the right audience and invest in ROI-based ad spend.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      link: '/digital-marketing/google-ads-management'
    },
    {
      icon: IconBrandInstagram,
      title: 'Content Marketing',
      description: 'Build a stronger impression through strategic content and keyword implementation.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      link: '/social-media-marketing'
    },
    {
      icon: IconTargetArrow,
      title: 'Brand & Creative Services',
      description: 'Design creative responses with authenticity and bring publicity to clients.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '/digital-marketing/lead-generation-services'
    },
    {
      icon: IconSearch,
      title: 'Email Marketing',
      description: 'Prepare productive emails and send to the required audience as required for a client’s demands.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/'
    },
    {
      icon: IconMapPin,
      title: 'Lead Generation Service',
      description: 'Better traffic with the right tunnels leading to generate leads online.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/'
    }
  ];

  const processSteps = [
    {
      step: '01',
      icon: IconClipboardList,
      title: 'Strategy',
      description: 'Analyze your business and create a custom blueprint.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      step: '02',
      icon: IconPalette,
      title: 'Design and Prototyping',
      description: 'Creative design with the best UI/UX addition to reflect your brand’s identity.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      step: '03',
      icon: IconCode,
      title: 'Development & Integration',
      description: 'Write the right, clean, and scalable code to integrate CRM tools and necessary APIs.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      step: '04',
      icon: IconTestPipe,
      title: 'Testing & Optimization',
      description: ' Continuous QA testing to boost integrity, performance, and speed across devices.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      step: '05',
      icon: IconRocket,
      title: 'Deployment & Growth',
      description: 'Launch your site and initiate all the basics to advanced sessions for a better marketing push.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>

        {/* Digital Marketing Services */}
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
            Digital Marketing
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Complete Digital Marketing Company
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Beyond the website development, we work as a unit as a trusted and fully-fledged Digital Marketing Company in India, strongly generating the best leads to your business.
          </p>
        </motion.div>

        {/* Digital Marketing Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24'
        >
          {digitalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={index}
                href={service.link}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group'
              >
                <div className='bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden'>
                  <div className={`${service.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${service.color} w-7 h-7`} stroke={1.5} />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed text-sm'>
                    {service.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
        <p className='text-lg text-gray-600 mb-6'>
           Start generating high-quality leads today with Digital Solution 360 in India.
          </p>
        {/* Development Process */}
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
            Our Process
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Our Website Development Process
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Our experts utilize the best ways to build precision and launch your website with the right impact. That’s why we follow the 5-step process, ensuring your project stays on track with achieving expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='relative'
              >
                <div className={`bg-white border-2 ${step.borderColor} rounded-2xl p-6 h-full text-center shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  {/* Step Number */}
                  <div className={`${step.bgColor} ${step.color} text-sm font-bold px-3 py-1 rounded-full inline-block mb-4`}>
                    Step {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`${step.color} w-8 h-8`} stroke={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10'>
                    <div className='w-6 h-6 text-gray-300'>
                      <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                        <path d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center mt-16'
        >
          <p className='text-lg text-gray-600 mb-6'>
            Get the best Online Business Growth Services – seal your deal with Digital Solution 360!
          </p>
          <a
            href='/contact-us'
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevSection