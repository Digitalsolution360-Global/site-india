"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import {
    IconMenu2, IconX, IconChevronDown, IconChevronRight, IconPhone, IconArrowRight,
    IconTargetArrow, IconCode, IconSearch,
    IconBrandInstagram, IconBrush, IconSettingsAutomation, IconBriefcase
} from '@tabler/icons-react'

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

/* ─── Services data for mega menu ─── */
const navServices = [
    {
        name: 'Digital Marketing', href: '/digital-marketing', icon: IconTargetArrow, desc: 'Data-driven campaigns for growth', bg: 'bg-blue-50', text: 'text-blue-600',
        subs: [
            { name: 'Performance Marketing', href: '/digital-marketing/performance-marketing' },
            { name: 'Growth Marketing', href: '/digital-marketing/growth-marketing' },
            { name: 'Google Ads Management', href: '/digital-marketing/google-ads-management' },
            { name: 'Facebook & Instagram Ads', href: '/digital-marketing/facebook-instagram-ads' },
        ]
    },
    {
        name: 'Website Development', href: '/website-development', icon: IconCode, desc: 'Custom websites & applications', bg: 'bg-emerald-50', text: 'text-emerald-600',
        subs: [
            { name: 'Web Design Services', href: '/website-development/web-design' },
            { name: 'UI/UX Design', href: '/website-development/ui-ux-design' },
            { name: 'WordPress Development', href: '/website-development/wordpress-development' },
            { name: 'Shopify Development', href: '/website-development/shopify-development' },
            { name: 'Landing Page Design', href: '/website-development/landing-page-design' },
        ]
    },
    {
        name: 'SEO Services', href: '/seo', icon: IconSearch, desc: 'Rank higher on search engines', bg: 'bg-orange-50', text: 'text-orange-600',
        subs: [
            { name: 'Local SEO', href: '/seo/local-seo' },
            { name: 'Ecommerce SEO', href: '/seo/ecommerce-seo' },
            { name: 'Technical SEO', href: '/seo/technical-seo' },
            { name: 'On Page SEO', href: '/seo/on-page-seo' },
            { name: 'Off Page SEO', href: '/seo/off-page-seo' },
            { name: 'SEO Audit', href: '/seo/seo-audit' },
            { name: 'AI SEO', href: '/seo/ai-seo' },
        ]
    },
    {
        name: 'Branding Services', href: '/branding', icon: IconBrush, desc: 'Build a powerful brand identity', bg: 'bg-violet-50', text: 'text-violet-600',
        subs: [
            { name: 'Brand Identity Design', href: '/branding/brand-identity-design' },
            { name: 'Logo Design', href: '/branding/logo-design' },
            { name: 'Graphic Design', href: '/branding/graphic-design' },
            { name: 'Creative for Ads', href: '/branding/creative-for-ads' },
            { name: 'Performance Creatives', href: '/branding/performance-creatives' },
        ]
    },
    {
        name: 'Social Media', href: '/social-media-marketing', icon: IconBrandInstagram, desc: 'Build & engage your community', bg: 'bg-pink-50', text: 'text-pink-600',
        subs: [
            { name: 'Social Media Management', href: '/social-media-marketing/social-media-management' },
            { name: 'Instagram Marketing', href: '/social-media-marketing/instagram-marketing' },
            { name: 'Facebook Marketing', href: '/social-media-marketing/facebook-marketing' },
            { name: 'LinkedIn Marketing', href: '/social-media-marketing/linkedin-marketing' },
            { name: 'YouTube Marketing', href: '/social-media-marketing/youtube-marketing' },
            { name: 'Influencer Marketing', href: '/social-media-marketing/influencer-marketing' },
            { name: 'Short Video Marketing', href: '/social-media-marketing/short-video-marketing' },
        ]
    },
    {
        name: 'Automation', href: '/automation', icon: IconSettingsAutomation, desc: 'Streamline your business operations', bg: 'bg-indigo-50', text: 'text-indigo-600',
        subs: [
            { name: 'Marketing Automation', href: '/automation/marketing-automation' },
            { name: 'CRM Automation', href: '/automation/crm-automation' },
            { name: 'Lead Automation', href: '/automation/lead-automation' },
            { name: 'Email Automation', href: '/automation/email-automation' },
            { name: 'Sales Funnel Automation', href: '/automation/sales-funnel-automation' },
            { name: 'AI Marketing Automation', href: '/automation/ai-marketing-automation' },
        ]
    },
    {
        name: 'Managed Services', href: '/managed-services', icon: IconBriefcase, desc: 'End-to-end managed marketing', bg: 'bg-teal-50', text: 'text-teal-600',
        subs: [
            { name: 'Digital Marketing Managed', href: '/managed-services/digital-marketing-managed' },
            { name: 'SEO Managed Services', href: '/managed-services/seo-managed' },
            { name: 'PPC Managed Services', href: '/managed-services/ppc-managed' },
            { name: 'Social Media Managed', href: '/managed-services/social-media-managed' },
            { name: 'Startup Marketing', href: '/managed-services/startup-marketing' },
            { name: 'SaaS Marketing', href: '/managed-services/saas-marketing' },
            { name: 'Ecommerce Marketing', href: '/managed-services/ecommerce-marketing' },
            { name: 'B2B Marketing', href: '/managed-services/b2b-marketing' },
        ]
    },
];

function Header() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [searchServices, setSearchServices] = useState([]);
    const [searchStates, setSearchStates] = useState([]);
    const [searchCities, setSearchCities] = useState([]);
    const [selectedService, setSelectedService] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [citiesLoading, setCitiesLoading] = useState(false);
    const ref = useRef(null);

    const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    /* Prevent body scroll when overlay is open */
    useEffect(() => {
        document.body.style.overflow = (showForm || showThankYou || mobileOpen || showSearch) ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [showForm, showThankYou, mobileOpen, showSearch]);

    /* Auto-close thank you modal */
    useEffect(() => {
        if (showThankYou) {
            const t = setTimeout(() => setShowThankYou(false), 5000);
            return () => clearTimeout(t);
        }
    }, [showThankYou]);

    /* Fetch search dropdown options when search opens */
    useEffect(() => {
        if (showSearch && searchServices.length === 0) {
            fetch(`${API_BASE}/search/options`)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        setSearchServices(json.data.services || []);
                        setSearchStates(json.data.states || []);
                    }
                })
                .catch(() => {});
        }
    }, [showSearch]);

    /* Fetch cities when state changes */
    useEffect(() => {
        if (selectedState) {
            setCitiesLoading(true);
            setSearchCities([]);
            setSelectedCity('');
            fetch(`${API_BASE}/search/cities/${selectedState}`)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        let cities = json.data || [];
                        if (selectedService) {
                            cities = cities.filter(c => c.category_name === selectedService);
                        }
                        // Deduplicate by city name
                        const seen = new Set();
                        cities = cities.filter(c => {
                            const k = c.city + '_' + c.category_name;
                            if (seen.has(k)) return false;
                            seen.add(k);
                            return true;
                        });
                        setSearchCities(cities);
                    }
                })
                .catch(() => {})
                .finally(() => setCitiesLoading(false));
        } else {
            setSearchCities([]);
            setSelectedCity('');
        }
    }, [selectedState, selectedService]);

    const handleSearch = () => {
        if (selectedCity) {
            setShowSearch(false);
            router.push(`/${selectedCity}`);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        try {
            await fetch('https://formsubmit.co/globalweb3600@gmail.com', { method: 'POST', body: formData });
            setShowForm(false);
            setShowThankYou(true);
            form.reset();
        } catch (err) {
            console.error('Error:', err);
            alert('Something went wrong. Please try again.');
        }
    };

    /* nav link helper */
    const navItem = (id, label, href) => (
        <li key={id} className="relative">
            <Link
                href={href}
                onMouseEnter={() => { setHovered(id); setServicesOpen(false); }}
                className="relative px-4 py-2 text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors inline-block"
            >
                {hovered === id && (
                    <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-gray-100/80 rounded-lg"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                )}
                <span className="relative z-10">{label}</span>
            </Link>
        </li>
    );

    return (
        <header ref={ref}>

            {/* ━━━ Animated gradient accent bar ━━━ */}
            {/* <div className="fixed top-0 left-0 right-0 h-0.5 z-60 overflow-hidden">
                <motion.div
                    className="h-full w-[200%]"
                    style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)' }}
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
            </div> */}

            {/* ━━━━━━━━━━━━━━━ DESKTOP NAV ━━━━━━━━━━━━━━━ */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className={`fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_-8px_rgba(0,0,0,0.08)]'
                        : 'bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 xl:px-10">
                    <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-[72px]'}`}>

                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <motion.img
                                src="/logo.png"
                                alt="Digital Solution 360"
                                className={`transition-all duration-500 ${scrolled ? 'h-9' : 'h-11'}`}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            />
                        </Link>

                        {/* Center Navigation */}
                        <nav className="flex-1 flex justify-center" onMouseLeave={() => setHovered(null)}>
                            <ul className="flex items-center gap-0.5">
                                {navItem('about', 'About', '/about-us')}

                                {/* Services with mega menu */}
                                <li
                                    className="relative"
                                    onMouseEnter={() => { setHovered('services'); setServicesOpen(true); }}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <button className="relative px-4 py-2 text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1 cursor-pointer">
                                        {hovered === 'services' && (
                                            <motion.div
                                                layoutId="navPill"
                                                className="absolute inset-0 bg-gray-100/80 rounded-lg"
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">Services</span>
                                        <IconChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Mega Dropdown */}
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden"
                                                onMouseEnter={() => setServicesOpen(true)}
                                                onMouseLeave={() => { setServicesOpen(false); setHoveredService(null); }}
                                            >
                                                {/* Gradient top accent */}
                                                {/* <div className="h-[3px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" /> */}

                                                <div className="flex">
                                                    {/* Left: Categories */}
                                                    <div className="w-[280px] p-3 border-r border-gray-100">
                                                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2 px-2">Our Services</p>
                                                        {navServices.map((svc) => {
                                                            const SvcIcon = svc.icon;
                                                            const isActive = hoveredService === svc.name;
                                                            return (
                                                                <Link
                                                                    key={svc.name}
                                                                    href={svc.href}
                                                                    onMouseEnter={() => setHoveredService(svc.name)}
                                                                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-150 group/svc ${isActive ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                                                                >
                                                                    <div className={`${svc.bg} p-2 rounded-lg shrink-0 group-hover/svc:scale-105 transition-transform`}>
                                                                        <SvcIcon size={16} className={svc.text} stroke={1.5} />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm font-semibold text-gray-900 truncate">{svc.name}</p>
                                                                    </div>
                                                                    <IconChevronRight size={14} className={`shrink-0 transition-colors ${isActive ? 'text-gray-600' : 'text-gray-300'}`} />
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Right: Sub-services */}
                                                    <div className="flex-1 p-4">
                                                        {navServices.map((svc) => (
                                                            hoveredService === svc.name && (
                                                                <div key={svc.name}>
                                                                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2 px-1">{svc.name}</p>
                                                                    <div className="grid grid-cols-2 gap-1">
                                                                        {svc.subs.map((sub) => (
                                                                            <Link
                                                                                key={sub.name}
                                                                                href={sub.href}
                                                                                className="px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group/sub"
                                                                            >
                                                                                <p className="text-[13px] font-medium text-gray-700 group-hover/sub:text-blue-600 transition-colors">{sub.name}</p>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )
                                                        ))}
                                                        {!hoveredService && (
                                                            <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                                                                Hover a category to see sub-services
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Dropdown footer */}
                                                <div className="bg-gray-50/80 px-6 py-3 flex items-center justify-between border-t border-gray-100">
                                                    <span className="text-xs text-gray-400">Explore all our solutions</span>
                                                    <Link href="/services" className="text-[13px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/link">
                                                        View All
                                                        <IconArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>

                                {navItem('portfolio', 'Portfolio', '/case-studies')}
                                {navItem('careers', 'Careers', '/careers')}
                                {navItem('blogs', 'Blogs', '/blog')}
                                {navItem('contact', 'Contact', '/contact-us')}
                            </ul>
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={() => setShowSearch(true)}
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                                aria-label="Search"
                            >
                                <IconSearch size={16} className="text-gray-600" stroke={1.8} />
                            </button>

                            <Link
                                href="tel:+919990556217"
                                className="hidden xl:flex items-center gap-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group/phone"
                            >
                                <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center group-hover/phone:bg-blue-100 group-hover/phone:scale-105 transition-all">
                                    <IconPhone size={16} className="text-blue-600" stroke={1.8} />
                                </div>
                                <span>+91 99905 56217</span>
                            </Link>

                            <div className="hidden xl:block w-px h-6 bg-gray-200" />

                            <button
                                onClick={() => setShowForm(true)}
                                className="relative group/cta cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-px active:translate-y-0 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-1.5">
                                    Get a Quote
                                    <IconArrowRight size={15} className="group-hover/cta:translate-x-0.5 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 w-full h-full"
                                    initial={{ x: '-100%', opacity: 0 }}
                                    animate={{ x: ['100%', '100%', '-100%'], opacity: [0, 0.35, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', transform: 'skewX(-20deg)' }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* ━━━━━━━━━━━━━━━ MOBILE NAV BAR ━━━━━━━━━━━━━━━ */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="fixed top-2 left-3 right-3 lg:hidden z-50 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)]"
            >
                <div className="flex items-center justify-between px-4 py-3.5">
                    <Link href="/">
                        <img src="/logo.png" alt="Digital Solution 360" className="h-9" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowSearch(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                            aria-label="Search"
                        >
                            <IconSearch size={18} className="text-gray-600" />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <IconX size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <IconMenu2 size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* ━━━━━━━━━━━━━━━ MOBILE FULL-SCREEN OVERLAY ━━━━━━━━━━━━━━━ */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 lg:hidden z-40 bg-white"
                    >
                        <nav className="pt-24 px-6 pb-8 h-full flex flex-col overflow-y-auto">
                            <ul className="flex flex-col gap-1 flex-1">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'About', href: '/about-us' },
                                    { name: 'Services', href: '#', hasDropdown: true },
                                    { name: 'Portfolio', href: '/case-studies' },
                                    { name: 'Careers', href: '/careers' },
                                    { name: 'Blogs', href: '/blogs' },
                                    { name: 'Contact', href: '/contact-us' },
                                ].map((item, i) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.1 }}
                                    >
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setServicesOpen(!servicesOpen)}
                                                    className="w-full flex items-center justify-between py-3.5 px-4 text-lg font-semibold text-gray-900 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                    {item.name}
                                                    <IconChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-2 py-2 space-y-0.5">
                                                                {navServices.map((svc) => {
                                                                    const SIcon = svc.icon;
                                                                    const isCatExpanded = mobileExpandedCat === svc.name;
                                                                    return (
                                                                        <div key={svc.name}>
                                                                            <button
                                                                                onClick={() => setMobileExpandedCat(isCatExpanded ? null : svc.name)}
                                                                                className="w-full flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                                                                            >
                                                                                <div className="flex items-center gap-3">
                                                                                    <div className={`${svc.bg} p-2 rounded-lg`}>
                                                                                        <SIcon size={16} className={svc.text} stroke={1.5} />
                                                                                    </div>
                                                                                    <span className="text-gray-700 font-medium">{svc.name}</span>
                                                                                </div>
                                                                                <IconChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isCatExpanded ? 'rotate-180' : ''}`} />
                                                                            </button>
                                                                            <AnimatePresence>
                                                                                {isCatExpanded && (
                                                                                    <motion.div
                                                                                        initial={{ height: 0, opacity: 0 }}
                                                                                        animate={{ height: 'auto', opacity: 1 }}
                                                                                        exit={{ height: 0, opacity: 0 }}
                                                                                        transition={{ duration: 0.2 }}
                                                                                        className="overflow-hidden"
                                                                                    >
                                                                                        <div className="ml-10 py-1 space-y-0.5">
                                                                                            <Link href={svc.href} onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-gray-50 text-sm text-gray-600 font-medium">
                                                                                                View All {svc.name}
                                                                                            </Link>
                                                                                            {svc.subs.map((sub) => (
                                                                                                <Link key={sub.name} href={sub.href} onClick={() => setMobileOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-gray-50 text-sm text-gray-600">
                                                                                                    {sub.name}
                                                                                                </Link>
                                                                                            ))}
                                                                                        </div>
                                                                                    </motion.div>
                                                                                )}
                                                                            </AnimatePresence>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block py-3.5 px-4 text-lg font-semibold text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Mobile Bottom Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-6 space-y-3 border-t border-gray-100"
                            >
                                <Link
                                    href="tel:+919990556217"
                                    className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    <IconPhone size={18} stroke={1.8} />
                                    +91 99905 56217
                                </Link>
                                <button
                                    onClick={() => { setMobileOpen(false); setShowForm(true); }}
                                    className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-4 py-3.5 font-semibold shadow-lg shadow-blue-600/20 relative overflow-hidden"
                                >
                                    <span className="relative z-10">Get a Quote</span>
                                    <motion.div
                                        className="absolute inset-0 w-full h-full"
                                        initial={{ x: '-100%', opacity: 0 }}
                                        animate={{ x: ['100%', '100%', '-100%'], opacity: [0, 0.35, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
                                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', transform: 'skewX(-20deg)' }}
                                    />
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ━━━━━━━━━━━━━━━ POPUP FORM ━━━━━━━━━━━━━━━ */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-60 p-4"
                        onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
                        >
                            {/* Gradient accent */}
                            <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all hover:rotate-90 duration-200 cursor-pointer"
                            >
                                <IconX size={15} />
                            </button>

                            <div className="p-7 pt-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Get a Quote</h2>
                                <p className="text-gray-500 text-sm mb-7">Fill in your details and we&apos;ll get back to you shortly.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="hidden" name="_subject" value="New Quote Request - Digital Solution 360" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                                        <input
                                            type="text" id="name" name="name" required placeholder="John Doe"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                                        <input
                                            type="email" id="email" name="email" required placeholder="john@company.com"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                                        <input
                                            type="tel" id="phone" name="phone" required pattern="[0-9]{10,15}" placeholder="9876543210"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-px active:translate-y-0 transition-all duration-300 mt-2"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ━━━━━━━━━━━━━━━ THANK YOU MODAL ━━━━━━━━━━━━━━━ */}
            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-60 p-4"
                        onClick={(e) => { if (e.target === e.currentTarget) setShowThankYou(false); }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative p-8 text-center"
                        >
                            <button
                                onClick={() => setShowThankYou(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all hover:rotate-90 duration-200 cursor-pointer"
                            >
                                <IconX size={15} />
                            </button>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                                className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5"
                            >
                                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <motion.path
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    />
                                </svg>
                            </motion.div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                            <p className="text-gray-600 mb-1">Your request has been submitted successfully.</p>
                            <p className="text-gray-400 text-sm">We&apos;ll get back to you shortly.</p>

                            {/* Countdown progress bar */}
                            <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                                    initial={{ width: '100%' }}
                                    animate={{ width: '0%' }}
                                    transition={{ duration: 5, ease: 'linear' }}
                                />
                            </div>
                            <p className="text-gray-400 text-xs mt-2">Closing automatically...</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ━━━━━━━━━━━━━━━ SEARCH MODAL ━━━━━━━━━━━━━━━ */}
            <AnimatePresence>
                {showSearch && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center z-60 p-4 pt-24 md:pt-32"
                        onClick={(e) => { if (e.target === e.currentTarget) setShowSearch(false); }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden"
                        >
                            <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

                            <button
                                onClick={() => setShowSearch(false)}
                                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all hover:rotate-90 duration-200 cursor-pointer z-10"
                            >
                                <IconX size={15} />
                            </button>

                            <div className="p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">Find Services in Your City</h2>
                                <p className="text-gray-500 text-sm mb-6">Select a service, state, and city to find our local solutions.</p>

                                <div className="flex flex-col md:flex-row gap-4 mb-6">
                                    {/* Service Dropdown */}
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service</label>
                                        <select
                                            value={selectedService}
                                            onChange={(e) => setSelectedService(e.target.value)}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm cursor-pointer"
                                        >
                                            <option value="">All Services</option>
                                            {searchServices.map((svc) => (
                                                <option key={svc.category_name} value={svc.category_name}>
                                                    {svc.category_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* State Dropdown */}
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                                        <select
                                            value={selectedState}
                                            onChange={(e) => setSelectedState(e.target.value)}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm cursor-pointer"
                                        >
                                            <option value="">Select State</option>
                                            {searchStates.map((st) => (
                                                <option key={st.state_id} value={st.state_id}>
                                                    {st.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* City Dropdown */}
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                                        <select
                                            value={selectedCity}
                                            onChange={(e) => setSelectedCity(e.target.value)}
                                            disabled={!selectedState || citiesLoading}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <option value="">
                                                {citiesLoading ? 'Loading...' : !selectedState ? 'Select state first' : 'Select City'}
                                            </option>
                                            {searchCities.map((city, i) => (
                                                <option key={i} value={city.city_slug}>
                                                    {city.city}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <button
                                    onClick={handleSearch}
                                    disabled={!selectedCity}
                                    className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-px active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                                >
                                    <IconSearch size={18} />
                                    Search
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header
