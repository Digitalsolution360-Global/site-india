"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/blog-img1.png',
      alt: 'Digital Marketing Solutions'
    },
    {
      image: '/blog-img2.png',
      alt: 'Web Development Services'
    },
    {
      image: '/blog-img3.png',
      alt: 'SEO & Analytics'
    },
    {
      image: '/blog-img4.png',
      alt: 'Brand & Creative Design'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className='min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-24 lg:pt-0'>
      <div className='max-w-7xl w-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='space-y-6 text-center lg:text-left'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='inline-block'
            >
              <span className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold'>
                Digital Solutions for Modern Business
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight'
            >
              Transform Your
              <span className='block text-blue-600 mt-2'>
                Digital Presence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='text-lg md:text-xl text-gray-600 max-w-2xl'
            >
              We craft innovative digital solutions that drive growth, enhance user experience, and elevate your brand to new heights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <Link
                href="/contact"
                className='bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block text-center'
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className='bg-white text-blue-600 border-2 border-blue-600 px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 inline-block text-center'
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='grid grid-cols-3 gap-6 pt-8'
            >
              <div className='text-center lg:text-left'>
                <h3 className='text-3xl md:text-4xl font-bold text-blue-600'>500+</h3>
                <p className='text-gray-600 text-sm md:text-base'>Projects Done</p>
              </div>
              <div className='text-center lg:text-left'>
                <h3 className='text-3xl md:text-4xl font-bold text-blue-600'>300+</h3>
                <p className='text-gray-600 text-sm md:text-base'>Happy Clients</p>
              </div>
              <div className='text-center lg:text-left'>
                <h3 className='text-3xl md:text-4xl font-bold text-blue-600'>10+</h3>
                <p className='text-gray-600 text-sm md:text-base'>Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl'
          >
            {/* Image Slides */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className='absolute inset-0'
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className='w-full h-full object-cover'
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-linear-to-tr from-blue-900/20 to-transparent'></div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl'
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection