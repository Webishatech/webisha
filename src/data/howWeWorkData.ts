/**
 * How We Work process steps for Services page
 */

export interface HowWeWorkStep {
  icon: 'discovery' | 'design' | 'development' | 'deployment';
  title: string;
  description: string;
}

export const howWeWorkData: HowWeWorkStep[] = [
  {
    icon: 'discovery',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements to create a clear project roadmap.',
  },
  {
    icon: 'design',
    title: 'Design & Prototyping',
    description: 'Our designers create wireframes and interactive prototypes to align on user experience and visual direction before development.',
  },
  {
    icon: 'development',
    title: 'Development & Testing',
    description: 'We build your solution using best practices, with continuous testing to ensure quality, performance, and security.',
  },
  {
    icon: 'deployment',
    title: 'Deployment & Support',
    description: 'We deploy to production and provide ongoing support, monitoring, and updates to keep your solution running smoothly.',
  },
];
