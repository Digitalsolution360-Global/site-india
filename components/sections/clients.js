"use client";

import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useInView } from 'motion/react'

function ClientSection() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    industries: 0,
    retention: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = duration / frameRate;

      const targets = {
        clients: 300,
        projects: 500,
        industries: 15,
        retention: 98
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          clients: Math.floor(easeOutQuart * targets.clients),
          projects: Math.floor(easeOutQuart * targets.projects),
          industries: Math.floor(easeOutQuart * targets.industries),
          retention: Math.floor(easeOutQuart * targets.retention)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  const clients = [
    { name: 'Bliss 32 Dental', logo: '/clients/Bliss-32-Dental.webp' },
    { name: 'BD Services', logo: '/clients/bd-services.webp' },
    { name: 'Client 12', logo: '/clients/client12.webp' },
    { name: 'Client 8', logo: '/clients/client8.webp' },
    { name: 'Client 9', logo: '/clients/client9.webp' },
    { name: 'Master Dinesh', logo: '/clients/master-dinesh.webp' },
    { name: 'Maxalign Dental', logo: '/clients/maxalign-dental.webp' },
    { name: 'Preesha Global', logo: '/clients/preesha-global.webp' },
    { name: 'Prime Holidays', logo: '/clients/prime-holidays.webp' },
    { name: 'Prudent BV', logo: '/clients/prudentbv.webp' },
    { name: 'Raj Nursing Home', logo: '/clients/raj-nursing-home.webp' },
    { name: 'The Great Herbal', logo: '/clients/the-great-herbal.webp' },
    { name: 'The Tickle Toe', logo: '/clients/the-tickle-toe.webp' },
  ];

  // Duplicate clients array multiple times for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  const [isPaused, setIsPaused] = useState(false);
  const xPos = useMotionValue(0);

  useAnimationFrame(() => {
    if (!isPaused) {
      // Move left by 1 pixel per frame
      const newValue = xPos.get() - 1;
      
      // Card width (192px) + gap (32px) = 224px per item
      const resetPoint = -(224 * clients.length);
      
      if (newValue <= resetPoint) {
        xPos.set(0);
      } else {
        xPos.set(newValue);
      }
    }
  });

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4'
          >
            Our Clients
          </motion.span>

          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Trusted by <span className='text-blue-600'>Leading Brands</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We&apos;re proud to partner with incredible businesses across industries, helping them achieve their digital goals.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className='relative'>
        {/* Gradient overlays for fade effect */}
        {/* <div className='absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none'></div>
        <div className='absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none'></div> */}

        <motion.div
          className='flex gap-8'
          style={{ x: xPos }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='shrink-0 w-60 bg-white rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center p-4 group cursor-pointer'
            >
              <img
                src={client.logo}
                alt={client.name}
                className='max-w-full max-h-full object-contain transition-all duration-300 '
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='bg-white rounded-2xl p-6 shadow-lg text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>{counts.clients}+</p>
            <p className='text-gray-600 font-medium'>Happy Clients</p>
          </div>
          <div className='bg-white rounded-2xl p-6 shadow-lg text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>{counts.projects}+</p>
            <p className='text-gray-600 font-medium'>Projects Completed</p>
          </div>
          <div className='bg-white rounded-2xl p-6 shadow-lg text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>{counts.industries}+</p>
            <p className='text-gray-600 font-medium'>Industries Served</p>
          </div>
          <div className='bg-white rounded-2xl p-6 shadow-lg text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>{counts.retention}%</p>
            <p className='text-gray-600 font-medium'>Client Retention</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='text-center mt-16'
      >
        <p className='text-lg text-gray-600 mb-6'>
          Want to join our growing list of successful clients?
        </p>
        <a
          href='/contact'
          className='inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
        >
          Start Your Project
        </a>
      </motion.div>
    </section>
  )
}

export default ClientSection