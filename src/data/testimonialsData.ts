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
    company: 'Sextisers',
    rating: 5,
    quote:
      'WebIsha Tech delivered an exceptional solution that transformed our business operations. Their team is professional, innovative, and truly understands our needs.',
    image: reviewImage,
  },
  {
    id: 2,
    name: 'John Anderson',
    title: 'CTO',
    company: 'TechCorp',
    rating: 5,
    quote:
      'Working with WebIsha Tech has been a game-changer. Their expertise in cloud solutions helped us scale efficiently and reduce costs significantly.',
    image: reviewImage,
  },
  {
    id: 3,
    name: 'Emily Chen',
    title: 'Product Manager',
    company: 'InnovateLabs',
    rating: 5,
    quote:
      'The mobile app they developed exceeded our expectations. The user experience is flawless, and the performance is outstanding.',
    image: reviewImage,
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'COO',
    company: 'BizHIsave',
    rating: 5,
    quote:
      'Outstanding partnership from start to finish. Webisha Tech understood our vision and delivered a solution that has driven real growth.',
    image: reviewImage,
  },
  {
    id: 5,
    name: 'Emily Johnson',
    title: 'Director of Operations',
    company: 'ScaleUp Inc',
    rating: 5,
    quote:
      'Professional, responsive, and technically excellent. Our new platform has streamlined operations and improved customer satisfaction.',
    image: reviewImage,
  },
];
