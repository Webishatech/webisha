export type ByTheNumbersIcon = 'scale' | 'ai' | 'startup' | 'agile';

export interface ByTheNumbersItem {
  icon: ByTheNumbersIcon;
  title: string;
  message: string;
}

export const byTheNumbersData: ByTheNumbersItem[] = [
  {
    icon: 'scale',
    title: 'Built for scale',
    message: 'We design solutions that grow with your business from day one.',
  },
  {
    icon: 'ai',
    title: 'AI-powered',
    message: 'Integrating intelligent automation to deliver smarter products.',
  },
  {
    icon: 'startup',
    title: 'Startup-focused',
    message: 'Partnering with founders to validate ideas and launch faster.',
  },
  {
    icon: 'agile',
    title: 'Agile delivery',
    message: 'Rapid prototyping and iterative development for faster time-to-market.',
  },
];
