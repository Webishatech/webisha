export interface Service {
  icon: 'web' | 'mobile' | 'cloud';
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
    icon: 'cloud',
    title: 'Cloud Solutions',
    description:
      'We deliver secure cloud solutions that help businesses scale faster and operate more efficiently.',
  },
];
