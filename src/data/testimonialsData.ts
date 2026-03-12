import reviewImage from '../assets/images/reviews/1.jpeg';

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Miller',
    title: 'CEO',
    company: 'Softline',
    rating: 5,
    quote:
      'Webisha Tech delivered an exceptional solution that transformed our business operations. Their team is highly professional, innovative, and truly understands client requirements.',
    image: reviewImage,
  },
  {
    id: 2,
    name: 'John Anderson',
    title: 'CTO',
    company: 'TechCorp',
    rating: 5,
    quote:
      'Working with Webisha Tech has been a great experience. Their expertise in scalable technology helped us optimize performance and significantly reduce operational costs.',
    image: reviewImage,
  },
  {
    id: 3,
    name: 'Emily Chen',
    title: 'Product Manager',
    company: 'InnovateLabs',
    rating: 5,
    quote:
      'The mobile application they developed exceeded our expectations. The user experience is seamless and the performance is outstanding.',
    image: reviewImage,
  },
  {
    id: 4,
    name: 'Sarah Miller',
    title: 'CEO',
    company: 'Softline',
    rating: 5,
    quote:
      'Webisha Tech delivered an exceptional solution that transformed our business operations. Their team is highly professional, innovative, and truly understands client requirements.',
    image: reviewImage,
  },
  {
    id: 5,
    name: 'John Anderson',
    title: 'CTO',
    company: 'TechCorp',
    rating: 5,
    quote:
      'Working with Webisha Tech has been a great experience. Their expertise in scalable technology helped us optimize performance and significantly reduce operational costs.',
    image: reviewImage,
  },
];
