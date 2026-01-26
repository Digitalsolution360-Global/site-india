"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconClock,
    IconBriefcase,
    IconUsers,
    IconTrendingUp,
    IconHeart,
    IconCoffee,
    IconDeviceDesktop,
    IconSchool,
    IconAward,
    IconCalendar,
    IconCurrencyRupee,
    IconChevronDown,
    IconChevronUp,
    IconX,
    IconSend,
    IconUpload
} from '@tabler/icons-react'
import data from './data.json'

export default function CareersPage() {
    const [expandedJob, setExpandedJob] = useState(null);
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        currentCompany: '',
        coverLetter: ''
    });

    const { jobOpenings } = data;

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowApplyForm(true);
        document.body.style.overflow = 'hidden';
    };

    const closeApplyForm = () => {
        setShowApplyForm(false);
        setSelectedJob(null);
        setSubmitStatus(null);
        setFormData({
            name: '',
            email: '',
            phone: '',
            experience: '',
            currentCompany: '',
            coverLetter: ''
        });
        document.body.style.overflow = 'auto';
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formsubmit.co/ajax/info@digitalsolution360.in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    position: selectedJob.title,
                    department: selectedJob.department,
                    _subject: `New Job Application for ${selectedJob.title}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setTimeout(() => {
                    closeApplyForm();
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const jobOpenings_old = [
        {
            id: 1,
            title: 'Senior Digital Marketing Strategist',
            department: 'Marketing',
            location: 'Dhanbad / Remote',
            type: 'Full-time',
            experience: '3-5 years',
            salary: '₹6-10 LPA',
            description: 'We are looking for an experienced Digital Marketing Strategist to lead campaigns across multiple channels and drive measurable results for our clients.',
            responsibilities: [
                'Develop and execute comprehensive digital marketing strategies',
                'Manage SEO, SEM, social media, and content marketing campaigns',
                'Analyze campaign performance and optimize for ROI',
                'Lead a team of marketing specialists',
                'Stay updated with latest digital marketing trends'
            ],
            requirements: [
                '3-5 years of experience in digital marketing',
                'Proven track record of successful campaigns',
                'Strong analytical and communication skills',
                'Experience with Google Analytics, Ads, and SEO tools',
                "Bachelor's degree in Marketing or related field"
            ]
        },
        {
            id: 2,
            title: 'Full Stack Web Developer',
            department: 'Development',
            location: 'Bangalore / Hybrid',
            type: 'Full-time',
            experience: '2-4 years',
            salary: '₹5-9 LPA',
            description: 'Join our development team to build cutting-edge web applications using modern technologies like React, Next.js, Node.js, and more.',
            responsibilities: [
                'Develop and maintain web applications',
                'Write clean, maintainable code',
                'Collaborate with designers and project managers',
                'Optimize applications for performance',
                'Participate in code reviews and technical discussions'
            ],
            requirements: [
                '2-4 years of experience in web development',
                'Proficiency in React, Next.js, Node.js',
                'Experience with databases (MongoDB, MySQL)',
                'Understanding of RESTful APIs',
                'Strong problem-solving skills'
            ]
        },
        {
            id: 3,
            title: 'SEO Specialist',
            department: 'SEO',
            location: 'Noida / Remote',
            type: 'Full-time',
            experience: '2-3 years',
            salary: '₹4-7 LPA',
            description: 'We need an SEO expert who can drive organic traffic growth through technical SEO, on-page optimization, and link building strategies.',
            responsibilities: [
                'Conduct SEO audits and implement fixes',
                'Perform keyword research and competitor analysis',
                'Optimize website content and meta tags',
                'Build high-quality backlinks',
                'Monitor rankings and prepare reports'
            ],
            requirements: [
                '2-3 years of SEO experience',
                'Knowledge of SEO tools (Ahrefs, SEMrush)',
                'Understanding of Google algorithms',
                'Experience with technical SEO',
                'Excellent analytical skills'
            ]
        },
        {
            id: 4,
            title: 'Social Media Manager',
            department: 'Social Media',
            location: 'Remote',
            type: 'Full-time',
            experience: '2-4 years',
            salary: '₹4-8 LPA',
            description: 'Manage social media accounts for multiple clients, create engaging content, and build vibrant online communities.',
            responsibilities: [
                'Create and schedule social media content',
                'Manage multiple client accounts',
                'Engage with followers and respond to comments',
                'Run paid social media campaigns',
                'Track and report on social media metrics'
            ],
            requirements: [
                '2-4 years of social media management experience',
                'Strong content creation skills',
                'Experience with social media tools',
                'Understanding of social media advertising',
                'Creative mindset and excellent communication'
            ]
        },
        {
            id: 5,
            title: 'Content Writer',
            department: 'Content',
            location: 'Remote',
            type: 'Full-time',
            experience: '1-3 years',
            salary: '₹3-6 LPA',
            description: 'Create compelling content for blogs, websites, social media, and marketing campaigns across various industries.',
            responsibilities: [
                'Write SEO-optimized blog posts and articles',
                'Create website copy and landing pages',
                'Develop social media content',
                'Research industry topics and trends',
                'Edit and proofread content'
            ],
            requirements: [
                '1-3 years of content writing experience',
                'Excellent writing and grammar skills',
                'Understanding of SEO best practices',
                'Ability to write for different audiences',
                "Bachelor's degree in English, Journalism, or related field"
            ]
        },
        {
            id: 6,
            title: 'Graphic Designer',
            department: 'Design',
            location: 'Dhanbad / Hybrid',
            type: 'Full-time',
            experience: '2-4 years',
            salary: '₹3.5-7 LPA',
            description: 'Create visually stunning designs for digital marketing campaigns, websites, social media, and brand identities.',
            responsibilities: [
                'Design graphics for social media and websites',
                'Create brand identities and logos',
                'Design marketing materials and banners',
                'Collaborate with marketing team',
                'Maintain brand consistency across designs'
            ],
            requirements: [
                '2-4 years of graphic design experience',
                'Proficiency in Adobe Creative Suite',
                'Strong portfolio showcasing varied work',
                'Understanding of design principles',
                'Creativity and attention to detail'
            ]
        }
    ];

    const benefits = [
        {
            icon: IconCurrencyRupee,
            title: 'Competitive Salary',
            description: 'Industry-leading compensation packages with performance bonuses',
            color: 'green'
        },
        {
            icon: IconDeviceDesktop,
            title: 'Remote Work',
            description: 'Flexible work-from-home options with hybrid arrangements',
            color: 'blue'
        },
        {
            icon: IconSchool,
            title: 'Learning & Development',
            description: 'Sponsored certifications and training programs',
            color: 'purple'
        },
        {
            icon: IconHeart,
            title: 'Health Insurance',
            description: 'Comprehensive health coverage for you and your family',
            color: 'red'
        },
        {
            icon: IconCoffee,
            title: 'Work-Life Balance',
            description: '5-day work week with flexible timings',
            color: 'orange'
        },
        {
            icon: IconAward,
            title: 'Growth Opportunities',
            description: 'Fast-track career progression based on performance',
            color: 'yellow'
        }
    ];

    const colorMap = {
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
        red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
        yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'
                        alt='Careers'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            Join Our Team
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl'>
                            Build Your Career With Us
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8'>
                            Join a team of passionate digital marketing professionals and work on exciting projects for leading brands across India.
                        </p>

                        <div className='flex flex-wrap gap-6 text-white'>
                            <div className='flex items-center gap-2'>
                                <IconUsers className='w-5 h-5' />
                                <span>50+ Team Members</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IconTrendingUp className='w-5 h-5' />
                                <span>Fast Growing Company</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IconHeart className='w-5 h-5' />
                                <span>Great Work Culture</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Why Join Digitalsolution360?
                        </h2>
                        <p className='text-lg text-gray-600'>
                            We believe in nurturing talent and creating an environment where you can thrive
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            const colors = colorMap[benefit.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4'>
                                        <Icon className={`w-6 h-6 ${colors.icon}`} stroke={1.5} />
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                                    <p className='text-gray-600'>{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-12'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Current Openings
                        </h2>
                        <p className='text-lg text-gray-600'>
                            Find the perfect role that matches your skills and passion
                        </p>
                    </motion.div>

                    <div className='space-y-4'>
                        {jobOpenings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300'
                            >
                                <div className='p-6'>
                                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                                        <div className='flex-1'>
                                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>{job.title}</h3>
                                            <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                                                <div className='flex items-center gap-2'>
                                                    <IconBriefcase className='w-4 h-4' />
                                                    <span>{job.department}</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <IconMapPin className='w-4 h-4' />
                                                    <span>{job.location}</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <IconClock className='w-4 h-4' />
                                                    <span>{job.type}</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <IconCalendar className='w-4 h-4' />
                                                    <span>{job.experience}</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <IconCurrencyRupee className='w-4 h-4' />
                                                    <span>{job.salary}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                                            className='flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shrink-0'
                                        >
                                            {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                                            {expandedJob === job.id ? (
                                                <IconChevronUp className='w-5 h-5' />
                                            ) : (
                                                <IconChevronDown className='w-5 h-5' />
                                            )}
                                        </button>
                                    </div>

                                    {expandedJob === job.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='mt-6 pt-6 border-t border-gray-200'
                                        >
                                            <p className='text-gray-600 mb-6'>{job.description}</p>

                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                                <div>
                                                    <h4 className='text-lg font-bold text-gray-900 mb-3'>Responsibilities</h4>
                                                    <ul className='space-y-2'>
                                                        {job.responsibilities.map((item, idx) => (
                                                            <li key={idx} className='flex items-start gap-2 text-gray-600'>
                                                                <div className='w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0' />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className='text-lg font-bold text-gray-900 mb-3'>Requirements</h4>
                                                    <ul className='space-y-2'>
                                                        {job.requirements.map((item, idx) => (
                                                            <li key={idx} className='flex items-start gap-2 text-gray-600'>
                                                                <div className='w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0' />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleApplyClick(job)}
                                                className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105'
                                            >
                                                Apply Now
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className='py-10 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                                Our Company Culture
                            </h2>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                At Digitalsolution360, we foster a culture of innovation, collaboration, and continuous learning. We believe that our greatest asset is our people, and we're committed to creating an environment where everyone can thrive.
                            </p>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                Our team enjoys regular team-building activities, knowledge-sharing sessions, and celebrations of both professional and personal milestones.
                            </p>
                            <ul className='space-y-3'>
                                {[
                                    'Open and transparent communication',
                                    'Collaborative work environment',
                                    'Recognition and rewards for excellence',
                                    'Innovation-driven mindset',
                                    'Work-life balance priority'
                                ].map((item, idx) => (
                                    <li key={idx} className='flex items-center gap-3 text-gray-700'>
                                        <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0'>
                                            <div className='w-2 h-2 bg-blue-600 rounded-full' />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
                                alt='Team Culture'
                                className='rounded-2xl shadow-2xl'
                            />
                            <div className='absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl'>
                                <div className='text-4xl font-bold mb-1'>9+</div>
                                <div className='text-blue-100'>Years of Excellence</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-10 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Don't See Your Role?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <Link
                            href='/contact'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Submit Your Resume
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Apply Form Modal */}
            <AnimatePresence>
                {showApplyForm && selectedJob && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeApplyForm}
                            className='absolute inset-0 bg-black/60 backdrop-blur-sm'
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className='relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
                        >
                            {/* Header */}
                            <div className='sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between z-10'>
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-1'>
                                        Apply for {selectedJob.title}
                                    </h3>
                                    <p className='text-gray-600'>{selectedJob.department} • {selectedJob.location}</p>
                                </div>
                                <button
                                    onClick={closeApplyForm}
                                    className='w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors'
                                >
                                    <IconX className='w-6 h-6 text-gray-600' />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className='p-6 space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                                            Full Name *
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                            placeholder='John Doe'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                                            Email Address *
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                            placeholder='john@example.com'
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                                            Phone Number *
                                        </label>
                                        <input
                                            type='tel'
                                            id='phone'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                            placeholder='+91 98765 43210'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='experience' className='block text-sm font-semibold text-gray-700 mb-2'>
                                            Total Experience *
                                        </label>
                                        <input
                                            type='text'
                                            id='experience'
                                            name='experience'
                                            value={formData.experience}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                            placeholder='e.g., 3 years'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='currentCompany' className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Current Company
                                    </label>
                                    <input
                                        type='text'
                                        id='currentCompany'
                                        name='currentCompany'
                                        value={formData.currentCompany}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                                        placeholder='Your current company name'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='coverLetter' className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Cover Letter / Why should we hire you? *
                                    </label>
                                    <textarea
                                        id='coverLetter'
                                        name='coverLetter'
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none'
                                        placeholder='Tell us why you are a perfect fit for this role...'
                                    />
                                </div>

                                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                                    <div className='flex items-start gap-3'>
                                        <IconUpload className='w-5 h-5 text-blue-600 mt-0.5 shrink-0' />
                                        <div className='text-sm'>
                                            <p className='text-gray-700 font-medium mb-1'>Resume Submission</p>
                                            <p className='text-gray-600'>
                                                Please send your resume to{' '}
                                                <a href='mailto:info@digitalsolution360.in' className='text-blue-600 hover:text-blue-700 font-semibold'>
                                                    info@digitalsolution360.in
                                                </a>
                                                {' '}with subject line: "Application for {selectedJob.title}"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <IconSend className='w-5 h-5' />
                                            Submit Application
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center'
                                    >
                                        ✓ Application submitted successfully! We'll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center'
                                    >
                                        Something went wrong. Please try again or email us directly.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    )
}