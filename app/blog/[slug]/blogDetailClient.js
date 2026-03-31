"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconArrowRight,
  IconLoader2,
  IconCategory,
  IconArticle,
  IconShare,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconLink,
  IconSend,
  IconCheck,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function BlogDetailClient() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/posts/${slug}`);
        const json = await res.json();
        if (json.success) {
          setPost(json.data);
          setRelated(json.related || []);
        } else {
          setPost(null);
        }
      } catch (e) { console.error('Failed to fetch post:', e); }
      setLoading(false);
    })();
  }, [slug]);

 useEffect(() => {
  if (!post) return;

  const buttons = document.querySelectorAll(".faq-btn");

  function handleClick(e) {
    const btn = e.currentTarget;

    const allContents = document.querySelectorAll(".faq-content");
    const allIcons = document.querySelectorAll(".faq-icon");

    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");

    const isOpen = content.classList.contains("open");

    // Close all
    allContents.forEach(c => c.classList.remove("open"));
    allIcons.forEach(i => i.innerText = "+");

    // Open clicked one
    if (!isOpen) {
      content.classList.add("open");
      icon.innerText = "−";
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });

  return () => {
    buttons.forEach((btn) => {
      btn.removeEventListener("click", handleClick);
    });
  };

}, [post]);

  // Fetch all posts for sidebar
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/posts`);
        const json = await res.json();
        if (json.success) setAllPosts(json.data || []);
      } catch (e) { console.error('Failed to fetch posts:', e); }
    })();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL ;
      await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name, email: contactForm.email, number: contactForm.phone,
          message: '[blog_sidebar]',
          pageurl: typeof window !== 'undefined' ? window.location.pathname : ''
        })
      }).catch(() => {});
      await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name, email: contactForm.email, phone: contactForm.phone,
          _subject: 'New Lead - Blog Sidebar', _captcha: 'false', _template: 'table'
        })
      }).catch(() => {});
      setFormSuccess(true);
      setContactForm({ name: '', phone: '', email: '' });
      setTimeout(() => setFormSuccess(false), 5000);
    } catch (err) {
      console.error('Form error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const estimateReadTime = (html) => {
    if (!html) return '3 min read';
    const text = html.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const mins = Math.max(2, Math.ceil(words / 200));
    return `${mins} min read`;
  };

  const getExcerpt = (html, maxLen = 120) => {
    if (!html) return '';
    const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <IconLoader2 size={48} className="animate-spin text-teal-500" />
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <IconArticle size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Post Not Found</h2>
            <p className="text-gray-500 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium">
              <IconArrowLeft size={18} /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-20 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link>
                <span>/</span>
                {post.category_name && (
                  <>
                    <Link href={`/blog?category=${post.category_id}`} className="hover:text-teal-400 transition-colors">{post.category_name}</Link>
                    <span>/</span>
                  </>
                )}
                <span className="text-gray-500 truncate max-w-[200px]">{post.post_name}</span>
              </div>

              {post.category_name && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4">
                  <IconCategory size={14} /> {post.category_name}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                {post.post_name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <IconCalendar size={16} /> {formatDate(post.created_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <IconClock size={16} /> {estimateReadTime(post.post_description)}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Content Area (two-column) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-2 relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Left Column: Blog Content ── */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Featured Image */}
              {post.image && (
                <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-gray-100">
                  <img
                    src={post.image.startsWith('http') ? post.image : `https://digitalsolution360.in/storage/post/${post.image}`}
                    alt={post.post_name}
                    className="w-full h-auto max-h-[480px] object-cover"
                  />
                </div>
              )}

              {/* YouTube */}
              {post.yt_iframe_link && post.yt_iframe_link !== 'First' && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      src={post.yt_iframe_link}
                      title={post.post_name}
                      className="absolute top-0 left-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Article Body */}
              <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 mb-10">
                <div
                  className="blog-body prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-700
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-ul:pl-6 prose-li:text-gray-600 prose-li:mb-1
                    prose-strong:text-gray-800
                    prose-blockquote:border-l-4 prose-blockquote:border-teal-400 prose-blockquote:bg-teal-50/50 prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4"
                  dangerouslySetInnerHTML={{ __html: post.post_description }}
                />
              </article>

              {/* Share Bar */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <IconShare size={20} /> Share this article
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                      <IconBrandFacebook size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.post_name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-sky-50 text-sky-500 hover:bg-sky-100 transition-colors"
                    >
                      <IconBrandTwitter size={20} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      <IconBrandLinkedin size={20} />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.post_name + ' ' + shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                    >
                      <IconBrandWhatsapp size={20} />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors relative"
                    >
                      <IconLink size={20} />
                      {copied && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Related Posts (below content) */}
              {related.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {related.map((rp) => (
                      <Link key={rp.post_id} href={`/${rp.post_slug}`} className="group block">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                          <div className="relative h-40 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                            {rp.image ? (
                              <img
                                src={rp.image.startsWith('http') ? rp.image : `https://digitalsolution360.in/storage/post/${rp.image}`}
                                alt={rp.post_name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <IconArticle size={32} className="text-gray-300" />
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <span className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                              <IconCalendar size={12} /> {formatDate(rp.created_at)}
                            </span>
                            <h3 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                              {rp.post_name}
                            </h3>
                            <div className="mt-auto pt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                              Read More <IconArrowRight size={14} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back Link */}
              <div className="mt-10 text-center">
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all font-medium shadow-lg shadow-teal-500/20">
                  <IconArrowLeft size={18} /> Back to All Articles
                </Link>
              </div>
            </motion.div>

            {/* ── Right Column: Sidebar ── */}
            <motion.aside
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="sticky top-28 space-y-6">

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-linear-to-r from-teal-600 to-teal-700 p-5">
                    <h3 className="text-lg font-bold text-white">Get Free Consultation</h3>
                    <p className="text-teal-100 text-sm mt-1">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
                  </div>

                  <div className="p-5">
                    {!formSuccess ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 text-sm"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 text-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10,15}"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 text-sm"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={formSubmitting}
                          className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {formSubmitting ? 'Submitting...' : <><IconSend size={16} /> Request Callback</>}
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconCheck size={24} className="text-green-600" />
                        </div>
                        <p className="font-semibold text-gray-900">Thank You!</p>
                        <p className="text-sm text-gray-500 mt-1">We&apos;ll contact you soon.</p>
                      </div>
                    )}
                  </div>

                  {/* Quick Contact */}
                  <div className="border-t border-gray-100 p-5 space-y-2.5">
                    <a href="tel:+919990556217" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-teal-600 transition-colors">
                      <IconPhone size={16} className="text-teal-600" /> +91 9990556217
                    </a>
                    <a href="mailto:info@digitalsolution360.in" className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-teal-600 transition-colors">
                      <IconMail size={16} className="text-teal-600" /> info@digitalsolution360.in
                    </a>
                  </div>
                </div>

                {/* Other Posts */}
                {allPosts.filter(p => p.post_slug !== slug).length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Other Posts</h3>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                      {allPosts.filter(p => p.post_slug !== slug).slice(0, 10).map((op) => (
                        <Link key={op.post_id} href={`/${op.post_slug}`} className="group flex gap-3">
                          <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                            {op.image ? (
                              <img
                                src={op.image.startsWith('http') ? op.image : `https://digitalsolution360.in/storage/post/${op.image}`}
                                alt={op.post_name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <IconArticle size={20} className="text-gray-300" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                              {op.post_name}
                            </h4>
                            <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                              <IconCalendar size={11} /> {formatDate(op.created_at)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {allPosts.filter(p => p.post_slug !== slug).length > 10 && (
                      <Link href="/blog" className="block mt-4 text-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                        View All Posts <IconArrowRight size={14} className="inline" />
                      </Link>
                    )}
                  </div>
                )}

              </div>
            </motion.aside>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
