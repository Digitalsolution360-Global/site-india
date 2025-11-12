"use client";

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { IconCalendar, IconClock, IconArrowRight, IconUser } from '@tabler/icons-react'

function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: 'The Future of Digital Marketing in 2025',
      excerpt: 'Explore the latest trends and strategies that are shaping the future of digital marketing. Learn how AI and automation are revolutionizing the industry.',
      image: '/blogs/blog-1.jpg',
      category: 'Digital Marketing',
      categoryColor: 'bg-blue-100 text-blue-600',
      author: 'Priya Sharma',
      date: 'Nov 8, 2025',
      readTime: '5 min read',
      slug: 'future-of-digital-marketing-2025'
    },
    {
      id: 2,
      title: '10 Essential SEO Tips to Boost Your Rankings',
      excerpt: 'Discover proven SEO strategies that can significantly improve your search engine rankings and drive more organic traffic to your website.',
      image: '/blogs/blog-2.jpg',
      category: 'SEO',
      categoryColor: 'bg-green-100 text-green-600',
      author: 'Rajesh Kumar',
      date: 'Nov 5, 2025',
      readTime: '7 min read',
      slug: 'essential-seo-tips-boost-rankings'
    },
    {
      id: 3,
      title: 'Why Your Business Needs a Mobile-First Website',
      excerpt: 'Learn why mobile-first design is no longer optional and how it can dramatically improve user experience and conversion rates for your business.',
      image: '/blogs/blog-3.jpg',
      category: 'Web Development',
      categoryColor: 'bg-purple-100 text-purple-600',
      author: 'Amit Patel',
      date: 'Nov 1, 2025',
      readTime: '6 min read',
      slug: 'mobile-first-website-importance'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4'
          >
            Our Blog
          </motion.span>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Latest Insights & Tips
          </h2>
          
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Stay updated with the latest trends, tips, and best practices in digital marketing, web development, and SEO
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className='group'
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className='bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col'>
                  {/* Blog Image */}
                  <div className='relative h-56 overflow-hidden bg-gray-200'>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBlog Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {/* Category Badge */}
                    <div className='absolute top-4 left-4'>
                      <span className={`${blog.categoryColor} px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className='p-6 flex flex-col grow'>
                    {/* Meta Info */}
                    <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
                      <div className='flex items-center gap-1'>
                        <IconCalendar className='w-4 h-4' stroke={1.5} />
                        <span>{blog.date}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <IconClock className='w-4 h-4' stroke={1.5} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2'>
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className='text-gray-600 mb-6 leading-relaxed line-clamp-3 grow'>
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                      {/* Author */}
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
                          <IconUser className='w-4 h-4 text-gray-500' stroke={1.5} />
                        </div>
                        <span>{blog.author}</span>
                      </div>

                      {/* Read More */}
                      <div className='flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300'>
                        <span className='text-sm'>Read More</span>
                        <IconArrowRight className='w-4 h-4 ml-1' stroke={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center mt-12'
        >
          <Link
            href='/blogs'
            className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group'
          >
            <span>View All Articles</span>
            <IconArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' stroke={2} />
          </Link>
        </motion.div>

        {/* Newsletter Subscription */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-20 bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center'
        >
          <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Subscribe to Our Newsletter
          </h3>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Get the latest digital marketing tips, industry insights, and exclusive content delivered straight to your inbox.
          </p>
          
          <form className='max-w-md mx-auto flex flex-col sm:flex-row gap-3'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900'
              required
            />
            <button
              type='submit'
              className='bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap'
            >
              Subscribe Now
            </button>
          </form>
          
          <p className='text-xs text-gray-500 mt-4'>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}

export default BlogSection