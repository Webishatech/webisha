export interface Service {
  icon: 'web' | 'mobile' | 'ai';
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: 'web',
    title: 'Web Development',
    description:
      'We build responsive, high-performance websites and web applications tailored to your business needs.',
  },
  {
    icon: 'mobile',
    title: 'Mobile Applications',
    description:
      'We develop high-performance mobile apps for iOS and Android with seamless user experiences.',
  },
  {
    icon: 'ai',
    title: 'AI-Powered Solutions',
    description:
      'We design and build AI-powered systems that automate operations, enhance decision-making, and enable smarter digital products.',
  },
];
