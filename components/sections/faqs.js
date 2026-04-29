"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconPlus, IconMinus, IconMessageQuestion } from '@tabler/icons-react'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take for an SEO Company in Delhi NCR to show results?",
      answer: "With expert guidance, users can expect results within 6 months. Our localized experts ensure success with faster responses."
    },
    {
      question: "What makes you the best Digital Marketing Company in India for small businesses?",
      answer: "As we provide the budget-friendly Online Marketing Solutions in tier-2 cities of India, this makes the right choice for every type of business."
    },
    {
      question: "Does your Website Development Company provide Shopify / WooCommerce Development support?",
      answer: "Yes, integration of Shopify or WooCommerce is assured with our end-to-end development and API integrations. This is how we scale your local shops."
    },
    {
      question: "Why should I invest in Local SEO Services in 2026?",
      answer: "Local SEO services can boost your business’s appearance across search engines. The rise of voice search is evolving with technology. That’s how we merge Local SEO with Google Maps and search results."
    },
    {
      question: "How do you ensure ROI-based digital marketing?",
      answer: "Digital Solution 360 ensures our ad spend is optimized for profit. That’s why our team focused on high-intent keywords to summon traffic."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          {/* Icon */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'
          >
            <IconMessageQuestion className='w-8 h-8 text-blue-600' stroke={1.5} />
          </motion.div> */}

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
          >
            FAQs
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Frequently Asked Questions
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Got questions? We've got answers. Find everything you need to know about our services and digital marketing.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-4'
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-300'
              >
                <span className='text-lg md:text-xl font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index
                    ? 'bg-blue-600 rotate-180'
                    : 'bg-blue-100'
                  }`}>
                  {openIndex === index ? (
                    <IconMinus className='w-5 h-5 text-white' stroke={2.5} />
                  ) : (
                    <IconPlus className='w-5 h-5 text-blue-600' stroke={2.5} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 md:px-8 pb-6 pt-2'>
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className='text-gray-600 leading-relaxed'
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 shadow-lg'
        >
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            Still Have Questions?
          </h3>
          <p className='text-gray-100 mb-6 text-lg'>
            Can't find the answer you're looking for? Our team is here to help you.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact-us'
              className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-xl'
            >
              Contact Us
            </a>
            <a
              href='tel:+919990556217'
              className='inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105'
            >
              Call +91 99905 56217
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection