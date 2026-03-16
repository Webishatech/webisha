import karmanDronesUser from '../assets/images/reviews/karman.png';
import presageUser from '../assets/images/reviews/presage.jpeg';
import qtruser from '../assets/images/reviews/qtr.jpeg';

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
    name: 'Atul Sharma',
    title: 'Founder',
    company: 'Presage Insights',
    rating: 5,
    quote:
      "Webisha Tech redesigned our website using modern UI principles, updated visuals, and improved components, making the platform more intuitive and user-friendly",
    image: presageUser,
  },
  {
    id: 2,
    name: 'Jagadeesh Maira',
    title: 'Founder',
    company: 'QTR',
    rating: 5,
    quote:
      "The team developed a modern iOS app for planner tracking that our users rely on daily. Clean design, smooth performance, and on-time delivery—exactly what we needed.",
    image: qtruser,
  },
  {
    id: 3,
    name: 'Pavan Shetty',
    title: 'CTO',
    company: 'Karman Drones',
    rating: 5,
    quote:
      'Webisha Tech redesigned our product and built proof-of-concept mobile apps for AI-powered image processing. Their work was thorough and delivered real results.',
    image: karmanDronesUser,
  },
];
