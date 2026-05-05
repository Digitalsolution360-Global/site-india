"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
    IconArrowRight, IconCheck, IconPlus, IconMinus,
    IconStarFilled, IconChecks, IconSend, IconPhone, IconUser, IconMail
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

const COLOR_MAP = {
    blue: { gradient: 'from-slate-900/95 via-slate-800/90 to-blue-900/70', ctaGrad: 'from-slate-900 to-blue-900', badge: 'bg-blue-100 text-blue-800', iconBg: 'bg-blue-100', iconText: 'text-blue-600', ring: 'focus:ring-blue-500', btn: 'bg-blue-600 hover:bg-blue-700', lightBg: 'bg-blue-50', border: 'border-blue-200', hoverBg: 'hover:bg-blue-50' },
    emerald: { gradient: 'from-slate-900/95 via-slate-800/90 to-emerald-900/70', ctaGrad: 'from-slate-900 to-emerald-900', badge: 'bg-emerald-100 text-emerald-800', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', ring: 'focus:ring-emerald-500', btn: 'bg-emerald-600 hover:bg-emerald-700', lightBg: 'bg-emerald-50', border: 'border-emerald-200', hoverBg: 'hover:bg-emerald-50' },
    orange: { gradient: 'from-slate-900/95 via-slate-800/90 to-orange-900/70', ctaGrad: 'from-slate-900 to-orange-900', badge: 'bg-orange-100 text-orange-800', iconBg: 'bg-orange-100', iconText: 'text-orange-600', ring: 'focus:ring-orange-500', btn: 'bg-orange-600 hover:bg-orange-700', lightBg: 'bg-orange-50', border: 'border-orange-200', hoverBg: 'hover:bg-orange-50' },
    violet: { gradient: 'from-slate-900/95 via-slate-800/90 to-violet-900/70', ctaGrad: 'from-slate-900 to-violet-900', badge: 'bg-violet-100 text-violet-800', iconBg: 'bg-violet-100', iconText: 'text-violet-600', ring: 'focus:ring-violet-500', btn: 'bg-violet-600 hover:bg-violet-700', lightBg: 'bg-violet-50', border: 'border-violet-200', hoverBg: 'hover:bg-violet-50' },
    pink: { gradient: 'from-slate-900/95 via-slate-800/90 to-pink-900/70', ctaGrad: 'from-slate-900 to-pink-900', badge: 'bg-pink-100 text-pink-800', iconBg: 'bg-pink-100', iconText: 'text-pink-600', ring: 'focus:ring-pink-500', btn: 'bg-pink-600 hover:bg-pink-700', lightBg: 'bg-pink-50', border: 'border-pink-200', hoverBg: 'hover:bg-pink-50' },
    indigo: { gradient: 'from-slate-900/95 via-slate-800/90 to-indigo-900/70', ctaGrad: 'from-slate-900 to-indigo-900', badge: 'bg-indigo-100 text-indigo-800', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', ring: 'focus:ring-indigo-500', btn: 'bg-indigo-600 hover:bg-indigo-700', lightBg: 'bg-indigo-50', border: 'border-indigo-200', hoverBg: 'hover:bg-indigo-50' },
    teal: { gradient: 'from-slate-900/95 via-slate-800/90 to-teal-900/70', ctaGrad: 'from-slate-900 to-teal-900', badge: 'bg-teal-100 text-teal-800', iconBg: 'bg-teal-100', iconText: 'text-teal-600', ring: 'focus:ring-teal-500', btn: 'bg-teal-600 hover:bg-teal-700', lightBg: 'bg-teal-50', border: 'border-teal-200', hoverBg: 'hover:bg-teal-50' },
};

export default function StaticServicePage({
    name,
    description,
    heroImage,
    badge,
    color = 'blue',
    features = [],
    benefits = [],
    sidebarTitle = 'Our Services',
    sidebarItems = [],
    faqs = [],
    ctaText = 'Get Started Today',
}) {
    const theme = COLOR_MAP[color] || COLOR_MAP.blue;

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
                    message: formData.message || `[service_page] ${name}`,
                    pageurl: typeof window !== 'undefined' ? window.location.pathname : '',
                })
            }).catch(() => { });
            await fetch('https://formsubmit.co/ajax/globalweb3600@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: formData.name, email: formData.email, phone: formData.phone,
                    message: formData.message || '',
                    _subject: `New Enquiry - ${name}`, _captcha: 'false', _template: 'table'
                })
            }).catch(() => { });
        } catch (err) { console.error('Form error:', err); }
        setFormStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
    };
    const pathname = usePathname();
    return (
        <>
            <Header />

            {/* Hero */}
            <section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className={`absolute inset-0 bg-linear-to-r ${theme.gradient} z-10`} />
                    <img src={heroImage} alt={name} className='w-full h-full object-cover' />
                </div>
                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'>
                            {badge}
                        </motion.span>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>{name}</h1>
                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>{description}</p>
                        <div className='flex flex-wrap gap-4 mb-8'>
                            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
                                Get Free Consultation <IconArrowRight className='w-5 h-5' />
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
                                    <div className='text-2xl font-bold text-white'>4.9/5</div>
                                    <div className='text-sm text-gray-300'>Client Rating</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
                                <IconChecks className='w-6 h-6 text-emerald-400' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>500+</div>
                                    <div className='text-sm text-gray-300'>Projects Delivered</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {pathname === '/aws-training-bangalore' && (<>
    {/* Intro Section */}
<section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-br from-pink-50 to-white'>
  <div className='max-w-4xl mx-auto'>
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      
      <div className='space-y-4 text-gray-700 leading-relaxed'>
        <p className="text-lg">
          Since the majority of businesses are switching from internal databases to cloud settings, AWS has become the new standard in today's society. The process of moving data into and out of the cloud environment is one of the most difficult processes in the aforementioned transformation. By offering a variety of data-moving services, each of which offers varying degrees of speed, security, cost, and performance, AWS addresses this issue. Build a career in AWS and start exploring a new world.
        </p>
      </div>

    </motion.div>
  </div>
</section>

{/* Why Choose Section */}
<section className='py-16 px-4 md:px-8 lg:px-16'>
  <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>

    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
        Why Choose AWS Training in Bangalore as a career
      </h2>

      <p className='text-gray-700 leading-relaxed mb-4'>
        We all know that the world is changing and slowly sifting on technology. Everything is dependent on cloud computing nowadays. From buying things to wearing clothes we totally depend on technology. All such online platforms slowly move on AWS servers Choosing AWS (Amazon Web Services) training as a career can be a strategic move due to the growing demand for cloud computing expertise and the widespread adoption of AWS services across various industries. Here are several compelling reasons to consider AWS training as a career choice:
      </p>

      <h3 className='font-semibold mb-3'>Reason to choose AWS Training program from Bangalore</h3>

      <ul className='list-disc pl-5 text-gray-700 space-y-2'>
        <li>High Demand</li>
        <li>Lucrative Salaries:</li>
        <li>Career Growth</li>
        <li>Global Recognition:</li>
        <li>Transferable Skills:</li>
      </ul>

    </motion.div>

    <motion.img
      src="https://www.digitalsolution360-in-900030.hostingersite.com/public/frontend/img/aws-ban.png"
      className="rounded-xl shadow-lg"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />

  </div>
</section>

{/* Benefits Section */}
<section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-50'>
  <div className='max-w-6xl mx-auto'>
    
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
        Benefit of AWS Training in Bangalore
      </h2>

      <p className='text-gray-700 leading-relaxed mb-8'>
        Opting for AWS (Amazon Web Services) training in Bangalore offers several distinct benefits due to the city's technological ecosystem, IT industry, and reputation as a hub for innovation. Here are some of the key advantages of pursuing AWS training in Bangalore:
      </p>
    </motion.div>

    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {[
        {
          title: "IT Hub and Opportunities:",
          desc: 'India," boasts a thriving IT industry with a multitude of tech companies, startups, and enterprises'
        },
        {
          title: "Job Market Demand:",
          desc: "The demand for AWS professionals is consistently high due to the increasing adoption of cloud technologies. Certification Preparation: AWS certifications are highly respected in the industry and can boost your career prospects."
        },
        {
          title: "Hands-on Experience:",
          desc: "The prevalence of tech companies and startups in Bangalore provides ample opportunities to gain hands-on experience with AWS implementations."
        },
        {
          title: "Global Recognition:",
          desc: "An AWS certification earned in Bangalore is globally recognized, allowing you to explore job opportunities not only in India but also internationally."
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300'
        >
          <h4 className='font-bold mb-2 text-gray-900'>{item.title}</h4>
          <p className='text-gray-600 text-sm'>{item.desc}</p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* Eligibility Section */}
<section className='py-16 px-4 md:px-8 lg:px-16'>
  <div className='max-w-5xl mx-auto space-y-6'>
    
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
        AWS Eligibility criteria
      </h2>

      <p className='text-gray-700'>
        As an enduring and reliable provider of cloud services, AWS has recently dominated the world of cloud computing...
      </p>

      <div className='space-y-4 mt-4'>
        {[
          "AWS Certified Cloud Practitioner – Foundational Certification",
          "AWS Certified Solutions Architect – Associate",
          "AWS Certified Developer – Associate",
          "AWS Certified SysOps Administrator – Associate",
          "AWS Certified Solutions Architect – Professional"
        ].map((item, i) => (
          <div key={i} className='p-4 bg-white rounded-xl shadow-sm border border-gray-100'>
            <h4 className='font-bold text-gray-900'>{item}</h4>
          </div>
        ))}
      </div>

    </motion.div>

  </div>
</section>

{/* Features + Future */}
<section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-50'>
  <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>

    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      
      <h2 className='text-2xl font-bold mb-3'>Features</h2>
      <ul className='list-disc pl-5 text-gray-700 space-y-2'>
        <li>Real-Time Experts as Trainers</li>
        <li>LIVE Project</li>
        <li>Certification</li>
        <li>Affordable Fees</li>
        <li>Flexibility</li>
        <li>Placement Support</li>
      </ul>

      <h2 className='text-2xl font-bold mt-8 mb-3'>Job Opportunities for AWS Professionals in 2023</h2>
      <ul className='list-disc pl-5 text-gray-700 space-y-2'>
        <li>AWS Cloud Administrator</li>
        <li>Cloud Infrastructure Engineer</li>
        <li>AWS DevOps Engineer</li>
        <li>AWS Administrator</li>
        <li>Cloud Engineer</li>
        <li>Cloud Architect</li>
        <li>Cloud Consultant</li>
      </ul>

    </motion.div>

    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      
      <h2 className='text-2xl font-bold mb-3'>Future After completion of AWS training from Bangalore</h2>
      
      <p className='text-gray-700 mb-4'>
        Completing AWS (Amazon Web Services) training in Bangalore can open up a range of promising opportunities...
      </p>

      <ul className='list-disc pl-5 text-gray-700 space-y-2'>
        <li>Cloud Engineer</li>
        <li>DevOps Engineer</li>
        <li>Solutions Architect</li>
        <li>Cloud Consultant</li>
        <li>Freelancing</li>
        <li>Global Opportunities</li>
      </ul>

    </motion.div>

  </div>
</section>

            </>)}
            {pathname === '/social-media' && (<>
                {/* Intro Section */}
                <section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-br from-pink-50 to-white'>
                    <div className='max-w-4xl mx-auto'>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Social Media Marketing in Delhi</h2>
                            <div className='space-y-4 text-gray-700 leading-relaxed'>
                                <p>The world is moving fast towards online marketing using social media platforms. More businesses are showing their interest in collecting maximum attention using various social media marketing tricks.</p>
                                <p>To win in the race of social media marketing, businesses and enterprises should look for the best way to advertise on social media in Delhi to overcome their competitors. You may find different agencies that claim to deliver services but fail in certain instances. To stay out of fraud and cheap options, join the best social media marketing agency in Delhi.</p>
                                <p>With Digital Solution 360, it becomes easier for businesses to connect with people using social media platforms. The best part is that this SMM agency in Delhi provides informative posts and maintains consistency to grab the attention of the maximum audience.</p>
                            </div>
                            <div className='mt-6 p-4 bg-pink-100 border-l-4 border-pink-500 rounded-r-lg'>
                                <p className='text-pink-900 font-semibold'>Grow your reputation & reach using the best social media to advertise your business: Join Digital Solution 360</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className='py-12 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-4xl mx-auto'>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>Why Social Media Marketing Matters</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='bg-linear-to-br from-pink-50 to-pink-100/50 p-6 rounded-xl border border-pink-200'>
                                    <div className='flex items-start gap-4'>
                                        <div className='bg-pink-500 text-white rounded-lg p-3 text-2xl font-bold shrink-0'>64%</div>
                                        <div>
                                            <p className='font-semibold text-gray-900 mb-2'>Consumer Desire for Authenticity</p>
                                            <p className='text-gray-700'>Of consumers express a desire for brands to communicate more authentically across social platforms.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-linear-to-br from-pink-50 to-pink-100/50 p-6 rounded-xl border border-pink-200'>
                                    <div className='flex items-start gap-4'>
                                        <div className='bg-pink-500 text-white rounded-lg p-3 shrink-0'>
                                            <IconChecks className='w-6 h-6' />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-gray-900 mb-2'>Meaningful Relationships</p>
                                            <p className='text-gray-700'>Modern consumers value relationships with brands that foster meaningful interactions that resonate on a personal level.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Social Profiles Section */}
                <section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-50'>
                    <div className='max-w-4xl mx-auto'>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>Follow Our Social Media Profiles</h2>
                            <p className='text-gray-600 mb-8'>Stay connected and get the latest updates by following us on Instagram.</p>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                {[
                                    { url: 'https://www.instagram.com/rajnursinghomehapur', name: 'Rajnursinghomehapur', desc: 'Healthcare updates and news from Raj Nursing Home, Hapur.' },
                                    { url: 'https://www.instagram.com/thisisdehi', name: 'This Is Dehi', desc: 'Exploring the vibrant culture and lifestyle of Dehi.' },
                                    { url: 'https://www.instagram.com/maxalign.dental', name: 'Maxalign Dental', desc: 'Your smile\'s best friend - Maxalign Dental Clinic updates.' }
                                ].map((profile, idx) => (
                                    <motion.a key={idx} href={profile.url} target='_blank' rel='noopener noreferrer'
                                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center border border-gray-100'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/174/174855.png' alt='Instagram' className='w-16 h-16 rounded-lg mb-4' />
                                        <h3 className='font-bold text-lg text-gray-900 mb-2'>{profile.name}</h3>
                                        <p className='text-sm text-gray-600'>{profile.desc}</p>
                                        <div className='mt-4 px-4 py-2 bg-pink-100 text-pink-600 rounded-lg text-sm font-semibold'>
                                            Follow
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className='py-16 px-4 md:px-8 lg:px-16'>
                    <div className='max-w-6xl mx-auto'>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Social Media Marketing Services We Provide</h2>
                            <p className='text-gray-600 max-w-3xl'>When various entrepreneurs and startups are seeking their growth over the internet, they love to use proven strategies. The combination of social media and marketing can do the job for you.</p>
                        </motion.div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {[
                                { title: 'Social Media Strategy Development', desc: 'Well-defined strategies always give the best results in the end. We provide customized social media marketing strategies that align with your business vision and audience.' },
                                { title: 'Content Creation and Management', desc: 'Content is the face of your brand. Our expert writers create engaging posts, infographics, stories, videos, and blogs that highlight your key strengths.' },
                                { title: 'Facebook Advertising Management', desc: 'Facebook marketing is one of the most powerful tools. From ad copywriting to A/B testing and tracking conversions, we manage it all for maximum ROI.' },
                                { title: 'Social Media Campaign Execution', desc: 'For any type of business, campaigns boost growth effectively. With impact-driven campaigns, we help you grab maximum attention and convert viewers into loyal customers.' },
                                { title: 'Reputation Management', desc: 'Your business reputation is a strong resource. We monitor mentions, engage with feedback, and highlight positive stories to maintain credibility across platforms.' },
                                { title: 'Analytics & Performance Tracking', desc: 'Measuring results is crucial to tackle growth. Our experts provide detailed analytics on audience engagement, performance, and ROI.' }
                            ].map((service, idx) => (
                                <motion.div key={idx}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-pink-200'>
                                    <div className='inline-flex items-center justify-center w-12 h-12 bg-pink-100 text-pink-600 rounded-lg mb-4'>
                                        <IconChecks className='w-6 h-6' />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                                    <p className='text-gray-600 leading-relaxed'>{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r from-pink-600 to-pink-700'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Partner with a Trusted Social Media Campaign Agency</h2>
                            <p className='text-lg text-pink-100 mb-6'>When you partner with us, every post, every ad, and every campaign becomes a stepping stone toward stronger community bonds and long-term success.</p>
                            <Link href='/contact-us' className='inline-block bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 hover:scale-105'>
                                Get Started Today
                            </Link>
                        </motion.div>
                    </div>
                </section> */}
            </>)}

            {pathname === '/crm-development' && (
                <>
                    <section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-br from-orange-50 to-white'>
                        <div className='max-w-5xl mx-auto'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center'>
                                    CRM Software Development for Modern Businesses
                                </h2>
                                <div className='space-y-5 text-gray-700 leading-relaxed text-lg'>
                                    <p>
                                        Businesses need sophisticated CRM software development. However, this type of service is either rare or
                                        expensive. This is the problem for many small and medium-sized businesses, as they do not find the right
                                        CRM software development company in their current locations.
                                    </p>
                                    <p>
                                        Either they hire a third-party or a freelancer, which is not a wise move at all to develop CRM systems
                                        with advanced approaches. That is where Digital Solution 360 comes in. We are a one-type solution and own
                                        a leading and advanced CRM development company.
                                    </p>
                                    <p>
                                        Either you need specific CRM services or maintenance, or start from scratch, we are here with you all the
                                        time. Digital Solution 360 offers custom CRM development solutions. Our experts assure that these services
                                        align with your market demands and workflow.
                                    </p>
                                    <p>
                                        Want more information on custom CRM application development - feel free to reach out to us today!
                                    </p>
                                </div>
                                <div className='mt-8 text-center'>
                                    <p className='text-lg font-semibold text-gray-900 mb-4'>
                                        Want more information on custom CRM application development?
                                    </p>
                                    <Link
                                        href='/contact-us'
                                        className='inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300'
                                    >
                                        Contact Us Today <IconArrowRight className='w-4 h-4' />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-50'>
                        <div className='max-w-7xl mx-auto'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-10 md:text-center'>
                                    Go Beyond Excellence with Digital Solution 360&apos;s Custom CRM Development
                                </h2>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                    {[
                                        {
                                            title: 'Overcome Traditional Limitations',
                                            text: 'Businesses want to overcome the limitations imposed by traditional CRM development. The use of bespoke CRM solutions in the initial period can lead to progress and noticeable achievements.',
                                            grad: 'from-blue-500 to-indigo-600',
                                        },
                                        {
                                            title: 'Top of the List Excellence',
                                            text: "Let's be at the top of the list by grabbing all the excellence with Digital Solution 360's on-premise CRM solutions and cloud-based CRM development. These two services are more important as they scale with your business and address all types of industry-specific needs.",
                                            grad: 'from-green-500 to-teal-600',
                                        },
                                        {
                                            title: 'Customizable and Feature-Rich CRM',
                                            text: 'We have customizable services of CRM for small business development and sustainability. Our team holds the pride of delivering feature-rich, secure, and intuitive CRM platforms that empower businesses of all sizes, irrespective of their types.',
                                            grad: 'from-purple-500 to-pink-600',
                                        },
                                    ].map((card, i) => (
                                        <motion.div
                                            key={card.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: i * 0.08 }}
                                            className={`bg-linear-to-r ${card.grad} text-white rounded-xl p-7 shadow-lg`}
                                        >
                                            <h3 className='text-xl font-bold mb-3'>{card.title}</h3>
                                            <p className='leading-relaxed'>{card.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section className='py-16 px-4 md:px-8 lg:px-16'>
                        <div className='max-w-7xl mx-auto'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:text-center'>
                                    What Does a Top CRM Development Company Offer?
                                </h2>
                                <div className='max-w-5xl mx-auto md:text-center mb-10 space-y-4 text-gray-700 leading-relaxed text-lg'>
                                    <p>
                                        A demanded and well-known CRM development company, like Digital Solution 360, understands the essential
                                        services that fulfill your CRM journey. Let us go from conceptualization with our experienced experts to
                                        continuous enhancement.
                                    </p>
                                    <p>Let us understand the CRM development services from the given points:</p>
                                </div>

                                <div className='space-y-6'>
                                    {[
                                        {
                                            title: '1. Custom CRM Development Services',
                                            lines: [
                                                'Experts at Digital Solution 360 build these CRM software solutions based on your operational processes.',
                                                'We enhance your efficiency and user adoption.',
                                                'Platforms provide support for unique workflows.',
                                                'Wait no more to build custom CRM functionalities.',
                                                'Satisfy all the demands based on your business context.',
                                            ],
                                            grad: 'from-blue-500 to-indigo-600',
                                        },
                                        {
                                            title: '2. CRM Consulting Services',
                                            lines: [
                                                'Analyze your current systems and business goals.',
                                                'Recommend consulting CRM strategies.',
                                                'Align with your growth trajectory.',
                                                'Expert solution for vendor evaluation and implementation planning.',
                                                'Offer user training and management support based on requirements.',
                                            ],
                                            grad: 'from-green-500 to-teal-600',
                                        },
                                        {
                                            title: '3. CRM Implementation Services',
                                            lines: [
                                                'Observe the entire implementation process.',
                                                'Design the system architecture and workflow configuration.',
                                                'Start services from system architecture design and workflow configuration to integration and deployment.',
                                                'Ensure minimal disruption and promote seamless transition.',
                                                'Include CRM migration services from legacy systems.',
                                                'Conduct all the integration and deployment.',
                                                'Seamless transition and no more disruption with our team of experts.',
                                            ],
                                            grad: 'from-purple-500 to-pink-600',
                                        },
                                        {
                                            title: '4. CRM Integration Services',
                                            lines: [
                                                'Enable CRM to communicate with third-party software effortlessly.',
                                                'Easy integration and working is possible with software like:',
                                                'Marketing tools',
                                                'Email clients',
                                                'ERP systems',
                                                'E-commerce platforms',
                                                'Smooth data synchronization and complete customer insights.',
                                            ],
                                            grad: 'from-yellow-500 to-orange-500',
                                        },
                                        {
                                            title: '5. Mobile CRM App Development',
                                            lines: [
                                                'Better mobility for the growing needs of your businesses.',
                                                'Recognize every requirement to build the best environment.',
                                                'Develop mobile CRM applications for empowering field teams.',
                                                'Easy and real-time access to customer data.',
                                                'Use collaborative tools from anywhere, on any device.',
                                            ],
                                            grad: 'from-rose-500 to-pink-500',
                                        },
                                        {
                                            title: '6. CRM Maintenance and Support',
                                            lines: [
                                                'Experts of Digital Solution 360 go with post-deployment.',
                                                'Provide ongoing maintenance.',
                                                'Bring the right updates at the right time.',
                                                'Conduct troubleshooting whenever necessary.',
                                                'Scale the support to keep the CRM system stronger and safer.',
                                                'Ensure the CRM services evolve with requirements.',
                                            ],
                                            grad: 'from-indigo-500 to-violet-600',
                                        },
                                    ].map((service, i) => (
                                        <motion.div
                                            key={service.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: i * 0.06 }}
                                            className={`bg-linear-to-r ${service.grad} text-white rounded-xl p-7 shadow-lg`}
                                        >
                                            <h3 className='text-xl md:text-2xl font-bold mb-4'>{service.title}</h3>
                                            <div className='space-y-2 leading-relaxed'>
                                                {service.lines.map((line, idx) => (
                                                    <p key={idx}>{line}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section className='py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white'>
                        <div className='max-w-7xl mx-auto'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className='text-3xl md:text-4xl font-bold text-yellow-400 mb-6 md:text-center'>
                                    Why Choose Digital Solution 360 for CRM Development?
                                </h2>
                                <p className='text-lg leading-relaxed max-w-4xl mx-auto md:text-center mb-10 text-gray-200'>
                                    Digital Solution 360 is the ultimate CRM development company in India. Anywhere you are running your business
                                    or enterprise, we assist you and build a strong CRM system for your growth.
                                </p>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto'>
                                    {[
                                        'Prefer a client-centric approach for tailoring every CRM need irrespective of a business type and size.',
                                        "Choose system growth and evolve with a business's needs.",
                                        'Incorporate advanced ideas and cutting-edge technologies.',
                                        'Allow AI machine learning and cloud computing.',
                                        "Improvise bespoke CRM solutions based on a business's requirements.",
                                        'Ensure to cover cloud-based CRM development.',
                                        'Secure on-premise CRM solutions with advanced solutions.',
                                        'Allow transparent communication and agile development processes.',
                                        'Improve customer retention and boost sales.',
                                        'Enhance marketing efforts seamlessly with CRM services.',
                                        'Ensure your CRM stays efficient and secure with our ongoing support-learn more about our service plans by reaching out to us today!',
                                    ].map((point, i) => (
                                        <div key={i} className='flex items-start gap-3'>
                                            <div className='w-7 h-7 rounded-lg bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5'>
                                                <IconCheck className='w-4 h-4 text-yellow-300' stroke={2.4} />
                                            </div>
                                            <p className='text-gray-100 leading-relaxed'>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-100'>
                        <div className='max-w-4xl mx-auto'>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className='text-gray-800 md:text-center'
                            >
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Conclusion</h2>
                                <p className='text-lg leading-relaxed mb-5'>
                                    Selecting the right CRM development company is not always a big deal after all. When clients go with Digital
                                    Solution 360, they grab all of the above benefits seamlessly without investing more in various CRM-based
                                    services.
                                </p>
                                <p className='text-lg leading-relaxed'>
                                    We help you build a CRM platform that truly reflects your unique business goals. Wait no further and join
                                    Digital Solution 360 for a comprehensive solution on CRM designs, CRM app development, industry-specific CRM
                                    solutions, CRM integration services, and a lot more in India.
                                </p>
                            </motion.div>
                        </div>
                    </section>
                </>
            )}
            {/* Content: 70/30 layout */}
            <section className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-8'>

                        {/* Left: 70% */}
                        <div className='w-full lg:w-[70%]'>

                            {(pathname !== '/social-media' && pathname !== '/crm-development' && pathname !== '/aws-training-bangalore') && (<>

                                {/* What's Included */}
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>What&apos;s Included</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {features.map((feature, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                                                className={`flex items-start gap-3 p-4 ${theme.lightBg} rounded-xl border ${theme.border}`}>
                                                <div className={`w-8 h-8 ${theme.iconBg} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                                                    <IconCheck className={`w-4 h-4 ${theme.iconText}`} stroke={2.5} />
                                                </div>
                                                <span className='text-gray-800 font-medium'>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Key Benefits */}
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='mb-12'>
                                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Key Benefits</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        {benefits.map((benefit, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                                                className='bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300'>
                                                <div className='flex items-center gap-3 mb-2'>
                                                    <div className='w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center'>
                                                        <IconChecks className='w-4 h-4 text-emerald-600' stroke={2} />
                                                    </div>
                                                    <h3 className='text-lg font-bold text-gray-900'>{benefit}</h3>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </>)}

                            {/* FAQs */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Frequently Asked Questions</h2>
                                <div className='space-y-4'>
                                    {faqs.map((faq, index) => (
                                        <div key={index} className='bg-gray-50 rounded-2xl overflow-hidden'>
                                            <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-100 transition-colors'>
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
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: 30% sidebar */}
                        <div className='w-full lg:w-[30%]'>
                            <div className='lg:sticky lg:top-24 space-y-6'>

                                {/* Contact Form */}
                                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                    className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                                    <h3 className='text-xl font-bold text-gray-900 mb-1'>Get Free Consultation</h3>
                                    <p className='text-sm text-gray-500 mb-4'>Talk to our experts today</p>
                                    <form onSubmit={handleFormSubmit} className='space-y-3'>
                                        <div className='relative'>
                                            <IconUser className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                            <input type='text' placeholder='Your Name' required value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                        </div>
                                        <div className='relative'>
                                            <IconPhone className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                            <input type='tel' placeholder='Phone Number' required value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                        </div>
                                        <div className='relative'>
                                            <IconMail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                                            <input type='email' placeholder='Email Address' value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm`} />
                                        </div>
                                        <textarea placeholder='Tell us about your requirements...' rows={3} value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 ${theme.ring} text-sm resize-none`} />
                                        <button type='submit' className={`w-full ${theme.btn} text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2`}>
                                            <IconSend className='w-4 h-4' /> Send Enquiry
                                        </button>
                                        {formStatus === 'success' && (
                                            <p className='text-green-600 text-sm text-center font-medium'>Thank you! We&apos;ll contact you soon.</p>
                                        )}
                                    </form>
                                </motion.div>

                                {/* Sidebar list */}
                                {/* {sidebarItems.length > 0 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                                        className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                                        <h3 className='text-lg font-bold text-gray-900 mb-4'>{sidebarTitle}</h3>
                                        <div className='space-y-2'>
                                            {sidebarItems.map((item, index) => (
                                                <div key={index} className={`flex items-center justify-between px-3 py-2 rounded-lg ${theme.hoverBg} transition-colors`}>
                                                    <div className='flex items-center gap-2'>
                                                        <IconCheck className={`w-3.5 h-3.5 ${theme.iconText} shrink-0`} stroke={2.5} />
                                                        <span className='text-sm font-medium text-gray-800'>{item}</span>
                                                    </div>
                                                    <IconArrowRight className='w-3 h-3 text-gray-300' />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r ${theme.ctaGrad}`}>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Ready to Get Started with {name}?</h2>
                        <p className='text-xl text-gray-300 mb-8'>Let our experts help you achieve your business goals with a customized strategy.</p>
                        <Link href='/contact-us' className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                            {ctaText}
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
