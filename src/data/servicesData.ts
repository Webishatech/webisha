export interface Service {
  link: string;
  icon: 'web' | 'mobile' | 'ai';
  title: string;
  description: string;
}

export interface ServiceDetailContent {
  overview: string;
  features: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  technologies?: string[];
  benefits: string[];
}

export type ServiceDetailData = Service & ServiceDetailContent;

export const servicesData: Service[] = [
  {
    icon: 'web',
    title: 'Web Development',
    link: 'web-development',
    description:
      'We build responsive, high-performance websites and web applications tailored to your business needs.',
  },
  {
    icon: 'mobile',
    title: 'Mobile Applications',
    link: 'mobile-development',
    description:
      'We develop high-performance mobile apps for iOS and Android with seamless user experiences.',
  },
  {
    icon: 'ai',
    title: 'AI-Powered Solutions',
    link: 'ai-development',
    description:
      'We design and build AI-powered systems that automate operations, enhance decision-making, and enable smarter digital products.',
  },
];

/** Detailed service content for dynamic service detail page */
const serviceDetailContentByIndex: Record<number, ServiceDetailContent> = {
  0: {
    overview:
      'We specialize in building responsive, high-performance websites and web applications that are tailored to your business needs. Our web development services cover everything from simple business websites to complex enterprise applications, ensuring your digital presence is both powerful and user-friendly.',
    features: [
      'Responsive design that works on all devices',
      'Custom web applications built to your specifications',
      'E-commerce solutions with secure payment integration',
      'Content Management Systems (CMS) for easy updates',
      'Progressive Web Apps (PWA) for app-like experiences',
      'API development and third-party integrations',
      'Performance optimization and SEO best practices',
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description:
          'We analyze your business requirements, target audience, and goals to create a comprehensive development roadmap.',
      },
      {
        title: 'Design & Prototyping',
        description:
          'Our design team creates wireframes and prototypes to visualize the user experience before development begins.',
      },
      {
        title: 'Development & Testing',
        description:
          'We build your website using modern technologies and frameworks, with rigorous testing at every stage.',
      },
      {
        title: 'Deployment & Support',
        description:
          'We deploy your website and provide ongoing maintenance and support to ensure optimal performance.',
      },
    ],
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'Laravel',
      'Vue.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
    ],
    benefits: [
      'Increased online visibility and brand presence',
      'Improved user engagement and conversion rates',
      'Scalable solutions that grow with your business',
      'Enhanced security and data protection',
      'Better performance and faster load times',
    ],
  },
  1: {
    overview:
      'We develop high-performance mobile applications for iOS and Android platforms, delivering seamless user experiences that drive engagement and business growth. Our mobile app development services cover native and cross-platform solutions, ensuring your app reaches the widest audience possible.',
    features: [
      'Native iOS and Android app development',
      'Cross-platform development with React Native and Flutter',
      'UI/UX design optimized for mobile devices',
      'App store optimization and submission',
      'Backend API development and integration',
      'Push notifications and real-time features',
      'Offline functionality and data synchronization',
      'Security and compliance (HIPAA, GDPR)',
    ],
    process: [
      {
        title: 'Strategy & Planning',
        description:
          'We define a custom app strategy aligned with your business goals, target audience, and platform requirements.',
      },
      {
        title: 'UI/UX Design',
        description:
          'Create visually engaging and user-friendly designs for an exceptional user experience across all devices.',
      },
      {
        title: 'App Development',
        description:
          'Develop high-performance mobile apps for iOS, Android, or cross-platform using the latest technologies.',
      },
      {
        title: 'Testing & Maintenance',
        description:
          'Ensure quality through rigorous testing and provide ongoing support and updates to keep your app running smoothly.',
      },
    ],
    technologies: [
      'React Native',
      'Flutter',
      // 'Swift',
      // 'Kotlin',
      'Firebase',
      'AWS Amplify',
      'GraphQL',
      'REST APIs',
    ],
    benefits: [
      'Reach customers on their preferred devices',
      'Improved customer engagement and retention',
      'Streamlined business processes and operations',
      'Enhanced brand visibility and recognition',
      'Real-time data access and synchronization',
    ],
  },
  2: {
    overview:
      'We design and build AI-powered systems that automate operations, enhance decision-making, and enable smarter digital products. Our AI solutions leverage machine learning, natural language processing, and computer vision to transform how your business operates and serves customers.',
    features: [
      'Machine Learning model development and deployment',
      'Natural Language Processing (NLP) for chatbots and analysis',
      'Computer Vision for image and video processing',
      'Predictive analytics and data insights',
      'Process automation and intelligent workflows',
      'Custom AI solutions tailored to your industry',
      'Integration with existing systems and platforms',
      'AI model training and continuous improvement',
    ],
    process: [
      {
        title: 'AI Strategy & Assessment',
        description:
          'We analyze your business processes and identify opportunities where AI can add value and improve efficiency.',
      },
      {
        title: 'Data Preparation & Model Design',
        description:
          'We prepare your data and design custom AI models that align with your specific business requirements.',
      },
      {
        title: 'Development & Training',
        description:
          'We develop and train AI models using your data, ensuring accuracy and performance meet your standards.',
      },
      {
        title: 'Deployment & Optimization',
        description:
          'We deploy AI solutions into your workflow and continuously monitor and optimize performance over time.',
      },
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'OpenAI API',
      'AWS SageMaker',
      'Azure AI',
      'NLP Libraries',
      'Computer Vision APIs',
    ],
    benefits: [
      'Automated processes reduce manual work and errors',
      'Data-driven insights improve decision-making',
      'Enhanced customer experiences through personalization',
      'Increased operational efficiency and cost savings',
      'Competitive advantage through innovative technology',
    ],
  },
};

/** Get full service detail data for a service index (for dynamic service detail page). Returns null if not found. */
export function getServiceDetailByIndex(serviceIndex: number): ServiceDetailData | null {
  const service = servicesData[serviceIndex];
  const content = serviceDetailContentByIndex[serviceIndex];
  if (!service || !content) return null;
  return { ...service, ...content };
}

/** Get full service detail data for a service slug/link. Returns null if not found. */
export function getServiceDetailByLink(serviceLink: string): ServiceDetailData | null {
  const normalizedLink = serviceLink.trim().toLowerCase();
  const serviceIndex = servicesData.findIndex(
    (service) => service.link.trim().toLowerCase() === normalizedLink
  );
  if (serviceIndex < 0) return null;
  return getServiceDetailByIndex(serviceIndex);
}
