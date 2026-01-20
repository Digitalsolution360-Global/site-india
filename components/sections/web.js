"use client";

import React from 'react'
import { motion } from 'motion/react'
import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiLaravel, 
  SiPhp, 
  SiRubyonrails, 
  SiPython, 
  SiWordpress,
  SiSquarespace, 
  SiWebflow, 
  SiWix,
  SiContentful,
  SiShopify,
  SiUmbraco,
  SiCraftcms,
  SiOctobercms,
  SiPrestashop,
  SiStrapi
} from 'react-icons/si'

function WebDevSection() {
  const technologies = [
    { name: 'ReactJS', icon: SiReact, color: 'text-cyan-500', bgColor: 'bg-cyan-50' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black', bgColor: 'bg-gray-100' },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500', bgColor: 'bg-green-50' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', bgColor: 'bg-green-50' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', bgColor: 'bg-red-50' },
    { name: 'PHP', icon: SiPhp, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { name: 'Ruby on Rails', icon: SiRubyonrails, color: 'text-red-600', bgColor: 'bg-red-50' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { name: 'WordPress', icon: SiWordpress, color: 'text-blue-700', bgColor: 'bg-blue-50' },
    { name: 'Webflow', icon: SiWebflow, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'Wix', icon: SiWix, color: 'text-black', bgColor: 'bg-gray-100' },
    { name: 'Contentful', icon: SiContentful, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { name: 'Umbraco', icon: SiUmbraco, color: 'text-blue-600', bgColor: 'bg-blue-50' }, // Using placeholder
    { name: 'Squarespace', icon: SiSquarespace, color: 'text-black', bgColor: 'bg-gray-100' }, // Using placeholder
    { name: 'Craft CMS', icon: SiCraftcms, color: 'text-orange-600', bgColor: 'bg-orange-50' }, // Using placeholder
    { name: 'Strapi', icon: SiStrapi, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { name: 'OctoberCMS', icon: SiOctobercms, color: 'text-red-600', bgColor: 'bg-red-50' }, // Using placeholder
    { name: 'Shopify', icon: SiShopify, color: 'text-green-600', bgColor: 'bg-green-50' },
    { name: 'PrestaShop', icon: SiPrestashop, color: 'text-pink-600', bgColor: 'bg-pink-50' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
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
            Our Tech Stack
          </motion.span>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Technologies We Master
          </h2>
          
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            We leverage the latest and most powerful technologies to build robust, scalable, and high-performance web solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className='group'
              >
                <div className='bg-white border-2 border-gray-200 rounded-2xl p-6 h-full flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden'>
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Icon Container */}
                  <div className={`${tech.bgColor} w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <Icon className={`${tech.color} text-3xl`} />
                  </div>

                  {/* Technology Name */}
                  <h3 className='text-center text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 relative z-10'>
                    {tech.name}
                  </h3>
                </div>
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
            Ready to build something amazing with cutting-edge technology?
          </p>
          <a
            href='/contact'
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            Start Your Project
          </a>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          <div className='text-center p-6 bg-gray-50 rounded-2xl'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>10+</div>
            <div className='text-gray-900 font-semibold mb-2'>Frameworks</div>
            <p className='text-gray-600 text-sm'>Modern frameworks for every project need</p>
          </div>
          <div className='text-center p-6 bg-gray-50 rounded-2xl'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>100%</div>
            <div className='text-gray-900 font-semibold mb-2'>Scalable</div>
            <p className='text-gray-600 text-sm'>Built to grow with your business</p>
          </div>
          <div className='text-center p-6 bg-gray-50 rounded-2xl'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>24/7</div>
            <div className='text-gray-900 font-semibold mb-2'>Support</div>
            <p className='text-gray-600 text-sm'>Round-the-clock technical assistance</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevSection