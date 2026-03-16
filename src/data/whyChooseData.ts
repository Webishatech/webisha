export type WhyChooseIcon = 'agile' | 'client' | 'scalable' | 'quality';

export interface WhyChooseItem {
  icon: WhyChooseIcon;
  title: string;
  description: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    icon: 'agile',
    title: 'Agile Development',
    description:
      'We follow an agile and structured development process that allows us to adapt quickly to changes, ensuring efficient delivery and continuous improvement throughout the project lifecycle.',
  },
  {
    icon: 'client',
    title: 'Client-Focused Approach',
    description:
      'We work closely with our clients to understand their goals and challenges, ensuring every solution we build aligns with their business needs and long-term vision.',
  },
  {
    icon: 'scalable',
    title: 'Scalable Solutions',
    description:
      'Our team uses modern technologies and best practices to build scalable, secure, and future-ready applications that grow with your business.',
  },
  {
    icon: 'quality',
    title: 'Quality & Reliability',
    description:
      'From planning to deployment, we maintain high standards of quality, testing, and performance to deliver reliable solutions.',
  },
];
