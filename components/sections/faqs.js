"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconPlus, IconMinus, IconMessageQuestion } from '@tabler/icons-react'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's crucial because higher rankings lead to more visibility, organic traffic, and potential customers. Good SEO helps your target audience find you when they're searching for products or services you offer, making it one of the most cost-effective marketing strategies."
    },
    {
      question: "How does SEO differ from PPC?",
      answer: "SEO focuses on earning organic (free) traffic through optimizing your website and content, while PPC (Pay-Per-Click) involves paying for ads to appear in search results. SEO takes longer to show results but provides long-term benefits, whereas PPC delivers immediate visibility but requires ongoing investment. The best strategy often combines both approaches."
    },
    {
      question: "What is local SEO and who needs it?",
      answer: "Local SEO optimizes your online presence to attract customers from specific geographic areas. It's essential for businesses with physical locations or those serving specific regions, like restaurants, dental clinics, retail stores, or service providers. Local SEO includes optimizing Google Business Profile, local citations, and location-specific content."
    },
    {
      question: "How does voice search impact SEO?",
      answer: "Voice search is changing how people find information online. It typically involves longer, more conversational queries. To optimize for voice search, focus on natural language, question-based content, featured snippets, and local SEO. Voice search users often seek immediate, specific answers, so providing clear, concise information is key."
    },
    {
      question: "What are the key components of a successful SEO strategy?",
      answer: "A successful SEO strategy includes: quality content creation, keyword research and optimization, technical SEO (site speed, mobile-friendliness), link building, user experience optimization, regular content updates, and performance monitoring. It's also important to stay updated with search engine algorithm changes and industry trends."
    },
    {
      question: "How can I measure the success of my digital marketing efforts?",
      answer: "Success can be measured through various metrics including website traffic, conversion rates, ROI, engagement rates, lead generation, customer acquisition cost, and revenue growth. Tools like Google Analytics, social media insights, and marketing automation platforms help track these metrics. The specific KPIs depend on your business goals."
    },
    {
      question: "What are some common SEO mistakes to avoid?",
      answer: "Common SEO mistakes include: keyword stuffing, ignoring mobile optimization, poor site structure, slow page speed, duplicate content, neglecting technical SEO, using poor quality backlinks, not optimizing for local search, ignoring analytics data, and failing to update content regularly. Avoiding these pitfalls will significantly improve your SEO performance."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "The timeline varies by strategy. PPC ads can show results within days, while SEO typically takes 3-6 months for significant improvements. Social media marketing may show engagement within weeks, but building a strong following takes months. Content marketing usually shows results in 6-12 months. Consistency and patience are key to long-term success."
    },
    {
      question: "What platforms should I use for social media marketing?",
      answer: "The best platforms depend on your target audience and business type. Facebook and Instagram work well for B2C businesses, LinkedIn is ideal for B2B, TikTok and Instagram Reels for younger audiences, Twitter for real-time engagement, and Pinterest for lifestyle and DIY content. Focus on platforms where your target audience is most active rather than trying to be everywhere."
    },
    {
      question: "Do I need a custom website or can I use a template?",
      answer: "It depends on your needs and budget. Templates are cost-effective and quick to deploy, suitable for small businesses with straightforward requirements. Custom websites offer unique designs, specific functionality, better scalability, and competitive advantage. Consider factors like budget, timeline, uniqueness requirements, and long-term growth plans when deciding."
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
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
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
              href='/contact'
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