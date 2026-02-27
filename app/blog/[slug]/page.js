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
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

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
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
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

        {/* ── Content Area ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-2 relative z-10 pb-16">
          <motion.div
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
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-teal-600 prose-a:underline hover:prose-a:text-teal-700
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

            {/* Related Posts */}
            {related.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((rp) => (
                    <Link key={rp.post_id} href={`/blog/${rp.post_slug}`} className="group block">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
