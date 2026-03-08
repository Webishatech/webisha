export interface Service {
  icon: 'web' | 'mobile' | 'cloud';
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: 'web',
    title: 'Web Development',
    description: 'Creating responsive websites and web applications.',
  },
  {
    icon: 'mobile',
    title: 'Mobile Apps',
    description: 'Built for iOS and Android with native and cross-platform services.',
  },
  {
    icon: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scaling with modern and agile infrastructures.',
  },
];
