"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import LocationStructuredData from '@/components/seo/LocationStructuredData';
import Script from 'next/script';
import {
    IconArrowLeft,
    IconArrowRight,
    IconLoader2,
    IconMapPin,
    IconBuildingStore,
    IconSearch,
    IconCode,
    IconSpeakerphone,
    IconStar,
    IconUsers,
    IconChartBar,
    IconTargetArrow,
    IconDeviceMobile,
    IconBrandGoogle,
    IconPhoto,
    IconMessageCircle,
    IconClipboardCheck,
    IconRocket,
    IconShieldCheck,
    IconClock,
    IconTrendingUp,
    IconWorld,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
    IconMail,
    IconAd2,
    IconSettingsAutomation,
    IconPalette,
    IconServer,
    IconDatabase,
    IconBrandReact,
    IconBrandNodejs,
    IconBrandWordpress,
    IconDeviceDesktop,
    IconHeadset,
    IconBulb,
    IconAward,
    IconHeart,
    IconChecklist,
    IconFileDescription,
    IconPencil,
    IconBookmark,
    IconBrandHtml5,
    IconPlus,
    IconMinus,
    IconStarFilled,
    IconChecks,
    IconSend,
    IconPhone,
    IconUser
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

/* ────────── category config ────────── */
const CATEGORY_SERVICE_MAP = {
    'Google Business': 'google-my-business-listing',
    'Digital Marketing': 'digital-marketing',
    'Web Development': 'website-development',
    'Social Media': 'social-media-marketing',
    'Content Writing': 'content-marketing',
    'Wordpress Development': 'wordpress-development',
};

const CATEGORY_DISPLAY_MAP = {
    'Google Business': 'Google My Business',
    'Digital Marketing': 'Digital Marketing',
    'Web Development': 'Web Development',
    'Social Media': 'Social Media Marketing',
    'Content Writing': 'Content Writing',
    'Wordpress Development': 'WordPress Development',
};

const CATEGORY_CONFIG = {
    'Google Business': {
        theme: {
            primary: 'blue-600', light: 'blue-50', dark: 'blue-900', border: 'blue-200', accent: 'blue-100',
            gradient: 'from-slate-900/95 via-slate-800/90 to-blue-900/70',
            button: 'bg-blue-600 hover:bg-blue-700',
            ctaBg: 'bg-linear-to-r from-slate-900 to-blue-900',
            ctaText: 'text-blue-600',
            ctaLight: 'text-blue-100',
            iconText: 'text-blue-600',
            iconBg: 'bg-blue-100',
            badgeBg: 'bg-blue-100',
            badgeText: 'text-blue-800',
            statBg: 'bg-blue-50',
            formRing: 'focus:ring-blue-500',
            ratingsBase: 2540,
            projectsBase: 256,
        },
        backLink: '/market-we-serve/gmb',
        backLabel: 'GMB Services',
        heroImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80',
        benefits: [
            { icon: IconBrandGoogle, title: 'Google Visibility', desc: 'Get found on Google Search and Maps by local customers.' },
            { icon: IconStar, title: 'Reputation Management', desc: 'Build trust with positive reviews and ratings.' },
            { icon: IconPhoto, title: 'Visual Appeal', desc: 'Showcase your business with high-quality photos and virtual tours.' },
            { icon: IconMessageCircle, title: 'Customer Engagement', desc: 'Interact with customers through posts, Q&A, and messaging.' },
            { icon: IconChartBar, title: 'Performance Insights', desc: 'Track how customers find and interact with your listing.' },
            { icon: IconMapPin, title: 'Local SEO Boost', desc: 'Improve your local search rankings and map presence.' }
        ],
        services: [
            { title: 'GMB Profile Setup', features: ['Account creation & verification', 'Business information setup', 'Category optimization', 'Service area configuration'] },
            { title: 'Profile Optimization', features: ['Keyword-rich descriptions', 'Photo & video management', 'Product/Service listing', 'Attribute optimization'] },
            { title: 'Review Management', features: ['Review monitoring', 'Response management', 'Review generation strategy', 'Reputation tracking'] },
            { title: 'GMB Posts & Updates', features: ['Regular post creation', 'Event & offer posts', 'Product showcasing', 'Engagement tracking'] },
            { title: 'Local SEO Integration', features: ['Citation building', 'NAP consistency', 'Local link building', 'Schema markup'] },
            { title: 'Analytics & Reporting', features: ['Monthly performance reports', 'Competitor analysis', 'Search query insights', 'Customer action tracking'] }
        ],
        stats: [
            { value: '46%', label: 'of Google searches are local' },
            { value: '88%', label: 'visit a business within 24hrs' },
            { value: '76%', label: 'of local searches lead to a visit' },
            { value: '5X', label: 'more views with optimized GMB' }
        ],
        extras: {
            type: 'whyChooseUs',
            items: [
                { icon: IconAward, title: 'Certified Experts', desc: 'Google-certified professionals managing your profile.' },
                { icon: IconClock, title: 'Quick Turnaround', desc: 'Fast setup and optimization within days.' },
                { icon: IconHeadset, title: 'Dedicated Support', desc: 'Personal account manager for your business.' },
                { icon: IconTrendingUp, title: 'Proven Results', desc: 'Consistent growth in visibility and engagement.' }
            ]
        },
    },
    'Digital Marketing': {
        theme: {
            primary: 'orange-600', light: 'orange-50', dark: 'orange-900', border: 'orange-200', accent: 'orange-100',
            gradient: 'from-slate-900/95 via-slate-800/90 to-orange-900/70',
            button: 'bg-orange-600 hover:bg-orange-700',
            ctaBg: 'bg-linear-to-r from-slate-900 to-orange-900',
            ctaText: 'text-orange-600',
            ctaLight: 'text-orange-100',
            iconText: 'text-orange-600',
            iconBg: 'bg-orange-100',
            badgeBg: 'bg-orange-100',
            badgeText: 'text-orange-800',
            statBg: 'bg-orange-50',
            formRing: 'focus:ring-orange-500',
            ratingsBase: 3120,
            projectsBase: 340,
        },
        backLink: '/market-we-serve/marketing',
        backLabel: 'Digital Marketing',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        benefits: [
            { icon: IconTargetArrow, title: 'Targeted Reach', desc: 'Reach your ideal customers with precision targeting strategies.' },
            { icon: IconChartBar, title: 'Measurable Results', desc: 'Track every rupee spent with detailed analytics and ROI reporting.' },
            { icon: IconTrendingUp, title: 'Brand Growth', desc: 'Build a strong online brand presence across digital channels.' },
            { icon: IconUsers, title: 'Audience Engagement', desc: 'Create meaningful connections with your target audience.' },
            { icon: IconRocket, title: 'Fast Results', desc: 'See tangible results within weeks of campaign launch.' },
            { icon: IconShieldCheck, title: 'Competitive Edge', desc: 'Stay ahead of competitors with cutting-edge strategies.' }
        ],
        services: [
            { title: 'Search Engine Marketing', icon: IconBrandGoogle, features: ['Google Ads management', 'Keyword research & bidding', 'Ad copy optimization', 'Campaign analytics'] },
            { title: 'Social Media Marketing', icon: IconBrandFacebook, features: ['Platform strategy', 'Content creation', 'Community management', 'Paid social campaigns'] },
            { title: 'SEO Services', icon: IconSearch, features: ['On-page optimization', 'Technical SEO audit', 'Content strategy', 'Link building'] },
            { title: 'Content Marketing', icon: IconFileDescription, features: ['Blog creation', 'Infographic design', 'Video content', 'Content distribution'] },
            { title: 'Email Marketing', icon: IconMail, features: ['Campaign design', 'Automation setup', 'List segmentation', 'Performance tracking'] },
            { title: 'Analytics & Reporting', icon: IconChartBar, features: ['Custom dashboards', 'ROI tracking', 'Competitor analysis', 'Monthly reports'] }
        ],
        stats: [
            { value: '300%', label: 'average ROI on digital marketing' },
            { value: '80%', label: 'consumers research online first' },
            { value: '3.5B', label: 'Google searches per day' },
            { value: '54%', label: 'of social browsers use social media to research products' }
        ],
        extras: {
            type: 'channels',
            items: [
                { icon: IconBrandGoogle, title: 'Google Ads', desc: 'Pay-per-click advertising on the world\'s largest search engine.' },
                { icon: IconBrandFacebook, title: 'Facebook & Instagram', desc: 'Targeted social advertising with advanced audience targeting.' },
                { icon: IconBrandYoutube, title: 'YouTube Ads', desc: 'Video advertising to engage audiences on the second largest search engine.' },
                { icon: IconMail, title: 'Email Campaigns', desc: 'Personalized email marketing to nurture leads and drive conversions.' },
                { icon: IconAd2, title: 'Display Network', desc: 'Banner ads across millions of websites to build brand awareness.' },
                { icon: IconSearch, title: 'SEO & Content', desc: 'Organic strategies for long-term sustainable growth.' }
            ]
        }
    },
    'Web Development': {
        theme: {
            primary: 'purple-600', light: 'purple-50', dark: 'purple-900', border: 'purple-200', accent: 'purple-100',
            gradient: 'from-slate-900/95 via-slate-800/90 to-purple-900/70',
            button: 'bg-purple-600 hover:bg-purple-700',
            ctaBg: 'bg-linear-to-r from-slate-900 to-purple-900',
            ctaText: 'text-purple-600',
            ctaLight: 'text-purple-100',
            iconText: 'text-purple-600',
            iconBg: 'bg-purple-100',
            badgeBg: 'bg-purple-100',
            badgeText: 'text-purple-800',
            statBg: 'bg-purple-50',
            formRing: 'focus:ring-purple-500',
            ratingsBase: 1890,
            projectsBase: 185,
        },
        backLink: '/market-we-serve/web',
        backLabel: 'Web Development',
        heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80',
        benefits: [
            { icon: IconDeviceMobile, title: 'Responsive Design', desc: 'Websites that look perfect on every device and screen size.' },
            { icon: IconRocket, title: 'Fast Performance', desc: 'Lightning-fast loading speeds for better user experience.' },
            { icon: IconSearch, title: 'SEO Friendly', desc: 'Built with SEO best practices for higher search rankings.' },
            { icon: IconShieldCheck, title: 'Secure & Reliable', desc: 'Enterprise-grade security to protect your data and visitors.' },
            { icon: IconSettingsAutomation, title: 'Easy to Manage', desc: 'User-friendly CMS that makes content updates simple.' },
            { icon: IconPalette, title: 'Custom Design', desc: 'Unique designs tailored to your brand identity.' }
        ],
        services: [
            { title: 'Custom Web Development', features: ['Bespoke website design', 'Custom functionality', 'API integrations', 'Performance optimization'] },
            { title: 'E-Commerce Solutions', features: ['Online store setup', 'Payment gateway integration', 'Inventory management', 'Order tracking system'] },
            { title: 'CMS Development', features: ['WordPress development', 'Custom CMS solutions', 'Content migration', 'Plugin development'] },
            { title: 'Web Application Development', features: ['SaaS applications', 'Progressive web apps', 'Real-time features', 'Cloud deployment'] },
            { title: 'UI/UX Design', features: ['User research', 'Wireframing & prototyping', 'Visual design', 'Usability testing'] },
            { title: 'Maintenance & Support', features: ['Regular updates', 'Security monitoring', 'Performance optimization', 'Technical support'] }
        ],
        stats: [
            { value: '94%', label: 'of first impressions are design-related' },
            { value: '3s', label: 'page load time users expect' },
            { value: '75%', label: 'judge credibility by website design' },
            { value: '2X', label: 'more leads from optimized websites' }
        ],
        extras: {
            type: 'technologies',
            items: [
                { icon: IconBrandReact, title: 'React / Next.js', desc: 'Modern frontend frameworks for fast, interactive web applications.' },
                { icon: IconBrandNodejs, title: 'Node.js', desc: 'Scalable backend development with JavaScript runtime.' },
                { icon: IconBrandWordpress, title: 'WordPress', desc: 'Custom WordPress solutions for content management.' },
                { icon: IconBrandHtml5, title: 'HTML5 / CSS3', desc: 'Clean, semantic code with modern styling techniques.' },
                { icon: IconDatabase, title: 'Databases', desc: 'MySQL, MongoDB, PostgreSQL for robust data management.' },
                { icon: IconServer, title: 'Cloud Hosting', desc: 'AWS, DigitalOcean, and Vercel deployment solutions.' }
            ]
        }
    },
    'Social Media': {
        theme: {
            primary: 'pink-600', light: 'pink-50', dark: 'pink-900', border: 'pink-200', accent: 'pink-100',
            gradient: 'from-slate-900/95 via-slate-800/90 to-pink-900/70',
            button: 'bg-pink-600 hover:bg-pink-700',
            ctaBg: 'bg-linear-to-r from-slate-900 to-pink-900',
            ctaText: 'text-pink-600',
            ctaLight: 'text-pink-100',
            iconText: 'text-pink-600',
            iconBg: 'bg-pink-100',
            badgeBg: 'bg-pink-100',
            badgeText: 'text-pink-800',
            statBg: 'bg-pink-50',
            formRing: 'focus:ring-pink-500',
            ratingsBase: 2750,
            projectsBase: 290,
        },
        backLink: '/market-we-serve',
        backLabel: 'Markets We Serve',
        heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1920&q=80',
        benefits: [
            { icon: IconUsers, title: 'Audience Growth', desc: 'Grow your social following with organic and paid strategies.' },
            { icon: IconHeart, title: 'Brand Loyalty', desc: 'Build lasting relationships with your audience.' },
            { icon: IconBrandInstagram, title: 'Visual Storytelling', desc: 'Create compelling visual content that resonates.' },
            { icon: IconMessageCircle, title: 'Community Management', desc: 'Engage and nurture your online community.' },
            { icon: IconChartBar, title: 'Social Analytics', desc: 'Data-driven insights to optimize your strategy.' },
            { icon: IconTrendingUp, title: 'Viral Reach', desc: 'Create shareable content for maximum organic reach.' }
        ],
        services: [
            { title: 'Social Strategy', features: ['Platform selection', 'Content calendar', 'Audience research', 'Competitor analysis'] },
            { title: 'Content Creation', features: ['Graphic design', 'Video production', 'Copywriting', 'Story creation'] },
            { title: 'Community Management', features: ['Comment moderation', 'DM management', 'Crisis handling', 'Engagement tracking'] },
            { title: 'Paid Social Ads', features: ['Ad creative design', 'Audience targeting', 'Budget optimization', 'A/B testing'] },
            { title: 'Influencer Marketing', features: ['Influencer research', 'Campaign management', 'ROI measurement', 'Relationship building'] },
            { title: 'Reporting & Analytics', features: ['Monthly reports', 'Growth tracking', 'Engagement metrics', 'Sentiment analysis'] }
        ],
        stats: [
            { value: '4.9B', label: 'social media users worldwide' },
            { value: '2.5hrs', label: 'average daily social usage' },
            { value: '71%', label: 'consumers buy based on social referrals' },
            { value: '49%', label: 'consumers depend on influencer recommendations' }
        ],
        extras: null
    },
    'Content Writing': {
        theme: {
            primary: 'teal-600', light: 'teal-50', dark: 'teal-900', border: 'teal-200', accent: 'teal-100',
            gradient: 'from-slate-900/95 via-slate-800/90 to-teal-900/70',
            button: 'bg-teal-600 hover:bg-teal-700',
            ctaBg: 'bg-linear-to-r from-slate-900 to-teal-900',
            ctaText: 'text-teal-600',
            ctaLight: 'text-teal-100',
            iconText: 'text-teal-600',
            iconBg: 'bg-teal-100',
            badgeBg: 'bg-teal-100',
            badgeText: 'text-teal-800',
            statBg: 'bg-teal-50',
            formRing: 'focus:ring-teal-500',
            ratingsBase: 1650,
            projectsBase: 210,
        },
        backLink: '/market-we-serve',
        backLabel: 'Markets We Serve',
        heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80',
        benefits: [
            { icon: IconPencil, title: 'Professional Writing', desc: 'Expert writers crafting high-quality content for your business.' },
            { icon: IconSearch, title: 'SEO Content', desc: 'Keyword-optimized content that ranks on search engines.' },
            { icon: IconFileDescription, title: 'Diverse Formats', desc: 'Blogs, articles, web copy, whitepapers, and more.' },
            { icon: IconBulb, title: 'Creative Ideas', desc: 'Fresh, engaging content ideas that resonate with your audience.' },
            { icon: IconChecklist, title: 'Quality Assurance', desc: 'Thoroughly edited, plagiarism-free content every time.' },
            { icon: IconBookmark, title: 'Brand Voice', desc: 'Consistent tone and messaging across all content.' }
        ],
        services: [
            { title: 'Blog & Article Writing', features: ['Research & ideation', 'SEO-optimized writing', 'Editing & proofreading', 'Publishing support'] },
            { title: 'Website Copywriting', features: ['Landing page copy', 'Service page content', 'About us pages', 'Product descriptions'] },
            { title: 'Technical Writing', features: ['Documentation', 'User guides', 'API documentation', 'Whitepapers'] },
            { title: 'Social Media Content', features: ['Caption writing', 'Hashtag strategy', 'Content calendars', 'Platform-specific copy'] },
            { title: 'Email Copywriting', features: ['Newsletter content', 'Drip campaigns', 'Subject line optimization', 'Call-to-action writing'] },
            { title: 'Content Strategy', features: ['Audience research', 'Content planning', 'Editorial calendar', 'Performance analysis'] }
        ],
        stats: [
            { value: '72%', label: 'of marketers say content increases engagement' },
            { value: '3X', label: 'more leads from content marketing vs traditional' },
            { value: '60%', label: 'of consumers are inspired by custom content' },
            { value: '47%', label: 'of buyers read 3-5 pieces before engaging sales' }
        ],
        extras: null
    },
    'Wordpress Development': {
        theme: {
            primary: 'indigo-600', light: 'indigo-50', dark: 'indigo-900', border: 'indigo-200', accent: 'indigo-100',
            gradient: 'from-slate-900/95 via-slate-800/90 to-indigo-900/70',
            button: 'bg-indigo-600 hover:bg-indigo-700',
            ctaBg: 'bg-linear-to-r from-slate-900 to-indigo-900',
            ctaText: 'text-indigo-600',
            ctaLight: 'text-indigo-100',
            iconText: 'text-indigo-600',
            iconBg: 'bg-indigo-100',
            badgeBg: 'bg-indigo-100',
            badgeText: 'text-indigo-800',
            statBg: 'bg-indigo-50',
            formRing: 'focus:ring-indigo-500',
            ratingsBase: 2080,
            projectsBase: 175,
        },
        backLink: '/market-we-serve',
        backLabel: 'Markets We Serve',
        heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1920&q=80',
        benefits: [
            { icon: IconBrandWordpress, title: 'WordPress Expertise', desc: 'Certified WordPress developers for any project size.' },
            { icon: IconPalette, title: 'Custom Themes', desc: 'Bespoke theme development to match your brand.' },
            { icon: IconRocket, title: 'Performance Tuning', desc: 'Speed optimization for better user experience.' },
            { icon: IconShieldCheck, title: 'Security Hardening', desc: 'Comprehensive security measures to protect your site.' },
            { icon: IconSettingsAutomation, title: 'Plugin Development', desc: 'Custom plugins tailored to your specific needs.' },
            { icon: IconDeviceDesktop, title: 'Responsive Design', desc: 'Mobile-first designs that adapt to every screen.' }
        ],
        services: [
            { title: 'Custom Theme Development', features: ['PSD/Figma to WordPress', 'Responsive design', 'Theme customization', 'Child theme creation'] },
            { title: 'Plugin Development', features: ['Custom functionality', 'WooCommerce plugins', 'API integrations', 'Plugin optimization'] },
            { title: 'WooCommerce Solutions', features: ['Online store setup', 'Payment integration', 'Product management', 'Order workflow'] },
            { title: 'WordPress Migration', features: ['Site migration', 'Data transfer', 'URL redirect setup', 'Post-migration testing'] },
            { title: 'Speed Optimization', features: ['Caching setup', 'Image optimization', 'Database cleanup', 'CDN configuration'] },
            { title: 'Maintenance & Support', features: ['Core updates', 'Plugin updates', 'Security patches', 'Regular backups'] }
        ],
        stats: [
            { value: '43%', label: 'of websites use WordPress globally' },
            { value: '500M+', label: 'websites built with WordPress' },
            { value: '55K+', label: 'plugins available for functionality' },
            { value: '10K+', label: 'free themes to choose from' }
        ],
        extras: null
    }
};

/* ────────── category meta (SEO) ────────── */
const CATEGORY_META = {
    'Google Business': {
        titleTemplate: 'Best Google My Business Listing Services in {cityName} | 9990556217',
        description: 'Professional Google My Business listing and optimization services tailored to your local business needs. Reach our experts at +91 99905 56217 for top-notch GMB solutions.',
        keywordsTemplate: 'GMB listing company in {cityName}, Google My Business in {cityName}, local SEO services in {cityName}, Google Business Profile optimization in {cityName}, best GMB agency, Google Maps listing in {cityName}, local business listing, GMB experts in {cityName}',
        ogImage: 'https://www.digitalsolution360.in/gmb-og.webp',
        breadcrumbName: 'Google My Business {cityName}',
    },
    'Digital Marketing': {
        titleTemplate: 'Top Digital Marketing Company in {cityName} | 9990556217',
        description: 'Comprehensive digital marketing solutions to grow your brand and drive results. Reach our experts at +91 99905 56217 for data-driven digital marketing strategies.',
        keywordsTemplate: 'digital marketing company in {cityName}, best digital marketing agency in {cityName}, online marketing services in {cityName}, SEO company in {cityName}, PPC services in {cityName}, social media marketing in {cityName}, digital marketing experts, top marketing agency in {cityName}',
        ogImage: 'https://www.digitalsolution360.in/digital-marketing-og.webp',
        breadcrumbName: 'Digital Marketing {cityName}',
    },
    'Web Development': {
        titleTemplate: 'Access to Custom Web Development Company in {cityName} | 9990556217',
        description: 'Discover professional website development services tailored to your business needs. Reach our experts at +91 99905 56217 and ensure top-notch web solutions.',
        keywordsTemplate: 'website Development Company in {cityName}, find a website developer in {cityName}, guaranteed web design leads, top ecommerce website developers in {cityName}, professional custom web design, web mobile development services in {cityName}, custom website developers, website developers in {cityName}',
        ogImage: 'https://www.digitalsolution360.in/public/frontend/img/web-development-digitalsolution360.webp',
        breadcrumbName: 'Website Development {cityName}',
    },
    'Social Media': {
        titleTemplate: 'Best Social Media Marketing Company in {cityName} | 9990556217',
        description: 'Expert social media marketing services to build your brand and engage your audience. Reach our experts at +91 99905 56217 for impactful social media strategies.',
        keywordsTemplate: 'social media marketing company in {cityName}, social media agency in {cityName}, Instagram marketing in {cityName}, Facebook marketing in {cityName}, social media management in {cityName}, best social media experts, social media advertising in {cityName}, social media services in {cityName}',
        ogImage: 'https://www.digitalsolution360.in/social-media-og.webp',
        breadcrumbName: 'Social Media Marketing {cityName}',
    },
    'Content Writing': {
        titleTemplate: 'Professional Content Writing Services in {cityName} | 9990556217',
        description: 'High-quality content writing services that drive traffic, engage audiences, and boost conversions. Reach our experts at +91 99905 56217 for professional content solutions.',
        keywordsTemplate: 'content writing company in {cityName}, content writers in {cityName}, SEO content writing in {cityName}, blog writing services in {cityName}, professional copywriting in {cityName}, website content writing, best content agency in {cityName}, article writing services in {cityName}',
        ogImage: 'https://www.digitalsolution360.in/content-writing-og.webp',
        breadcrumbName: 'Content Writing {cityName}',
    },
    'Wordpress Development': {
        titleTemplate: 'Expert WordPress Development Company in {cityName} | 9990556217',
        description: 'Custom WordPress development solutions from themes to e-commerce stores. Reach our experts at +91 99905 56217 for professional WordPress services.',
        keywordsTemplate: 'WordPress development company in {cityName}, WordPress developer in {cityName}, custom WordPress themes in {cityName}, WooCommerce development in {cityName}, WordPress website design in {cityName}, WordPress experts, WordPress plugin development in {cityName}, WordPress agency in {cityName}',
        ogImage: 'https://www.digitalsolution360.in/wordpress-og.webp',
        breadcrumbName: 'WordPress Development {cityName}',
    },
};

/* ────────── main component ────────── */
export default function CityClientPage() {
    const params = useParams();
    const slug = params.slug;

    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);
    const [otherCities, setOtherCities] = useState([]);
    const [showAllOtherCities, setShowAllOtherCities] = useState(false);
    const [faqs, setFaqs] = useState([]);
    const [serviceCards, setServiceCards] = useState([]);

    useEffect(() => {
        async function fetchCity() {
            try {
                const res = await fetch(`${API_BASE}/cities/${slug}`);
                const json = await res.json();
                if (json.success && json.data) {
                    setCity(json.data);
                } else {
                    setError('not-found');
                }
            } catch (err) {
                console.error('Failed to fetch city data:', err);
                setError('fetch-error');
            } finally {
                setLoading(false);
            }
        }
        if (slug) fetchCity();
    }, [slug]);

    useEffect(() => {
        if (city && city.category_name) {
            const marketMap = {
                'Google Business': 'gmb',
                'Digital Marketing': 'marketing',
                'Web Development': 'web',
                'Social Media': 'social-media',
                'Content Writing': 'content-writing',
                'Wordpress Development': 'wordpress',
            };
            const endpoint = marketMap[city.category_name];
            if (endpoint) {
                fetch(`${API_BASE}/market/${endpoint}`)
                    .then(res => res.json())
                    .then(json => {
                        if (json.success) {
                            const currentState = json.data.find(s => s.name === city.state_name);
                            if (currentState) {
                                setOtherCities(currentState.cities.filter(c => c.slug !== slug));
                            }
                        }
                    })
                    .catch(() => { });
            }
        }
    }, [city, slug]);

    useEffect(() => {
        setShowAllOtherCities(false);
    }, [slug]);

    // Fetch FAQs from database (with city-specific override support)
    useEffect(() => {
        if (city && city.category_name) {
            fetch(`${API_BASE}/faqs?category=${encodeURIComponent(city.category_name)}&page_slug=${encodeURIComponent(slug)}`)
                .then(res => res.json())
                .then(json => {
                    if (json.success && json.data.length > 0) {
                        setFaqs(json.data.map(f => ({ q: f.question, a: f.answer })));
                    }
                })
                .catch(() => { });
        }
    }, [city, slug]);

    // Fetch service cards from database (with city-specific override support)
    useEffect(() => {
        if (city && city.category_name) {
            fetch(`${API_BASE}/service-cards?category=${encodeURIComponent(city.category_name)}&page_slug=${encodeURIComponent(slug)}`)
                .then(res => res.json())
                .then(json => {
                    if (json.success && json.data.length > 0) {
                        setServiceCards(json.data.map(c => ({ title: c.title, desc: c.description })));
                    }
                })
                .catch(() => { });
        }
    }, [city, slug]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            await fetch(`${API_URL}/contacts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    number: formData.phone,
                    message: formData.message || `[city_page] ${city?.city || slug}`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => {});
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone, message: formData.message || '',
                    _subject: `New Enquiry - ${city?.city || 'City Page'}`, _captcha: 'false', _template: 'table'
                })
            }).catch(() => {});
        } catch (err) { console.error('Form error:', err); }
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };

    /* ── Loading ── */
    if (loading) {
        return (
            <>
                <Header />
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <IconLoader2 className='w-12 h-12 text-blue-600 animate-spin mx-auto mb-4' />
                        <p className='text-gray-500 text-lg'>Loading page...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    /* ── Not Found ── */
    if (error || !city) {
        return (
            <>
                <Header />
                <div className='min-h-screen flex items-center justify-center px-4'>
                    <div className='text-center max-w-md'>
                        <h1 className='text-6xl font-bold text-gray-200 mb-4'>404</h1>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Page Not Found</h2>
                        <p className='text-gray-600 mb-8'>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                        <Link href='/market-we-serve' className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all'>
                            <IconArrowLeft className='w-5 h-5' />
                            Browse All Markets
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const config = CATEGORY_CONFIG[city.category_name];
    if (!config) {
        return (
            <>
                <Header />
                <div className='min-h-screen flex items-center justify-center px-4'>
                    <div className='text-center max-w-md'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Unsupported Category</h2>
                        <p className='text-gray-600 mb-8'>Category &quot;{city.category_name}&quot; is not yet configured.</p>
                        <Link href='/market-we-serve' className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all'>
                            <IconArrowLeft className='w-5 h-5' />
                            Browse All Markets
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const { theme, backLink, backLabel, heroImage, benefits, services, stats, extras } = config;
    const cityName = city.city;
    const stateName = city.state_name;

    // Dynamic ratings & projects based on city_id
    const dynamicRatings = (city.city_id + 1000).toLocaleString('en-IN');
    const dynamicProjects = `${Math.floor((city.city_id + theme.projectsBase) / 4)}+`;

    // Build breadcrumb chain
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: CATEGORY_DISPLAY_MAP[city.category_name], href: backLink },
        { label: stateName, href: backLink },
    ];
    if (city.is_metrocity && city.parent_city) {
        breadcrumbItems.push({ label: city.parent_city, href: `/${city.parent_city_slug}` });
    }
    breadcrumbItems.push({ label: cityName, href: null });

    // Dynamic SEO meta data — prefer DB fields, fall back to CATEGORY_META templates
    const catMeta = CATEGORY_META[city.category_name] || CATEGORY_META['Digital Marketing'];
    const baseUrl = 'https://www.digitalsolution360.in';
    const pageUrl = `${baseUrl}/${slug}`;
    const pageTitle = city.meta_title?.trim() || catMeta.titleTemplate.replace(/\{cityName\}/g, cityName);
    const pageDescription = city.meta_description?.trim() || catMeta.description;
    const pageKeywords = city.meta_keyword?.trim() || catMeta.keywordsTemplate.replace(/\{cityName\}/g, cityName);
    const ogKeywords = `${pageKeywords}, np digital marketing, gmb, semrush`;
    const visibleOtherCities = showAllOtherCities ? otherCities : otherCities.slice(0, 10);

    /* ── Page ── */
    return (
        <>
            <Header />

            {/* Dynamic Head Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:keywords" content={ogKeywords} />
            <meta property="og:image" content={catMeta.ogImage} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Digital Solution 360" />
            <link rel="canonical" href={pageUrl} />
            <meta name="name" content="digitalsolution360" />
            <meta name="url" content={baseUrl} />
            <meta name="document-type" content="Public" />
            <meta name="document-rating" content="Safe for Kids" />
            <meta name="document-distribution" content="Global" />
            <meta name="robots" content="NOODP,NOYDIR, index, follow" />
            <meta name="Reply-To" content="info@digitalsolution360.in" />
            <meta name="googlebot" content="index, follow" />
            <meta name="revisit-after" content="10 Days" />
            <meta name="Expires" content="never" />
            <meta name="netinsert" content="0.0.1.3.8.1" />
            <meta name="contactPhoneNumber" content="+91-9990556217" />

            {/* Structured Data */}
            <LocationStructuredData
                locationData={city}
                locationType="city"
                serviceType={CATEGORY_SERVICE_MAP[city.category_name] || 'digital-marketing'}
            />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": breadcrumbItems.map((item, idx) => ({
                        "@type": "ListItem",
                        "position": idx + 1,
                        "item": {
                            "@id": item.href
                                ? (item.href.startsWith('/') ? `${baseUrl}${item.href}` : item.href)
                                : pageUrl,
                            "name": item.label
                        }
                    }))
                })
            }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": pageTitle,
                    "description": pageDescription,
                    "url": pageUrl
                })
            }} />

            {/* Hero Section */}
            <section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className={`absolute inset-0 bg-linear-to-r ${theme.gradient} z-10`} />
                    <img src={heroImage} alt={city.city_name} className='w-full h-full object-cover' />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Link href={backLink} className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 mr-6 transition-colors'>
                            <IconArrowLeft className='w-5 h-5' />
                            Back to {backLabel}
                        </Link>

                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconMapPin className='w-4 h-4' />
                            {cityName}, {stateName}
                        </motion.span>

                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl'>
                            {city.city_name}
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Professional {city.category_name.toLowerCase()} services in {cityName}, {stateName}. DigitalSolution 360 helps local businesses grow their online presence.
                        </p>

                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                Get Free Consultation
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                        </div>

                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <IconStarFilled key={i} className='w-4 h-4 text-amber-400' />
                                    ))}
                                </div>
                                <div>
                                    <div className='text-2xl font-bold text-white'>{dynamicRatings}</div>
                                    <div className='text-sm text-gray-300'>Ratings</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <IconChecks className='w-6 h-6 text-emerald-400' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{dynamicProjects}</div>
                                    <div className='text-sm text-gray-300'>Projects Done</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='py-12 px-4 md:px-8 lg:px-16 -mt-8 relative z-30'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${theme.statBg} rounded-xl p-6 text-center shadow-lg`}
                            >
                                <div className={`text-3xl font-bold ${theme.iconText} mb-1`}>{stat.value}</div>
                                <div className='text-sm text-gray-600'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className='bg-gray-50 border-b border-gray-100 py-3 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <ol className='flex flex-wrap items-center gap-1 text-sm'>
                        {breadcrumbItems.map((item, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <li className='text-gray-400'>›</li>}
                                <li>
                                    {item.href ? (
                                        <Link href={item.href} className='text-gray-500 hover:text-gray-900 transition-colors'>
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className='text-gray-900 font-medium'>{item.label}</span>
                                    )}
                                </li>
                            </React.Fragment>
                        ))}
                    </ol>
                </div>
            </nav>

            {/* City Description with Sidebar */}
            {city.city_description && (
                <section className='py-16 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex flex-col lg:flex-row gap-8'>
                            {/* Left: 70% - Description */}
                            <div className='w-full lg:w-[70%]'>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
                                        {city.category_name} in {cityName}
                                    </h2>
                                    <div
                                        className='prose prose-lg max-w-none text-gray-700 leading-relaxed
                                            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4
                                            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-3
                                            [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-5 [&_h4]:mb-2
                                            [&_p]:mb-4 [&_p]:leading-relaxed
                                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
                                            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
                                            [&_li]:mb-2
                                            [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800
                                            [&_b]:font-semibold [&_b]:text-gray-900
                                            [&_strong]:font-semibold [&_strong]:text-gray-900
                                            [&_i]:italic'
                                        dangerouslySetInnerHTML={{ __html: city.city_description }}
                                    />
                                </motion.div>
                            </div>

                            {/* Right: 30% - Contact Form + Other Cities */}
                            <div className='w-full lg:w-[30%]'>
                                <div className='lg:sticky lg:top-24 space-y-6'>
                                    {/* Contact Form */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'
                                    >
                                        <h3 className='text-xl font-bold text-gray-900 mb-1'>Get Free Consultation</h3>
                                        <p className='text-sm text-gray-500 mb-4'>Talk to our {city.category_name.toLowerCase()} experts today</p>
                                        <form onSubmit={handleFormSubmit} className='space-y-3'>
                                            <div className='relative'>
                                                <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                                <input type='text' placeholder='Your Name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.formRing} text-sm`} />
                                            </div>
                                            <div className='relative'>
                                                <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                                <input type='tel' placeholder='Phone Number' required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.formRing} text-sm`} />
                                            </div>
                                            <div className='relative'>
                                                <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                                <input type='email' placeholder='Email Address' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.formRing} text-sm`} />
                                            </div>
                                            <textarea placeholder='Tell us about your requirements...' rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.formRing} text-sm resize-none`} />
                                            <button type='submit' className={`w-full ${theme.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                                                <IconSend className='w-4 h-4' />
                                                Send Enquiry
                                            </button>
                                            {formStatus === 'success' && (
                                                <p className='text-green-600 text-sm text-center font-medium'>Thank you! We&apos;ll contact you soon.</p>
                                            )}
                                        </form>
                                    </motion.div>

                                    {/* Other Cities in State */}
                                    {otherCities.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                            className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'
                                        >
                                            <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center gap-2'>
                                                <IconMapPin className={`w-5 h-5 ${theme.iconText}`} />
                                                Other Cities in {stateName}
                                            </h3>
                                            <div className='space-y-2'>
                                                {visibleOtherCities.map((c, index) => (
                                                    <Link
                                                        key={index}
                                                        href={`/${c.slug}`}
                                                        className='flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group'
                                                    >
                                                        <span className='text-sm font-medium text-gray-800 group-hover:text-gray-900'>{c.name}</span>
                                                        <IconArrowRight className='w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-colors' />
                                                    </Link>
                                                ))}
                                            </div>
                                            {otherCities.length > 10 && (
                                                <button
                                                    type='button'
                                                    onClick={() => setShowAllOtherCities((prev) => !prev)}
                                                    className='mt-3 w-full text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors'
                                                >
                                                    {showAllOtherCities ? 'Show Less' : `Show More (${otherCities.length - 10} more)`}
                                                </button>
                                            )}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* YouTube Video */}
            {city.yt_iframe_link && (
                <section className='py-16 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-4xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
                                Watch Our Work in {cityName}
                            </h2>
                            <div className='aspect-video rounded-2xl overflow-hidden shadow-2xl'>
                                <iframe
                                    src={city.yt_iframe_link}
                                    title={`${city.category_name} services in ${cityName}`}
                                    className='w-full h-full'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Service Cards from Content */}
            {serviceCards.length > 0 && (
                <section className='py-20 px-4 md:px-8 lg:px-16 bg-slate-900'>
                    <div className='max-w-7xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='text-center mb-16'
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
                                {city.category_name} Services in {cityName}
                            </h2>
                            <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
                                Explore our comprehensive {city.category_name.toLowerCase()} solutions designed for {cityName} businesses.
                            </p>
                            <div className='mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-teal-500 to-cyan-500' />
                        </motion.div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {serviceCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className='group rounded-xl bg-white/5 backdrop-blur-sm p-6 text-white ring-1 ring-white/10 hover:ring-teal-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                                >
                                    <div className='h-0.5 w-12 bg-linear-to-r from-teal-400 to-cyan-400 rounded-full mb-4' />
                                    <h3 className='text-lg font-semibold mb-3'>{card.title.replace(/\{cityName\}/g, cityName)}</h3>
                                    <p className='text-slate-300 text-sm leading-relaxed'>{card.desc.replace(/\{cityName\}/g, cityName)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <span className={`inline-block ${theme.badgeBg} ${theme.badgeText} px-4 py-2 rounded-lg text-sm font-semibold mb-4`}>
                            Why {cityName} Businesses Choose Us
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Benefits of {city.category_name} in {cityName}
                        </h2>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                                >
                                    <div className={`w-14 h-14 ${theme.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className={`w-7 h-7 ${theme.iconText}`} stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                                    <p className='text-gray-600'>{benefit.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Our {city.category_name} Services in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            Comprehensive {city.category_name.toLowerCase()} solutions tailored for {cityName} businesses.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {services.map((service, index) => {
                            const ServiceIcon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className='bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group'
                                >
                                    {ServiceIcon && (
                                        <div className={`w-12 h-12 ${theme.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                                            <ServiceIcon className={`w-6 h-6 ${theme.iconText}`} stroke={1.5} />
                                        </div>
                                    )}
                                    <h3 className='text-xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                                    <ul className='space-y-2'>
                                        {service.features.map((feature, i) => (
                                            <li key={i} className='flex items-center gap-2 text-gray-600'>
                                                <IconArrowRight className={`w-4 h-4 ${theme.iconText} shrink-0`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Extras Section (category-specific) */}
            {extras && extras.type === 'whyChooseUs' && (
                <section className='py-20 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                            >
                                <img src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' alt={`Why choose us for ${city.category_name} in ${cityName}`} className='w-full h-full object-cover' />
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
                                    Why Choose Us for {city.category_name} in {cityName}?
                                </h2>
                                <div className='space-y-6'>
                                    {extras.items.map((item, index) => {
                                        const ExIcon = item.icon;
                                        return (
                                            <div key={index} className='flex gap-4'>
                                                <div className={`w-12 h-12 ${theme.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                                                    <ExIcon className={`w-6 h-6 ${theme.iconText}`} stroke={1.5} />
                                                </div>
                                                <div>
                                                    <h3 className='text-lg font-bold text-gray-900 mb-1'>{item.title}</h3>
                                                    <p className='text-gray-600'>{item.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {extras && extras.type === 'channels' && (
                <section className='py-20 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-7xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='text-center mb-16'
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                                Marketing Channels We Leverage
                            </h2>
                            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                                Multi-channel strategies to maximize your reach in {cityName}.
                            </p>
                        </motion.div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {extras.items.map((channel, index) => {
                                const ChIcon = channel.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`${theme.statBg} rounded-xl p-6 border border-${theme.border} shadow-lg hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <ChIcon className={`w-10 h-10 ${theme.iconText} mb-4`} stroke={1.5} />
                                        <h3 className='text-xl font-bold text-gray-900 mb-2'>{channel.title}</h3>
                                        <p className='text-gray-600'>{channel.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {extras && extras.type === 'technologies' && (
                <section className='py-20 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-7xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='text-center mb-16'
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                                Technologies We Use
                            </h2>
                            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                                Modern tech stack for building powerful websites for {cityName} businesses.
                            </p>
                        </motion.div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {extras.items.map((tech, index) => {
                                const TechIcon = tech.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className='bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300'
                                    >
                                        <div className={`w-16 h-16 ${theme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                            <TechIcon className={`w-8 h-8 ${theme.iconText}`} stroke={1.5} />
                                        </div>
                                        <h3 className='text-xl font-bold text-gray-900 mb-2'>{tech.title}</h3>
                                        <p className='text-gray-600'>{tech.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className='py-20 px-4 md:px-8 lg:px-16 bg-white'>
                    <div className='max-w-4xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='text-center mb-12'
                        >
                            <span className={`inline-block ${theme.badgeBg} ${theme.badgeText} text-sm font-semibold px-4 py-2 rounded-full mb-4`}>
                                FAQs
                            </span>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                                Frequently Asked Questions
                            </h2>
                            <p className='text-xl text-gray-600'>
                                Common questions about our {city.category_name.toLowerCase()} services in {cityName}
                            </p>
                        </motion.div>

                        <div className='space-y-4'>
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className='bg-gray-50 rounded-2xl overflow-hidden'
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className='w-full flex items-center justify-between p-6 text-left'
                                    >
                                        <span className='text-lg font-semibold text-gray-900 pr-4'>
                                            {faq.q.replace(/\{cityName\}/g, cityName)}
                                        </span>
                                        <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? `${theme.badgeBg} ${theme.badgeText}` : 'bg-gray-200 text-gray-600'}`}>
                                            {openFaq === index ? <IconMinus size={20} /> : <IconPlus size={20} />}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className='px-6 pb-6 text-gray-600 leading-relaxed'>
                                                    {faq.a.replace(/\{cityName\}/g, cityName)}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className={`py-16 px-4 md:px-8 lg:px-16 ${theme.ctaBg}`}>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Grow Your Business in {cityName}?
                        </h2>
                        <p className='text-xl text-gray-300 mb-8'>
                            Let our {city.category_name.toLowerCase()} experts help you dominate the {cityName} market.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Started Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Schema Structured Data */}
            {faqs.length > 0 && (
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q.replace(/\{cityName\}/g, cityName),
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a.replace(/\{cityName\}/g, cityName)
                            }
                        }))
                    })
                }} />
            )}

            <Footer />
        </>
    );
}
