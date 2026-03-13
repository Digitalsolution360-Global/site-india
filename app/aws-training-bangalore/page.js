import StaticServicePage from '@/components/services/StaticServicePage';

export const metadata = {
    title: 'AWS Training in Bangalore | Online AWS Certification Training',
    description:
        'Join our comprehensive online AWS certification training program in Bangalore. Digital Solution 360 offers job-oriented AWS Certification Training with 100% job assistance. Call: 9243484138',
    keywords: 'AWS Training in Bangalore, AWS Course in Bangalore, AWS Certification Training, Cloud Computing Course Bangalore, AWS Developer Training, AWS Solutions Architect',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/aws-marketing-banglore',
    },
};

const features = [
    'High Demand for AWS Professionals Across Industries',
    'Lucrative Salaries in Cloud Roles',
    'Career Growth & Global Recognition',
    'Transferable Cloud Computing Skills',
    'Rated #1 Instructor-Led AWS Training Sessions',
    'Every Doubt Cleared via Chat Support',
    'LIVE Project Training with Hands-on Labs',
    'AWS Certification Preparation & Support',
    'Affordable Fees with Flexible Batch Timings',
    'Weekend Classes Available for Working Students',
    '100+ Company Placement Support',
    'Both Offline & Online AWS Classes Available',
];

const benefits = [
    'IT Hub & Career Opportunities in Bangalore',
    'Consistently High Job Market Demand for AWS',
    'Hands-On Experience with AWS Implementations',
    'Globally Recognized AWS Certification',
    '100+ Freshers Got Placed After AWS Course',
    '200+ Working Employees Got 30% Avg Salary Hike',
    'Career Paths: Cloud Engineer, DevOps, Solutions Architect',
    'Both On-Premise and Cloud Career Paths Available',
];

const sidebarItems = [
    'AWS Certified Cloud Practitioner',
    'AWS Certified Solutions Architect – Associate',
    'AWS Certified Developer – Associate',
    'AWS Certified SysOps Administrator',
    'AWS Certified Solutions Architect – Professional',
    'Cloud Engineer',
    'DevOps Engineer',
    'Big Data & Analytics Specialist',
];

const faqs = [
    {
        q: 'Why choose AWS Training in Bangalore as a career?',
        a: "Bangalore is India's IT capital with a thriving cloud computing ecosystem. AWS professionals are in consistently high demand, commanding lucrative salaries with strong global career mobility. Everything from e-commerce to healthcare now runs on cloud platforms.",
    },
    {
        q: 'What are the eligibility criteria for AWS Certified Cloud Practitioner?',
        a: 'A candidate must have basic knowledge of IT services and a minimum of 6 months of working experience in AWS cloud in any role — sales, managerial, technical, or financial.',
    },
    {
        q: 'Which AWS certification should I start with?',
        a: 'Beginners should start with AWS Certified Cloud Practitioner – Foundational. For technical and hands-on roles, proceed to AWS Certified Solutions Architect – Associate or AWS Certified Developer – Associate.',
    },
    {
        q: 'Why choose Digitalsolution360 for AWS Training in Bangalore?',
        a: 'We offer Rated #1 Instructor-Led sessions, hands-on LIVE project training, certified mentors, chat support for every doubt, flexible batch timings, weekend classes, and placement support with 100+ partner companies.',
    },
    {
        q: 'What career paths open up after completing AWS training?',
        a: 'Completing AWS training can lead to roles like Cloud Engineer, DevOps Engineer, Solutions Architect, Cloud Architect, Cloud Consultant, Security Specialist, and Big Data Analyst — all in high demand globally.',
    },
];

export default function AwsMarketingBanglorePage() {
    return (
        <StaticServicePage
            name='AWS Training and Certification in Bangalore'
            description='AWS (Amazon Web Services) is a safe cloud platform providing computing power, database storage, and content distribution. Build a future-ready career with our job-oriented AWS certification training in Bangalore — expert trainers, hands-on labs, and 100% placement assistance.'
            heroImage='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80'
            badge='AWS Certification Training'
            color='blue'
            features={features}
            benefits={benefits}
            sidebarTitle='AWS Certification Levels'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Book Free Counseling'
        />
    );
}
