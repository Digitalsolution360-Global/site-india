"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import serviceCategories from '@/app/services/serviceData';
import {
    IconArrowRight, IconCheck, IconPlus, IconMinus, IconArrowLeft,
    IconStarFilled, IconChecks, IconTrendingUp, IconBulb, IconRocket,
    IconUsers, IconSend, IconPhone, IconUser, IconMail,
    IconBuildingStore, IconDeviceDesktop, IconShieldCheck, IconClock
} from '@tabler/icons-react';

const COLOR_MAP = {
    blue: { gradient: 'from-slate-900/95 via-slate-800/90 to-blue-900/70', ctaGrad: 'from-slate-900 to-blue-900', badge: 'bg-blue-100 text-blue-800', iconBg: 'bg-blue-100', iconText: 'text-blue-600', stat: 'bg-blue-50', ring: 'focus:ring-blue-500', hoverBg: 'hover:bg-blue-50', border: 'border-blue-200', lightBg: 'bg-blue-50', btn: 'bg-blue-600 hover:bg-blue-700', accent: 'text-blue-600', accentBg: 'bg-blue-600' },
    emerald: { gradient: 'from-slate-900/95 via-slate-800/90 to-emerald-900/70', ctaGrad: 'from-slate-900 to-emerald-900', badge: 'bg-emerald-100 text-emerald-800', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', stat: 'bg-emerald-50', ring: 'focus:ring-emerald-500', hoverBg: 'hover:bg-emerald-50', border: 'border-emerald-200', lightBg: 'bg-emerald-50', btn: 'bg-emerald-600 hover:bg-emerald-700', accent: 'text-emerald-600', accentBg: 'bg-emerald-600' },
    orange: { gradient: 'from-slate-900/95 via-slate-800/90 to-orange-900/70', ctaGrad: 'from-slate-900 to-orange-900', badge: 'bg-orange-100 text-orange-800', iconBg: 'bg-orange-100', iconText: 'text-orange-600', stat: 'bg-orange-50', ring: 'focus:ring-orange-500', hoverBg: 'hover:bg-orange-50', border: 'border-orange-200', lightBg: 'bg-orange-50', btn: 'bg-orange-600 hover:bg-orange-700', accent: 'text-orange-600', accentBg: 'bg-orange-600' },
    violet: { gradient: 'from-slate-900/95 via-slate-800/90 to-violet-900/70', ctaGrad: 'from-slate-900 to-violet-900', badge: 'bg-violet-100 text-violet-800', iconBg: 'bg-violet-100', iconText: 'text-violet-600', stat: 'bg-violet-50', ring: 'focus:ring-violet-500', hoverBg: 'hover:bg-violet-50', border: 'border-violet-200', lightBg: 'bg-violet-50', btn: 'bg-violet-600 hover:bg-violet-700', accent: 'text-violet-600', accentBg: 'bg-violet-600' },
    pink: { gradient: 'from-slate-900/95 via-slate-800/90 to-pink-900/70', ctaGrad: 'from-slate-900 to-pink-900', badge: 'bg-pink-100 text-pink-800', iconBg: 'bg-pink-100', iconText: 'text-pink-600', stat: 'bg-pink-50', ring: 'focus:ring-pink-500', hoverBg: 'hover:bg-pink-50', border: 'border-pink-200', lightBg: 'bg-pink-50', btn: 'bg-pink-600 hover:bg-pink-700', accent: 'text-pink-600', accentBg: 'bg-pink-600' },
    indigo: { gradient: 'from-slate-900/95 via-slate-800/90 to-indigo-900/70', ctaGrad: 'from-slate-900 to-indigo-900', badge: 'bg-indigo-100 text-indigo-800', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', stat: 'bg-indigo-50', ring: 'focus:ring-indigo-500', hoverBg: 'hover:bg-indigo-50', border: 'border-indigo-200', lightBg: 'bg-indigo-50', btn: 'bg-indigo-600 hover:bg-indigo-700', accent: 'text-indigo-600', accentBg: 'bg-indigo-600' },
    teal: { gradient: 'from-slate-900/95 via-slate-800/90 to-teal-900/70', ctaGrad: 'from-slate-900 to-teal-900', badge: 'bg-teal-100 text-teal-800', iconBg: 'bg-teal-100', iconText: 'text-teal-600', stat: 'bg-teal-50', ring: 'focus:ring-teal-500', hoverBg: 'hover:bg-teal-50', border: 'border-teal-200', lightBg: 'bg-teal-50', btn: 'bg-teal-600 hover:bg-teal-700', accent: 'text-teal-600', accentBg: 'bg-teal-600' },
};

const CATEGORY_CONTENT = {
    'digital-marketing': {
        overview: 'In today\'s hyper-competitive digital landscape, simply having an online presence isn\'t enough. You need data-driven digital marketing strategies that cut through the noise, reach the right audience, and convert clicks into customers. At DigitalSolution 360, we combine cutting-edge technology with creative excellence to build marketing engines that drive sustainable, measurable growth for your business.',
        whyChoose: [
            { title: 'ROI-Focused Approach', desc: 'Every campaign is optimized for maximum return on investment. We track every rupee spent and ensure it works hard for your business.' },
            { title: 'Multi-Channel Expertise', desc: 'From Google Ads and Facebook to programmatic advertising and email marketing — we master every channel that matters.' },
            { title: 'Dedicated Account Team', desc: 'A dedicated strategist, creative designer, and media buyer work exclusively on your campaigns with weekly performance reviews.' },
            { title: 'Transparent Reporting', desc: 'Real-time dashboards and detailed monthly reports so you always know exactly how your campaigns are performing.' },
        ],
        industries: ['Ecommerce & Retail', 'SaaS & Technology', 'Healthcare & Pharma', 'Real Estate', 'Education & EdTech', 'Finance & Banking', 'Hospitality & Travel', 'Manufacturing'],
        processSteps: [
            { title: 'Discovery & Audit', desc: 'We analyze your current marketing, competitors, and target audience to identify the biggest growth opportunities.' },
            { title: 'Strategy & Planning', desc: 'Our team builds a detailed campaign roadmap with channel mix, budget allocation, creative direction, and KPIs.' },
            { title: 'Launch & Optimize', desc: 'Campaigns go live with continuous A/B testing, bid optimization, audience refinement, and creative iteration.' },
            { title: 'Scale & Report', desc: 'We double down on what works — scaling winning campaigns while providing transparent, data-rich performance reports.' },
        ],
        faqs: [
            { q: 'What digital marketing channels do you specialize in?', a: 'We specialize in Google Ads (Search, Display, Shopping, YouTube), Facebook & Instagram Ads, LinkedIn Ads, programmatic advertising, email marketing, and performance marketing across all major platforms.' },
            { q: 'How much budget do I need to start?', a: 'We work with businesses of all sizes. Our campaigns can start with budgets as low as ₹25,000/month for small businesses, though we recommend ₹50,000+ for optimal results. We\'ll help you determine the right budget based on your goals.' },
            { q: 'How quickly will I see results from digital marketing?', a: 'Paid advertising campaigns typically show initial results within 1-2 weeks. Optimized, high-performing campaigns usually take 4-6 weeks to mature as we gather data and refine targeting. We set clear expectations during onboarding.' },
            { q: 'Do you provide weekly reporting?', a: 'Yes. You\'ll receive access to a real-time dashboard tracking all key metrics. Additionally, we send weekly performance summaries and conduct detailed monthly strategy reviews with your dedicated account manager.' },
            { q: 'Can you help with both lead generation and ecommerce?', a: 'Absolutely. We have dedicated teams for lead generation (B2B/B2C) and ecommerce marketing. Our strategies are tailored based on whether you need leads, online sales, app installs, or brand awareness.' },
        ],
    },
    'web-development': {
        overview: 'Your website is your most powerful sales tool — working 24/7 to represent your brand, engage visitors, and convert them into customers. At DigitalSolution 360, we build custom websites that aren\'t just visually stunning but are engineered for speed, SEO performance, and conversion optimization. From simple business sites to complex web applications, we deliver solutions that grow with your business.',
        whyChoose: [
            { title: 'Performance-First Build', desc: 'Every site scores 90+ on Google PageSpeed. We optimize for Core Web Vitals to ensure lightning-fast load times.' },
            { title: 'SEO-Ready Architecture', desc: 'Clean code, proper schema markup, optimized meta structure, and mobile-first design — built to rank from day one.' },
            { title: 'Conversion Optimized', desc: 'Strategic UX design with clear CTAs, intuitive navigation, and trust signals that turn visitors into customers.' },
            { title: 'Full-Stack Expertise', desc: 'React, Next.js, WordPress, Shopify, custom CMS — we choose the right technology stack for your specific business needs.' },
        ],
        industries: ['Ecommerce & D2C', 'SaaS & Startups', 'Healthcare & Clinics', 'Real Estate & PropTech', 'Education & Coaching', 'Restaurants & Hospitality', 'Professional Services', 'Non-Profits & NGOs'],
        processSteps: [
            { title: 'Discovery & Wireframing', desc: 'We understand your goals, target audience, and competitors to create detailed wireframes and information architecture.' },
            { title: 'UI/UX Design', desc: 'Pixel-perfect designs with your brand identity, optimized user flows, and mobile-responsive layouts in Figma.' },
            { title: 'Development & Testing', desc: 'Clean, scalable code with rigorous cross-browser testing, performance optimization, and security hardening.' },
            { title: 'Launch & Support', desc: 'Smooth deployment with post-launch monitoring, analytics setup, and ongoing maintenance and support.' },
        ],
        faqs: [
            { q: 'How long does it take to build a website?', a: 'A standard business website takes 3-5 weeks. Custom web applications take 6-12 weeks depending on complexity. We provide a detailed timeline during the discovery phase and keep you updated throughout development.' },
            { q: 'Will my website be mobile-responsive?', a: 'Absolutely. Every website we build is mobile-first and responsive across all devices — phones, tablets, laptops, and desktops. We test on 20+ device combinations to ensure a perfect experience everywhere.' },
            { q: 'Do you provide website maintenance and support?', a: 'Yes. We offer monthly maintenance packages that include security updates, performance monitoring, content updates, and technical support. Prices start at ₹5,000/month depending on your needs.' },
            { q: 'Can you redesign my existing website?', a: 'Yes, website redesigns are one of our most popular services. We\'ll audit your current site, identify issues, and rebuild it with modern design, better performance, and improved conversion optimization.' },
            { q: 'Which technologies do you use?', a: 'We work with React/Next.js, WordPress, Shopify, Webflow, and custom PHP/Node.js solutions. The technology choice depends on your specific needs — we\'ll recommend the best fit during consultation.' },
        ],
    },
    'seo': {
        overview: 'Search Engine Optimization is the most cost-effective, long-term marketing channel available. When done right, SEO compounds over time — driving a steady stream of highly qualified organic traffic to your website without paying per click. At DigitalSolution 360, we\'ve helped businesses across 50+ industries dominate Google search results with white-hat, data-driven SEO strategies that deliver lasting results.',
        whyChoose: [
            { title: 'Proven SEO Framework', desc: 'Our systematic approach has generated over 10 million organic visitors for our clients. We follow a proven process that works across all industries.' },
            { title: 'Technical + Content', desc: 'We combine deep technical SEO expertise with high-quality content strategy — the two pillars of sustainable organic growth.' },
            { title: 'Transparent Link Building', desc: 'Only white-hat, editorial backlinks from real websites. We never use PBNs, link farms, or any tactics that risk penalties.' },
            { title: 'Revenue-Focused SEO', desc: 'We don\'t just chase rankings — we optimize for keywords that actually drive revenue, leads, and conversions for your business.' },
        ],
        industries: ['Ecommerce & D2C', 'SaaS & Technology', 'Healthcare & Medical', 'Legal & Law Firms', 'Real Estate', 'Education & Online Courses', 'Finance & Insurance', 'Local Businesses'],
        processSteps: [
            { title: 'SEO Audit & Research', desc: 'Comprehensive technical audit, keyword research, competitor analysis, and content gap identification to build the roadmap.' },
            { title: 'On-Page Optimization', desc: 'Optimize page titles, meta descriptions, headers, content structure, internal linking, schema markup, and Core Web Vitals.' },
            { title: 'Content & Link Building', desc: 'Create high-quality, keyword-targeted content and earn authoritative backlinks through outreach and digital PR.' },
            { title: 'Monitor & Scale', desc: 'Track rankings, traffic, and conversions. Continuously refine the strategy and expand to new keyword opportunities.' },
        ],
        faqs: [
            { q: 'How long does SEO take to show results?', a: 'SEO is a long-term investment. You\'ll typically see initial improvements in 2-3 months, with significant traffic and ranking gains by 4-6 months. Competitive keywords may take 6-12 months. But unlike paid ads, results compound over time.' },
            { q: 'Is SEO worth it compared to paid ads?', a: 'Absolutely. While paid ads give instant results, SEO provides sustainable traffic that compounds over time. After 6-12 months, organic traffic typically delivers the lowest cost-per-lead of any channel. We recommend a combined approach for best results.' },
            { q: 'Do you guarantee first-page rankings?', a: 'No ethical SEO agency can guarantee rankings — Google\'s algorithm considers 200+ factors. What we do guarantee is a transparent, proven process, consistent effort, and measurable improvement in organic traffic and leads every quarter.' },
            { q: 'What\'s included in your SEO services?', a: 'Our SEO services include technical SEO audit and fixes, keyword research, on-page optimization, content creation, link building, local SEO (if applicable), monthly reporting, and ongoing strategy refinement.' },
            { q: 'Will SEO work for my local business?', a: 'Yes! Local SEO is one of our core specialties. We optimize your Google Business Profile, build local citations, target location-based keywords, and help you rank in the "map pack" for searches in your service area.' },
        ],
    },
    'branding': {
        overview: 'Your brand is more than a logo — it\'s the complete experience customers have with your business. At DigitalSolution 360, we craft powerful brand identities that connect emotionally with your audience, differentiate you from competitors, and build lasting recognition. From startups building their first identity to established businesses rebranding for growth, we bring strategic thinking and creative execution to every project.',
        whyChoose: [
            { title: 'Strategy-Led Design', desc: 'Every design decision is backed by market research, audience analysis, and competitive positioning — not just aesthetics.' },
            { title: 'Full Brand Systems', desc: 'We deliver complete brand systems — logo, colors, typography, imagery guidelines, and templates — everything you need to stay consistent.' },
            { title: 'Performance Creatives', desc: 'Our ad creatives are designed for performance. We A/B test designs and optimize for engagement, CTR, and conversions.' },
            { title: 'Fast Turnaround', desc: 'Logo concepts in 5 days. Full brand identity in 2-3 weeks. Ad creatives in 48 hours. We move fast without compromising quality.' },
        ],
        industries: ['Startups & D2C Brands', 'Ecommerce & Retail', 'Technology & SaaS', 'Food & Beverage', 'Fashion & Lifestyle', 'Healthcare & Wellness', 'Real Estate & Construction', 'Corporate & B2B'],
        processSteps: [
            { title: 'Brand Discovery', desc: 'Understand your vision, values, target audience, competitors, and market positioning through a detailed brand workshop.' },
            { title: 'Creative Exploration', desc: 'Develop multiple design concepts, mood boards, and initial logo directions based on the brand strategy.' },
            { title: 'Design & Refinement', desc: 'Refine the chosen direction with iterations on logo, colors, typography, and create the full brand identity system.' },
            { title: 'Brand Delivery', desc: 'Deliver complete brand guidelines, all file formats, templates, and brand collateral ready for immediate use across all channels.' },
        ],
        faqs: [
            { q: 'How much does branding cost?', a: 'Logo design starts at ₹15,000. A complete brand identity package (logo, brand guidelines, stationery, social media templates) ranges from ₹50,000 to ₹2,00,000 depending on scope and complexity.' },
            { q: 'How many logo concepts will I receive?', a: 'We typically present 3-5 initial logo concepts based on the brand strategy. You can then select your favorite direction, and we\'ll refine it through up to 3 rounds of revisions until it\'s perfect.' },
            { q: 'Do you do rebranding for existing businesses?', a: 'Yes, rebranding is one of our specialties. Whether you need a complete overhaul or a strategic refresh, we\'ll audit your current brand, research the market, and create a new identity that positions you for growth.' },
            { q: 'Can you create ad creatives and social media posts?', a: 'Absolutely. We create performance-optimized ad creatives for Google, Facebook, Instagram, and LinkedIn, plus social media content templates that your team can use daily.' },
            { q: 'What file formats will I receive?', a: 'You\'ll receive all files in AI, EPS, SVG, PNG, JPG, and PDF formats — suitable for print, web, social media, and any other application. Plus complete brand guidelines documentation.' },
        ],
    },
    'social-media-marketing': {
        overview: 'Social media is where your customers spend their time — and where your brand needs to show up with authenticity, creativity, and consistency. At DigitalSolution 360, we don\'t just post content; we build communities, drive engagement, and turn followers into loyal customers. Our team manages end-to-end social media strategy across Instagram, Facebook, LinkedIn, YouTube, and more.',
        whyChoose: [
            { title: 'Platform-Native Strategy', desc: 'Each platform has its own language. We create tailored strategies for Instagram, LinkedIn, YouTube, and more — not one-size-fits-all.' },
            { title: 'Creative Content Engine', desc: 'Our in-house creative team produces scroll-stopping reels, carousels, stories, and videos that drive real engagement.' },
            { title: 'Community Management', desc: 'We don\'t just post and leave. Active community management including comment replies, DMs, and reputation monitoring.' },
            { title: 'Influencer Network', desc: 'Access to our vetted network of 500+ influencers across niches — from nano-influencers to celebrities.' },
        ],
        industries: ['Fashion & Lifestyle', 'Food & Restaurants', 'Beauty & Skincare', 'Fitness & Wellness', 'Education & Coaching', 'SaaS & Technology', 'Ecommerce & D2C', 'Real Estate'],
        processSteps: [
            { title: 'Audit & Strategy', desc: 'Analyze your current social presence, competitors, and audience to build a tailored content and growth strategy.' },
            { title: 'Content Calendar', desc: 'Create a monthly content calendar with post types, captions, hashtags, and posting schedule for each platform.' },
            { title: 'Create & Publish', desc: 'Our creative team produces all content — photos, videos, reels, carousels, stories — and publishes on schedule.' },
            { title: 'Engage & Report', desc: 'Active community management plus monthly performance reports with insights and strategy recommendations.' },
        ],
        faqs: [
            { q: 'Which social media platforms should my business be on?', a: 'It depends on your audience and industry. B2C brands typically benefit from Instagram and Facebook. B2B companies should focus on LinkedIn. Visual brands thrive on YouTube and Pinterest. We\'ll recommend the right mix during our strategy session.' },
            { q: 'How many posts will you create per month?', a: 'Our standard packages include 12-20 posts per month per platform (3-5 per week) plus stories and reels. We can scale up based on your needs and budget. All content is custom-created — never stock or recycled.' },
            { q: 'Do you handle influencer campaigns?', a: 'Yes. We have a vetted network of 500+ influencers across various niches. We handle everything from influencer identification and negotiation to campaign execution, content approval, and performance tracking.' },
            { q: 'Can you manage paid social ads too?', a: 'Absolutely. We offer integrated packages combining organic social media management with paid social advertising for maximum impact. Our ad team works closely with the content team for consistent messaging.' },
            { q: 'How do you measure social media success?', a: 'We track engagement rate, follower growth, reach, impressions, website clicks, lead generation, and ultimately revenue attributed to social media. Monthly reports include all metrics with actionable insights.' },
        ],
    },
    'automation': {
        overview: 'Manual marketing tasks are eating up your team\'s time and preventing you from scaling. DigitalSolution 360\'s marketing automation services eliminate repetitive work, personalize customer journeys at scale, and ensure no lead ever falls through the cracks. From CRM setup and email sequences to AI-powered chatbots and sales funnels — we build systems that work while you sleep.',
        whyChoose: [
            { title: 'Platform Agnostic', desc: 'We work with all major automation platforms — HubSpot, Salesforce, ActiveCampaign, Mailchimp, Zapier, and custom solutions.' },
            { title: 'Revenue Automation', desc: 'We don\'t just automate tasks — we automate revenue. Our funnels and sequences are designed to convert leads and increase customer lifetime value.' },
            { title: 'Custom Integrations', desc: 'We connect your entire tech stack — CRM, email, website, ads, payments — into one seamless automated workflow.' },
            { title: 'AI-Powered Solutions', desc: 'Leverage AI for lead scoring, chatbots, content personalization, and predictive analytics to stay ahead of competition.' },
        ],
        industries: ['SaaS & Technology', 'Ecommerce & D2C', 'Real Estate', 'Education & Online Courses', 'Healthcare & Clinics', 'Financial Services', 'Professional Services', 'B2B Companies'],
        processSteps: [
            { title: 'Workflow Audit', desc: 'Map your current processes, identify bottlenecks and manual tasks, and find the highest-impact automation opportunities.' },
            { title: 'System Design', desc: 'Design the automation architecture — triggers, conditions, actions, and integrations — tailored to your business logic.' },
            { title: 'Build & Integrate', desc: 'Set up the automation platform, build workflows, create email sequences, connect integrations, and configure triggers.' },
            { title: 'Test & Optimize', desc: 'Rigorous testing of every workflow path, followed by ongoing monitoring, A/B testing, and optimization of conversion rates.' },
        ],
        faqs: [
            { q: 'Which automation platform do you recommend?', a: 'It depends on your business size and needs. For SMBs, we often recommend ActiveCampaign or Mailchimp. For larger businesses, HubSpot or Salesforce. For custom workflows, Zapier or Make. We\'ll assess your needs and recommend the best fit.' },
            { q: 'Can you automate my existing CRM?', a: 'Yes. Whether you\'re using HubSpot, Salesforce, Zoho, Pipedrive, or any other CRM, we can build automated workflows for lead nurturing, follow-ups, task creation, and reporting.' },
            { q: 'How quickly can automation be set up?', a: 'Simple email automations can be live within a week. Comprehensive CRM automation with multiple integrations typically takes 2-4 weeks. Complex sales funnels with custom logic may take 4-6 weeks.' },
            { q: 'Will automation replace my sales team?', a: 'No — automation enhances your team, not replaces them. It handles repetitive tasks (follow-ups, data entry, lead scoring) so your team can focus on high-value activities like closing deals and building relationships.' },
            { q: 'Do you offer ongoing support after setup?', a: 'Yes. We offer monthly retainer packages for ongoing optimization, new workflow creation, A/B testing, and technical support. Most clients see best results with continuous optimization.' },
        ],
    },
    'managed-services': {
        overview: 'Not every business has the time or resources to manage digital marketing in-house. That\'s where our Managed Services come in. You get a full-stack marketing team — strategists, designers, developers, content writers, and ad specialists — working as an extension of your business. Think of it as having an entire marketing department on speed dial, without the overhead of hiring in-house.',
        whyChoose: [
            { title: 'Full Marketing Team', desc: 'Get access to 10+ specialists — strategist, designer, developer, content writer, ad manager, and analyst — all dedicated to your growth.' },
            { title: 'One Monthly Fee', desc: 'Predictable pricing with no hidden costs. Everything — strategy, execution, creative, and reporting — included in one monthly retainer.' },
            { title: 'Flexible & Scalable', desc: 'Scale up or down as your business grows. No long-term contracts — month-to-month with 30-day notice. We earn your business every month.' },
            { title: 'Executive Strategy', desc: 'A senior marketing strategist leads your account with monthly strategy sessions, quarterly business reviews, and proactive growth recommendations.' },
        ],
        industries: ['Startups & Scale-ups', 'SMBs & Growing Businesses', 'Ecommerce & D2C', 'SaaS & Technology', 'Healthcare & Clinics', 'Professional Services', 'Real Estate & PropTech', 'Education & EdTech'],
        processSteps: [
            { title: 'Onboarding & Audit', desc: 'Complete business audit, brand immersion, competitor analysis, and strategic planning during a comprehensive onboarding process.' },
            { title: 'Strategy & Roadmap', desc: 'Build a 90-day marketing roadmap with specific goals, channel priorities, content themes, and budget allocation.' },
            { title: 'Full-Stack Execution', desc: 'Our team handles everything — SEO, content, social media, paid ads, email, design — executing the strategy across all channels.' },
            { title: 'Review & Iterate', desc: 'Monthly performance reviews, quarterly strategy pivots, and continuous optimization based on what the data tells us.' },
        ],
        faqs: [
            { q: 'What\'s included in managed services?', a: 'Everything — digital strategy, SEO, content marketing, social media management, paid advertising, email marketing, graphic design, analytics, and monthly reporting. The exact scope depends on your package and goals.' },
            { q: 'How is this different from hiring a marketing agency?', a: 'Managed services provide a dedicated, embedded team that works exclusively on your brand. Unlike traditional agencies juggling dozens of clients, our managed services model ensures deep brand understanding and consistent, proactive execution.' },
            { q: 'What does managed services cost?', a: 'Our managed service packages start at ₹75,000/month for startups and go up to ₹5,00,000+/month for enterprise-level engagement. Pricing depends on scope, channels, and team size. We\'ll custom-quote based on your needs.' },
            { q: 'Do I get a dedicated account manager?', a: 'Yes. Every managed services client gets a dedicated senior strategist as their primary point of contact, along with access to the entire specialist team. You\'ll have weekly check-ins and monthly strategy reviews.' },
            { q: 'Is there a minimum commitment?', a: 'We recommend a 3-month initial commitment to see meaningful results, but we don\'t lock you into long-term contracts. After the initial period, it\'s month-to-month with 30-day notice.' },
        ],
    },
};

export default function CategoryPage({ categorySlug }) {
    const cat = serviceCategories.find(c => c.slug === categorySlug);
    if (!cat) return notFound();

    const theme = COLOR_MAP[cat.color] || COLOR_MAP.blue;
    const CatIcon = cat.icon;
    const content = CATEGORY_CONTENT[categorySlug] || CATEGORY_CONTENT['digital-marketing'];

    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);

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
                    message: formData.message || `[category_page] ${cat.name}`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => {});
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone, message: formData.message || '',
                    _subject: `New Enquiry - ${cat.name}`, _captcha: 'false', _template: 'table'
                })
            }).catch(() => {});
        } catch (err) { console.error('Form error:', err); }
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };

    const processIcons = [IconBulb, IconRocket, IconTrendingUp, IconChecks];

    return (
        <>
            <Header />

            {/* Hero */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className={`absolute inset-0 bg-linear-to-r ${theme.gradient} z-10`} />
                    <img src={cat.heroImage} alt={cat.name} className='w-full h-full object-cover' />
                </div>
                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Link href='/services' className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors'>
                            <IconArrowLeft className='w-4 h-4' /> All Services
                        </Link>
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 ml-4 border border-white/30'>
                            <CatIcon className='w-4 h-4' /> {cat.shortName}
                        </motion.span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>{cat.name}</h1>
                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>{cat.description}</p>
                        <div className='flex flex-wrap gap-4 mb-10'>
                            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                Get Free Consultation <IconArrowRight className='w-5 h-5' />
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-6'>
                            {cat.stats.map((stat, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                    <div>
                                        <div className='text-2xl font-bold text-white'>{stat.value}</div>
                                        <div className='text-sm text-gray-300'>{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-12 items-start'>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                            className='w-full lg:w-[60%]'>
                            <span className={`inline-block ${theme.badge} px-4 py-2 rounded-lg text-sm font-semibold mb-4`}>About Our {cat.shortName}</span>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Why {cat.shortName} Matters for Your Business</h2>
                            <p className='text-gray-600 text-lg leading-relaxed mb-6'>{content.overview}</p>
                            <div className='grid grid-cols-2 gap-4'>
                                {cat.stats.map((stat, i) => (
                                    <div key={i} className={`${theme.lightBg} rounded-xl p-4 border ${theme.border}`}>
                                        <div className={`text-3xl font-bold ${theme.iconText}`}>{stat.value}</div>
                                        <div className='text-sm text-gray-600 font-medium mt-1'>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className='w-full lg:w-[40%] lg:sticky lg:top-24'>
                            <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                                <h3 className='text-xl font-bold text-gray-900 mb-1'>Get a Free {cat.shortName} Audit</h3>
                                <p className='text-sm text-gray-500 mb-4'>Talk to our experts — no obligation</p>
                                <form onSubmit={handleFormSubmit} className='space-y-3'>
                                    <div className='relative'>
                                        <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                        <input type='text' placeholder='Your Name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                    </div>
                                    <div className='relative'>
                                        <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                        <input type='tel' placeholder='Phone Number' required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                    </div>
                                    <div className='relative'>
                                        <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                        <input type='email' placeholder='Email Address' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                    </div>
                                    <textarea placeholder='Tell us about your project...' rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm resize-none`} />
                                    <button type='submit' className={`w-full ${theme.btn} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                                        <IconSend className='w-4 h-4' /> Get Free Audit
                                    </button>
                                    {formStatus === 'success' && (
                                        <p className='text-green-600 text-sm text-center font-medium'>Thank you! We&apos;ll contact you soon.</p>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-16 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                        <span className={`inline-block ${theme.badge} px-4 py-2 rounded-lg text-sm font-semibold mb-4`}>Why Choose Us</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Why Choose Our {cat.shortName}</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>What sets our {cat.shortName.toLowerCase()} services apart from the rest.</p>
                    </motion.div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {content.whyChoose.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300'>
                                <div className={`w-12 h-12 ${theme.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                    <IconCheck className={`w-6 h-6 ${theme.iconText}`} stroke={2.5} />
                                </div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>{item.title}</h3>
                                <p className='text-sm text-gray-600 leading-relaxed'>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub-services grid */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <span className={`inline-block ${theme.badge} px-4 py-2 rounded-lg text-sm font-semibold mb-4`}>Our Services</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Our {cat.shortName} Services</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Choose from our specialized {cat.shortName.toLowerCase()} services tailored to your business needs.</p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {cat.subServices.map((sub, index) => {
                            const SubIcon = sub.icon;
                            return (
                                <motion.div key={sub.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    <Link href={`/${cat.slug}/${sub.slug}`} className='block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full border border-gray-100'>
                                        <div className={`w-14 h-14 ${theme.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <SubIcon className={`w-7 h-7 ${theme.iconText}`} stroke={1.5} />
                                        </div>
                                        <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>{sub.name}</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed mb-4'>{sub.description.slice(0, 120)}...</p>
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {sub.features.slice(0, 3).map((f, i) => (
                                                <span key={i} className={`text-xs ${theme.lightBg} ${theme.iconText} px-2 py-1 rounded-md font-medium`}>{f}</span>
                                            ))}
                                        </div>
                                        <span className='inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all'>
                                            Learn More <IconArrowRight className='w-4 h-4' />
                                        </span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className='py-16 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                        <span className='inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>Our Process</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>How We Deliver Results</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Our proven 4-step process for {cat.shortName.toLowerCase()} success.</p>
                    </motion.div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {content.processSteps.map((step, i) => {
                            const StepIcon = processIcons[i];
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className='relative bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                                    <div className='text-5xl font-black text-gray-100 absolute top-4 right-4'>0{i + 1}</div>
                                    <div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 relative z-10'>
                                        <StepIcon className='w-6 h-6 text-emerald-600' stroke={1.5} />
                                    </div>
                                    <h3 className='text-lg font-bold text-gray-900 mb-2 relative z-10'>{step.title}</h3>
                                    <p className='text-sm text-gray-600 leading-relaxed relative z-10'>{step.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                        <span className={`inline-block ${theme.badge} px-4 py-2 rounded-lg text-sm font-semibold mb-4`}>Industries</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>Industries We Serve</h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Our {cat.shortName.toLowerCase()} expertise spans across diverse industries.</p>
                    </motion.div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {content.industries.map((industry, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={`bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center ${theme.hoverBg}`}>
                                <div className={`w-10 h-10 ${theme.iconBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                                    <IconBuildingStore className={`w-5 h-5 ${theme.iconText}`} stroke={1.5} />
                                </div>
                                <p className='text-sm font-semibold text-gray-800'>{industry}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className='py-16 px-4 md:px-8 lg:px-16 '>
                <div className='max-w-4xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='text-center mb-12'>
                        <span className='inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>FAQs</span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>{cat.shortName} FAQs</h2>
                    </motion.div>
                    <div className='space-y-4'>
                        {content.faqs.map((faq, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
                                className='bg-gray-100 rounded-2xl overflow-hidden shadow-sm'>
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors'>
                                    <span className='text-lg font-semibold text-gray-900 pr-4'>{faq.q}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openFaq === index ? `${theme.iconBg} ${theme.iconText}` : 'bg-gray-200 text-gray-600'}`}>
                                        {openFaq === index ? <IconMinus className='w-5 h-5' stroke={2.5} /> : <IconPlus className='w-5 h-5' stroke={2.5} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className='overflow-hidden'>
                                            <p className='px-6 pb-6 text-gray-600 leading-relaxed'>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r ${theme.ctaGrad}`}>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Ready to Grow with {cat.shortName}?</h2>
                        <p className='text-xl text-gray-300 mb-8'>Get a free {cat.shortName.toLowerCase()} audit and strategy session with our experts. No obligations.</p>
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <Link href='/contact-us' className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                                Get Free Consultation
                            </Link>
                            <a href='tel:+919876543210' className='inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30'>
                                <IconPhone className='w-5 h-5' /> Call Us Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
