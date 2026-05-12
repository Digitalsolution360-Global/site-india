"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  IconSearch,
  IconCalendar,
  IconClock,
  IconArrowRight,
  IconLoader2,
  IconCategory,
  IconChevronLeft,
  IconChevronRight,
  IconArticle,
  IconFilter,
  IconX,
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if any query params exist
    if (searchParams.toString()) {
      router.replace(pathname);
    }
  }, [searchParams, pathname, router]);

  // Fetch categories once
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/posts/categories`);
        const json = await res.json();
        if (json.success) setCategories(json.data);
      } catch (e) { console.error('Failed to fetch categories:', e); }
    })();
  }, []);

  // Fetch posts on page/category change
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let url = `${API_BASE}/posts?page=${page}&limit=12`;
        if (selectedCategory) url += `&category=${selectedCategory}`;
        const res = await fetch(url);
        const json = await res.json();
        if (json.success) {
          setPosts(json.data);
          setTotalPages(json.pagination.totalPages);
          setTotal(json.pagination.total);
        }
      } catch (e) { console.error('Failed to fetch posts:', e); }
      setLoading(false);
    })();
  }, [page, selectedCategory]);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId === selectedCategory ? null : catId);
    setPage(1);
  };

  const formatDate = (dateStr) => {
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

  const getExcerpt = (html, maxLen = 120) => {
    if (!html) return '';
    const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    return text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
  };

  const filteredPosts = searchQuery
    ? posts.filter(p =>
      p.post_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.category_name || '').toLowerCase().includes(searchQuery.toLowerCase())
    )
    : posts;

  const categoryColors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-teal-500 to-teal-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600',
    'from-green-500 to-green-600',
    'from-red-500 to-red-600',
    'from-yellow-500 to-yellow-600',
    'from-cyan-500 to-cyan-600',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                <IconArticle size={16} /> Our Blog
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Insights & <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-blue-400">Resources</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Stay updated with the latest trends in digital marketing, web development, SEO, and more.
              </p>

              {/* Search Bar */}
              <div className="max-w-lg mx-auto relative">
                <IconSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all backdrop-blur-sm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                    <IconX size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Category Filter ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <IconFilter size={20} className="text-teal-600" />
              <h3 className="font-semibold text-gray-800">Filter by Category</h3>
              <span className="text-sm text-gray-500">({total} articles)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-linear-to-r from-teal-500 to-teal-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((cat, i) => (
                <button
                  key={cat.category_id}
                  onClick={() => handleCategoryClick(cat.category_id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.category_id
                      ? `bg-linear-to-r ${categoryColors[i % categoryColors.length]} text-white shadow-md`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name} <span className="opacity-70">({cat.post_count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Posts Grid ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <IconLoader2 size={40} className="animate-spin text-teal-500" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-24">
              <IconArticle size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.post_id}
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <Link href={`/${post.post_slug}`} className="group block h-full">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                          {post.image ? (
                            <img
                              src={post.image.startsWith('http') ? post.image : `https://digitalsolution360.in/storage/post/${post.image}`}
                              alt={post.post_name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <IconArticle size={48} className="text-gray-300" />
                            </div>
                          )}
                          {post.category_name && (
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-teal-700 shadow-sm">
                              {post.category_name}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <IconCalendar size={14} /> {formatDate(post.created_at)}
                            </span>
                            <span className="flex items-center gap-1">
                              <IconClock size={14} /> {estimateReadTime(post.post_description)}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                            {post.post_name}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                            {getExcerpt(post.post_description, 140)}
                          </p>
                          <div className="mt-4 flex items-center gap-1 text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
                            Read More <IconArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-teal-50 hover:border-teal-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <IconChevronLeft size={20} />
                  </button>
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 7) {
                      pageNum = i + 1;
                    } else if (page <= 4) {
                      pageNum = i + 1;
                    } else if (page >= totalPages - 3) {
                      pageNum = totalPages - 6 + i;
                    } else {
                      pageNum = page - 3 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 rounded-xl text-sm font-medium transition-all shadow-sm ${
                          page === pageNum
                            ? 'bg-linear-to-r from-teal-500 to-teal-600 text-white shadow-md'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-teal-50 hover:border-teal-300'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-teal-50 hover:border-teal-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <IconChevronRight size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
