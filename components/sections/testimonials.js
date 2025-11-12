"use client";

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconStar, IconQuote, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechStartup India',
      image: '/testimonials/person-1.jpg',
      rating: 5,
      text: 'Working with Digital Solution 360 has been a game-changer for our business. Their team delivered a stunning website that perfectly captures our brand essence. The SEO results have been phenomenal!',
      company: 'TechStartup India'
    },
    {
      name: 'Priya Sharma',
      position: 'Marketing Director, Fashion Hub',
      image: '/testimonials/person-2.jpg',
      rating: 5,
      text: 'Exceptional service from start to finish! Their social media strategies tripled our engagement in just 3 months. The team is professional, creative, and truly understands digital marketing.',
      company: 'Fashion Hub'
    },
    {
      name: 'Amit Patel',
      position: 'Founder, EduTech Solutions',
      image: '/testimonials/person-3.jpg',
      rating: 5,
      text: 'The web application they built for us is robust, scalable, and user-friendly. Their attention to detail and commitment to quality is unmatched. Highly recommend their services!',
      company: 'EduTech Solutions'
    },
    {
      name: 'Sneha Reddy',
      position: 'Owner, Wellness Studio',
      image: '/testimonials/person-4.jpg',
      rating: 5,
      text: 'Digital Solution 360 transformed our online presence completely. Their branding and creative work helped us stand out in a crowded market. Our client base has grown significantly!',
      company: 'Wellness Studio'
    },
    {
      name: 'Vikram Singh',
      position: 'Director, Real Estate Pro',
      image: '/testimonials/person-5.jpg',
      rating: 5,
      text: 'Outstanding automation solutions that streamlined our entire workflow. The team is knowledgeable, responsive, and delivers on time. Best investment we made for our business!',
      company: 'Real Estate Pro'
    },
    {
      name: 'Kavita Mehta',
      position: 'Co-Founder, FoodVenture',
      image: '/testimonials/person-6.jpg',
      rating: 5,
      text: 'Their digital marketing campaigns brought us customers we never thought possible. The ROI has been incredible, and their ongoing support is exemplary. True partners in our success!',
      company: 'FoodVenture'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16 '>
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
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4'
          >
            Testimonials
          </motion.span>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            What Our Clients Say
          </h2>
          
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className='relative'>
          {/* Main Testimonial Card */}
          <div className='relative h-[500px] md:h-[400px] lg:h-[350px] max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-2xl'>
            <AnimatePresence initial={false} custom={direction} mode='wait'>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.1 },
                  scale: { duration: 0.3 }
                }}
                className='absolute inset-0'
              >
                <div className='bg-gray-50 shadow-2xl rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden'>
                  {/* Quote Icon */}
                  <div className='absolute top-8 right-8 opacity-10'>
                    <IconQuote className='w-24 h-24 text-blue-600' stroke={1.5} />
                  </div>

                  <div className='relative z-10'>
                    {/* Star Rating */}
                    <div className='flex gap-1 mb-6'>
                      {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                        <IconStar
                          key={index}
                          className='w-6 h-6 text-yellow-400 fill-yellow-400'
                          stroke={1.5}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium'>
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className='flex items-center gap-4 relative z-10'>
                    <div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0'>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className='w-full h-full object-cover'
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-2xl font-bold text-blue-600">${testimonials[currentIndex].name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <div>
                      <h4 className='text-xl font-bold text-gray-900'>
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className='text-gray-600'>
                        {testimonials[currentIndex].position}
                      </p>
                      <p className='text-sm text-blue-600 font-semibold'>
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50'></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button
              onClick={handlePrevious}
              className='w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg'
              aria-label='Previous testimonial'
            >
              <IconChevronLeft className='w-6 h-6' stroke={2} />
            </button>

            {/* Dots Indicator */}
            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-blue-600'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className='w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg'
              aria-label='Next testimonial'
            >
              <IconChevronRight className='w-6 h-6' stroke={2} />
            </button>
          </div>

          {/* Counter */}
          <div className='text-center mt-6'>
            <p className='text-gray-500 text-sm'>
              {currentIndex + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-16 pt-16 border-t border-gray-200'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center'>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>300+</div>
              <div className='text-gray-600'>Happy Clients</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>500+</div>
              <div className='text-gray-600'>Projects Done</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>95%</div>
              <div className='text-gray-600'>Success Rate</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>10+</div>
              <div className='text-gray-600'>Years Experience</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default TestimonialSection