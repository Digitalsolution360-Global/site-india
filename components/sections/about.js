"use client";

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  IconCode,
  IconSeo,
  IconUsers,
  IconTrophy,
  IconChartBar,
  IconTarget,
  IconBulb,
  IconDeviceMobile,
  IconCoin
} from '@tabler/icons-react'

function AboutSection() {
  const features = [
    {
      icon: IconCode,
      title: 'Data-Driven Strategies',
      description: 'Collect real-time analytics and predictive AI modeling in every campaign.'
    },
    {
      icon: IconSeo,
      title: 'Pan-India Expertise',
      description: 'Operational across different cities for  Tier-1 corporate needs and Tier-2 localized market nuances.'
    },
    {
      icon: IconCoin,
      title: 'End-to-End Solution',
      description: 'Handle the entire digital lifecycle in the entire line of code to final conversion.'
    }
  ];
  // {
  //     icon: IconDeviceMobile,
  //     title: 'Mobile Responsive Design',
  //     description: 'Fully responsive websites that work flawlessly on all devices and screen sizes'
  //   }

  const stats = [
    {
      icon: IconTrophy,
      number: '500+',
      label: 'Projects Completed',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: IconUsers,
      number: '300+',
      label: 'Happy Clients',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: IconChartBar,
      number: '95%',
      label: 'Success Rate',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: IconTarget,
      number: '10+',
      label: 'Years Experience',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold'
            >
              About Us
            </motion.span>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
              Professional Website
              <span className='block text-blue-600 mt-2'>Development Company</span>
            </h2>

            {/* Description */}
            <div className='space-y-4 text-gray-600 text-lg leading-relaxed'>
              <p>
                Our main objective is to provide digital growth to our clients. As a leading Digital Marketing Agency, we aim to empower Indian businesses that seek our help as they get the best and global-standard technology. 
              </p>
            </div>
            {/* Heading */}
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 leading-tight'>
              Why
              <span className='block text-blue-600 mt-2'>Choose Us</span>
            </h2>

            {/* Features Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4'>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex gap-4'
                  >
                    <div className='shrink-0'>
                      <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                        <Icon className='w-6 h-6 text-blue-600' stroke={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>{feature.title}</h3>
                      <p className='text-sm text-gray-600'>{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <p className='text-lg text-gray-600 mb-6'>
              Partner with an agency that prioritizes your ROI. Learn More About Our Team!
            </p>
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='pt-4'
            >
              <Link
                href='/about-us'
                className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            {/* Image Container */}
            <div className='relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]'>
              <img
                src='/about-image.webp'
                alt='Digital Solution 360 Team'
                className='w-full h-full object-cover'
              />
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-linear-to-tr from-blue-900/30 to-transparent'></div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl'
              >
                <div className='grid grid-cols-2 gap-4'>
                  {stats.slice(0, 2).map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className='text-center'>
                        <div className={`${stat.bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                          <Icon className={`${stat.color} w-6 h-6`} stroke={1.5} />
                        </div>
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                        <div className='text-xs text-gray-600 mt-1'>{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              {/* <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className='absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30'
              /> */}
              {/* <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className='absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30'
              /> */}
            </div>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='grid grid-cols-2 gap-4'
            >
              {stats.slice(2).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    <div className={`${stat.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                      <Icon className={`${stat.color} w-6 h-6`} stroke={1.5} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'
        >
          {/* Why Choose Us */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
          >
            <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
              <IconTarget className='w-8 h-8 text-blue-600' stroke={1.5} />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Why Choose Us</h3>
            <p className='text-gray-600 leading-relaxed'>
              Our website development company focuses on delivering high-quality websites and reliable digital marketing services that help businesses grow online. We provide fast website delivery, digital marketing support, and long-term assistance.
            </p>
          </motion.div>

          {/* SEO Friendly Approach */}
          <motion.div
            whileHover={{ y: -5 }}
            className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
          >
            <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6'>
              <IconBulb className='w-8 h-8 text-purple-600' stroke={1.5} />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>SEO Friendly Development</h3>
            <p className='text-gray-600 leading-relaxed'>
              Digitalsolution360 specializes in SEO friendly website development that helps websites rank better on search engines. We follow the latest SEO standards including optimized page structure, mobile responsiveness, schema-ready coding, and fast loading speed.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection