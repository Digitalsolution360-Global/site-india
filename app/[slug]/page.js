"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
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
    IconMinus
} from '@tabler/icons-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

/* ────────── category config ────────── */
const CATEGORY_CONFIG = {
    'Google Business': {
        theme: {
            primary: 'blue-600', light: 'blue-50', dark: 'blue-900', border: 'blue-200', accent: 'blue-100',
            gradient: 'from-blue-900/95 via-blue-800/90 to-transparent',
            button: 'bg-blue-600 hover:bg-blue-700',
            ctaBg: 'bg-blue-600',
            ctaText: 'text-blue-600',
            ctaLight: 'text-blue-100',
            iconText: 'text-blue-600',
            iconBg: 'bg-blue-100',
            badgeBg: 'bg-blue-100',
            badgeText: 'text-blue-800',
            statBg: 'bg-blue-50',
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
        faqs: [
            { q: 'What is Google My Business and why does my {cityName} business need it?', a: 'Google My Business (GMB) is a free tool by Google that lets you manage how your business appears on Google Search and Maps. For businesses in {cityName}, an optimized GMB profile ensures you show up when local customers search for your services, driving foot traffic and calls.' },
            { q: 'How long does it take to set up and verify a GMB profile in {cityName}?', a: 'We typically complete the full setup within 2–3 business days. Google verification via postcard takes 5–14 days, though we also assist with phone or email verification when available for {cityName} businesses.' },
            { q: 'Can you help manage reviews for my {cityName} business?', a: 'Absolutely. Our review management service includes monitoring new reviews, crafting professional responses, and implementing strategies to encourage satisfied customers in {cityName} to leave positive feedback.' },
            { q: 'How do you optimize a GMB listing for {cityName}?', a: 'We optimize every element — business description with local keywords, categories, service areas, photos, posts, Q&A, and attributes — all tailored specifically for the {cityName} market to maximize your local visibility.' },
            { q: 'Do you provide GMB services for multiple locations in {cityName}?', a: 'Yes, we manage multi-location GMB profiles for businesses with several branches across {cityName}. Each location gets individually optimized content, photos, and review management.' },
            { q: 'What results can I expect from GMB optimization in {cityName}?', a: 'Most {cityName} businesses see a 2–5× increase in profile views, map appearances, and customer actions (calls, direction requests, website visits) within the first 2–3 months of optimization.' }
        ]
    },
    'Digital Marketing': {
        theme: {
            primary: 'orange-600', light: 'orange-50', dark: 'orange-900', border: 'orange-200', accent: 'orange-100',
            gradient: 'from-orange-900/95 via-orange-800/90 to-transparent',
            button: 'bg-orange-600 hover:bg-orange-700',
            ctaBg: 'bg-orange-600',
            ctaText: 'text-orange-600',
            ctaLight: 'text-orange-100',
            iconText: 'text-orange-600',
            iconBg: 'bg-orange-100',
            badgeBg: 'bg-orange-100',
            badgeText: 'text-orange-800',
            statBg: 'bg-orange-50',
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
        },
        faqs: [
            { q: 'What digital marketing services do you offer in {cityName}?', a: 'We provide a full suite of digital marketing services in {cityName} including SEO, Google Ads, social media marketing, content marketing, email campaigns, and performance analytics — all tailored to your local market.' },
            { q: 'How much should a {cityName} business budget for digital marketing?', a: 'Budgets vary based on goals, competition, and industry. For most {cityName} small businesses, we recommend starting with ₹15,000–₹50,000/month and scaling as you see ROI. We create custom plans that maximize every rupee.' },
            { q: 'How soon will I see results from digital marketing in {cityName}?', a: 'Paid campaigns (Google/Social Ads) can generate leads within days. SEO and content marketing typically show significant results within 3–6 months. We provide monthly reports so you can track progress for your {cityName} business.' },
            { q: 'Do you create marketing strategies specific to {cityName}?', a: 'Yes, every strategy is customized for {cityName}. We research local competition, audience behavior, and market trends to create campaigns that resonate with your specific {cityName} customer base.' },
            { q: 'How do you measure ROI for digital marketing campaigns?', a: 'We track key metrics including leads generated, cost per acquisition, conversion rates, website traffic, and revenue attribution. You get a clear monthly dashboard showing exactly how your {cityName} campaigns are performing.' },
            { q: 'Can you handle both B2B and B2C marketing in {cityName}?', a: 'Absolutely. We have experience running successful campaigns for both B2B and B2C businesses in {cityName}. Each requires different strategies, platforms, and messaging — and we tailor our approach accordingly.' }
        ]
    },
    'Web Development': {
        theme: {
            primary: 'purple-600', light: 'purple-50', dark: 'purple-900', border: 'purple-200', accent: 'purple-100',
            gradient: 'from-purple-900/95 via-purple-800/90 to-transparent',
            button: 'bg-purple-600 hover:bg-purple-700',
            ctaBg: 'bg-purple-600',
            ctaText: 'text-purple-600',
            ctaLight: 'text-purple-100',
            iconText: 'text-purple-600',
            iconBg: 'bg-purple-100',
            badgeBg: 'bg-purple-100',
            badgeText: 'text-purple-800',
            statBg: 'bg-purple-50',
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
        },
        faqs: [
            { q: 'How long does it take to build a website for a {cityName} business?', a: 'A standard business website takes 3–6 weeks depending on complexity. E-commerce sites or custom web applications for {cityName} clients may take 6–12 weeks. We provide a detailed timeline during the planning phase.' },
            { q: 'What technologies do you use for web development in {cityName}?', a: 'We work with modern technologies including React, Next.js, Node.js, WordPress, and more. For {cityName} businesses, we recommend the best tech stack based on your specific needs, budget, and scalability requirements.' },
            { q: 'Will my website be mobile-friendly and SEO-optimized?', a: 'Every website we build is fully responsive (mobile-first design) and follows SEO best practices. This ensures your {cityName} business ranks well on Google and provides a great experience on all devices.' },
            { q: 'Do you offer website maintenance for {cityName} businesses?', a: 'Yes, we offer ongoing maintenance packages that include security updates, content changes, performance monitoring, backups, and technical support — keeping your {cityName} website running smoothly 24/7.' },
            { q: 'How much does a website cost for a {cityName} business?', a: 'Website costs depend on scope and features. A basic business website starts from ₹15,000, while custom e-commerce or web applications can range from ₹50,000–₹2,00,000+. We provide detailed quotes for {cityName} clients after understanding your requirements.' },
            { q: 'Can you redesign my existing {cityName} business website?', a: 'Absolutely. We offer complete website redesign services that modernize your look, improve performance, and enhance user experience — all while preserving your SEO rankings and existing content for your {cityName} online presence.' }
        ]
    },
    'Social Media': {
        theme: {
            primary: 'pink-600', light: 'pink-50', dark: 'pink-900', border: 'pink-200', accent: 'pink-100',
            gradient: 'from-pink-900/95 via-pink-800/90 to-transparent',
            button: 'bg-pink-600 hover:bg-pink-700',
            ctaBg: 'bg-pink-600',
            ctaText: 'text-pink-600',
            ctaLight: 'text-pink-100',
            iconText: 'text-pink-600',
            iconBg: 'bg-pink-100',
            badgeBg: 'bg-pink-100',
            badgeText: 'text-pink-800',
            statBg: 'bg-pink-50',
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
        extras: null,
        faqs: [
            { q: 'Which social media platforms should my {cityName} business be on?', a: 'It depends on your audience. For most {cityName} businesses, we recommend Instagram and Facebook as a starting point. B2B companies benefit from LinkedIn, while consumer brands can leverage YouTube and Twitter. We help you choose the right mix.' },
            { q: 'How often should we post on social media?', a: 'We recommend 4–5 posts per week on Instagram/Facebook and 2–3 on LinkedIn for {cityName} businesses. Consistency matters more than frequency — our content calendars ensure you maintain a strong, regular presence.' },
            { q: 'Do you create the content or do we need to provide it?', a: 'We handle everything — from graphic design and video creation to copywriting and hashtag strategy. Our team creates all social media content for your {cityName} business, though we love incorporating your insights and brand knowledge.' },
            { q: 'How do you measure social media success for {cityName} businesses?', a: 'We track engagement rates, follower growth, reach, impressions, click-through rates, and lead generation. Monthly reports show you exactly how your {cityName} social media presence is growing and driving business results.' },
            { q: 'Can social media marketing generate leads for my {cityName} business?', a: 'Yes! With the right strategy, social media is a powerful lead generation tool. We use targeted ads, lead forms, compelling CTAs, and retargeting campaigns to convert your {cityName} social audience into paying customers.' },
            { q: 'Do you manage paid social media ads for {cityName} businesses?', a: 'Absolutely. We manage full paid social campaigns on Facebook, Instagram, LinkedIn, and YouTube for {cityName} businesses — including audience targeting, creative design, A/B testing, and budget optimization for maximum ROI.' }
        ]
    },
    'Content Writing': {
        theme: {
            primary: 'teal-600', light: 'teal-50', dark: 'teal-900', border: 'teal-200', accent: 'teal-100',
            gradient: 'from-teal-900/95 via-teal-800/90 to-transparent',
            button: 'bg-teal-600 hover:bg-teal-700',
            ctaBg: 'bg-teal-600',
            ctaText: 'text-teal-600',
            ctaLight: 'text-teal-100',
            iconText: 'text-teal-600',
            iconBg: 'bg-teal-100',
            badgeBg: 'bg-teal-100',
            badgeText: 'text-teal-800',
            statBg: 'bg-teal-50',
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
        extras: null,
        faqs: [
            { q: 'What types of content writing services do you offer in {cityName}?', a: 'We provide blog posts, website copy, product descriptions, social media content, email newsletters, whitepapers, case studies, and more — all crafted specifically for {cityName} businesses and their target audiences.' },
            { q: 'Is the content SEO-optimized for {cityName} searches?', a: 'Yes, every piece of content is optimized with relevant keywords, local {cityName} search terms, proper heading structure, meta descriptions, and internal linking to improve your search engine rankings.' },
            { q: 'How do you ensure content quality and originality?', a: 'All content goes through a rigorous process — research, writing, editing, and plagiarism checking. We use professional writers experienced in various industries and every piece is 100% original and tailored for your {cityName} business.' },
            { q: 'How much content can you produce monthly for my {cityName} business?', a: 'Our packages range from 4–20+ pieces of content per month depending on your needs. For most {cityName} businesses, we recommend 8–12 blog posts/articles per month along with website copy and social content for optimal results.' },
            { q: 'Do you write in regional languages for {cityName} audiences?', a: 'Yes, we offer content writing in multiple Indian languages including Hindi, along with English. For {cityName} businesses targeting local audiences, multilingual content helps you connect with a wider customer base.' },
            { q: 'What is your revision policy for content writing?', a: 'We offer 2 rounds of free revisions on every piece of content. Our writers work closely with your {cityName} team to understand your brand voice, ensuring minimal revisions are needed and content meets your expectations.' }
        ]
    },
    'Wordpress Development': {
        theme: {
            primary: 'indigo-600', light: 'indigo-50', dark: 'indigo-900', border: 'indigo-200', accent: 'indigo-100',
            gradient: 'from-indigo-900/95 via-indigo-800/90 to-transparent',
            button: 'bg-indigo-600 hover:bg-indigo-700',
            ctaBg: 'bg-indigo-600',
            ctaText: 'text-indigo-600',
            ctaLight: 'text-indigo-100',
            iconText: 'text-indigo-600',
            iconBg: 'bg-indigo-100',
            badgeBg: 'bg-indigo-100',
            badgeText: 'text-indigo-800',
            statBg: 'bg-indigo-50',
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
        extras: null,
        faqs: [
            { q: 'Why should my {cityName} business choose WordPress?', a: 'WordPress powers 43% of all websites globally. For {cityName} businesses, it offers an easy-to-manage CMS, thousands of plugins, SEO-friendly architecture, and cost-effective development — making it ideal for businesses of all sizes.' },
            { q: 'Do you build custom themes or use pre-built ones for {cityName} clients?', a: 'We offer both options. For unique brand identities, we build custom themes from scratch. For budget-conscious {cityName} businesses, we customize premium pre-built themes to match your brand — both options deliver professional results.' },
            { q: 'Can you build an e-commerce store with WooCommerce for my {cityName} business?', a: 'Absolutely. We specialize in WooCommerce development for {cityName} businesses — including product catalog setup, payment gateway integration (Razorpay, PayU, etc.), shipping configuration, and inventory management.' },
            { q: 'How do you ensure WordPress security for {cityName} business websites?', a: 'We implement multiple security layers — SSL certificates, security plugins, firewall setup, regular malware scanning, automatic backups, and strong access controls. Your {cityName} business website stays protected 24/7.' },
            { q: 'Will my WordPress site be fast and SEO-friendly?', a: 'Yes. We optimize every WordPress site for speed — caching, image compression, CDN setup, and clean code. Combined with SEO plugins and proper structure, your {cityName} website will rank well and load quickly.' },
            { q: 'Do you offer WordPress maintenance packages for {cityName} businesses?', a: 'Yes, our maintenance plans include core/plugin updates, daily backups, security monitoring, uptime tracking, and content updates. {cityName} businesses get peace of mind knowing their website is professionally maintained.' }
        ]
    }
};

/* ────────── main component ────────── */
export default function CityServicePage() {
    const params = useParams();
    const slug = params.slug;

    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

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

    /* ── Page ── */
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[70vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
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

                        <div className='flex flex-wrap gap-4'>
                            <Link href='/contact-us' className={`${theme.button} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                                Get Free Consultation
                            </Link>
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

            {/* City Description (from DB) */}
            {city.city_description && (
                <section className='py-16 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-7xl mx-auto'>
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
            {config.faqs && (
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
                            {config.faqs.map((faq, index) => (
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
                        <p className={`text-xl ${theme.ctaLight} mb-8`}>
                            Let our {city.category_name.toLowerCase()} experts help you dominate the {cityName} market.
                        </p>
                        <Link
                            href='/contact-us'
                            className={`inline-block bg-white ${theme.ctaText} px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                        >
                            Get Started Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
