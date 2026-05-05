
import StaticServicePage from '@/components/services/StaticServicePage';
export const metadata = {
    title: 'AWS Training in India | AWS Certification by DigitalSolutions360',
    description:
        'AWS Training in India enables you to master skills to clear the AWS Certified exam. Join the online AWS Course from DigitalSolutions360. Best Platform for learning AWS with the updated pattern.',
    keywords: 'AWS Training and Certification course in India, AWS Certification, AWS Training, AWS Course, AWS Training and Certification, AWS Training, AWS Course, AWS Certification Training Course, AWS Training and Certification, AWS Cloud Practitioner, AWS Cloud Practitioner training, AWS Solutions Architect, AWS Training Partners, AWS Developer, AWS SysOps Administrator, AWS training courses',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/aws-training',
    },
};

const features = [
];

const benefits = [
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
    q: 'What is the recommended prerequisite knowledge for AWS training?',
    a: 'Most AWS training courses are designed for individuals with basic knowledge of IT concepts and familiarity with cloud computing. AWS provides foundational courses for beginners.',
  },
  {
    q: 'How long does it take to complete an AWS training course?',
    a: 'Duration varies: few days for bootcamps to several weeks for comprehensive programs. Self-paced or instructor-led formats available.',
  },
  {
    q: 'Are there any hands-on exercises or labs included in the training?',
    a: 'Yes, AWS training courses often include hands-on exercises and labs to provide practical experience with AWS services. Learners apply their knowledge in real scenarios.',
  },
  {
    q: 'Can I access the training materials and resources after completing the course?',
    a: 'Yes, AWS training courses typically provide access to training materials, presentation slides, video recordings, and supplementary resources.',
  },
  {
    q: 'Do AWS training courses provide certification preparation?',
    a: 'Many AWS training courses offer certification preparation. They include practice exams, study guides, and tips to help learners pass AWS certification exams.',
  }
];

export default function AwsMarketingPage() {
    return (
        <StaticServicePage
            name='Master the Power of AWS with Digital Solutions360 - Best Training and Certification course in India'
            description='Supercharge your career with our comprehensive Amazon Web Services (AWS) training
            program. Gain the skills and knowledge to leverage the full potential of AWS, the industry-
            leading cloud computing platform.'
            heroImage='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80'
            badge='AWS Certification Training'
            color='blue'
            // features={features}
            // benefits={benefits}
            sidebarTitle='AWS Certification Levels'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Book Free Counseling'
        />
    );
}
