"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { IconCalendar, IconClock, IconArrowRight, IconUser, IconLoader2 } from '@tabler/icons-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/posts?page=1&limit=3`);
        const json = await res.json();
        if (json.success && json.data) {
          setBlogs(json.data);
        }
      } catch (e) {
        console.error('Failed to fetch blog posts:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const estimateReadTime = (html) => {
    if (!html) return '3 min read';
    const text = html.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const mins = Math.max(2, Math.ceil(words / 200));
    return `${mins} min read`;
  };

  const getExcerpt = (html, maxLen = 140) => {
    if (!html) return '';
    const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
  };

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
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
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
        {loading ? (
          <div className='flex justify-center py-16'>
            <IconLoader2 className='w-10 h-10 text-blue-600 animate-spin' />
          </div>
        ) : blogs.length === 0 ? (
          <p className='text-center text-gray-500 py-16'>No blog posts yet. Check back soon!</p>
        ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.post_id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className='group'
            >
              <Link href={`/${blog.post_slug}`}>
                <div className='bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col'>
                  {/* Blog Image */}
                  <div className='relative h-56 overflow-hidden bg-gray-200'>
                    <img
                      src={blog.featured_image || '/blogs/blog-1.jpg'}
                      alt={blog.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBlog Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {/* Category Badge */}
                    {blog.category_name && (
                    <div className='absolute top-4 left-4'>
                      <span className='bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm'>
                        {blog.category_name}
                      </span>
                    </div>
                    )}
                  </div>

                  {/* Blog Content */}
                  <div className='p-6 flex flex-col grow'>
                    {/* Meta Info */}
                    <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
                      <div className='flex items-center gap-1'>
                        <IconCalendar className='w-4 h-4' stroke={1.5} />
                        <span>{formatDate(blog.created_at)}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <IconClock className='w-4 h-4' stroke={1.5} />
                        <span>{estimateReadTime(blog.content)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2'>
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className='text-gray-600 mb-6 leading-relaxed line-clamp-3 grow'>
                      {getExcerpt(blog.content)}
                    </p>

                    {/* Footer */}
                    <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                      {/* Author */}
                      <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
                          <IconUser className='w-4 h-4 text-gray-500' stroke={1.5} />
                        </div>
                        <span>{blog.author || 'Digital Solution 360'}</span>
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
        )}

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center mt-12'
        >
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group'
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