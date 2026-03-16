/**
 * Portfolio page: featured projects (with description + sector), filters, why partner, testimonials
 */

import prestiage from '../assets/images/portfolio/prestiage.png';
import qtr from '../assets/images/portfolio/qtr.png';
import sai from '../assets/images/portfolio/sai.png';
import karmanDronesUser from '../assets/images/reviews/karman.png';
import presageUser from '../assets/images/reviews/presage.jpeg';
import qtruser from '../assets/images/reviews/qtr.jpeg';

export const portfolioFilters = ['All', 'Enterprise', 'Healthcare'] as const;

export interface FeaturedProject {
  id: number;
  image: string;
  title: string;
  description: string;
  sector: 'Enterprise' | 'Healthcare';
}

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: 1,
    image: sai,
    title: 'Event Management Platform',
    description: 'A dynamic platform designed to streamline event planning and management for enterprises.',
    sector: 'Enterprise',
  },
  {
    id: 2,
    image: prestiage,
    title: 'Tool Management System',
    description: 'An advanced system that optimizes tool tracking and inventory for enterprises.',
    sector: 'Enterprise',
  },
  {
    id: 3,
    image: qtr,
    title: 'Planner Mobile Application',
    description: 'A powerful mobile app designed to help users plan, track, and organize their tasks, goals, and notes in one place, making it easier to stay focused, manage priorities, and improve daily productivity.',
    sector: 'Healthcare',
  },
];

/** Case study detail content for dynamic case study page */
export interface CaseStudyContent {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}

export type CaseStudyData = FeaturedProject & CaseStudyContent;

const caseStudyContentByProjectId: Record<number, CaseStudyContent> = {
  1: {
    overview: 'The client needed a unified platform to manage events at scale—from registration and scheduling to attendee communication and reporting. Webisha Tech designed and built a dynamic event management platform that streamlines the entire lifecycle for enterprises and large organizations.',
    challenge: 'The organization was using multiple disconnected tools for registration, communication, and reporting, leading to inefficiencies, data silos, and a poor experience for both organizers and attendees.',
    solution: 'We built a single, responsive platform with real-time registration, automated communications, session management, and integrated analytics. The solution supports multiple event types and scales to thousands of attendees.',
    results: 'Event setup time was reduced by 40%, attendee satisfaction increased, and organizers gained a single dashboard for all events with real-time insights and reporting.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  2: {
    overview: 'An enterprise client required a centralized system to track, maintain, and optimize their tool and equipment inventory across multiple sites. Webisha Tech delivered an advanced tool management system that improves accountability and reduces loss and downtime.',
    challenge: 'Tools and equipment were tracked on spreadsheets and paper logs, causing frequent loss, duplicate purchases, and difficulty in scheduling maintenance and availability across locations.',
    solution: 'We developed a web-based tool management system with asset tagging, check-in/check-out workflows, maintenance scheduling, dashboards, and reporting. The system integrates with existing identity and inventory data where needed.',
    results: 'Tool accountability improved significantly, maintenance costs were optimized, and the client gained full visibility into asset usage and lifecycle across all sites.',
    technologies: ['React', 'TypeScript', 'REST API', 'MongoDB', 'Docker'],
  },
  3: {
    overview: 'A healthcare provider needed a secure, compliant mobile application to support patient engagement, care plans, and communication between patients and care teams. Webisha Tech built a HIPAA-compliant mobile app that meets strict regulatory requirements while delivering an intuitive user experience.',
    challenge: 'Patient engagement was low, and care coordination relied on phone calls and paper. The client needed a digital solution that could handle PHI securely and support both patients and clinicians.',
    solution: 'We designed and developed a native-style mobile application with secure authentication, encrypted data, role-based access, care plan tracking, messaging, and integrations with existing health systems—all built to HIPAA requirements.',
    results: 'Patient engagement and adherence to care plans increased. Care teams could coordinate more efficiently, and the organization met compliance requirements while improving patient outcomes.',
    technologies: ['React Native', 'Node.js', 'HIPAA-compliant cloud', 'Encryption at rest and in transit'],
  },
};

/** Get full case study data for a project id (for dynamic case study page). Returns null if not found. */
export function getCaseStudyByProjectId(projectId: number): CaseStudyData | null {
  const project = featuredProjectsData.find((p) => p.id === projectId);
  const content = caseStudyContentByProjectId[projectId];
  if (!project || !content) return null;
  return { ...project, ...content };
}

export interface WhyPartnerCard {
  icon: 'results' | 'solutions' | 'team';
  title: string;
  description: string;
}

export const whyPartnerData: WhyPartnerCard[] = [
  {
    icon: 'results',
    title: 'Proven Results',
    description: 'Track record of delivering successful projects that drive business growth.',
  },
  {
    icon: 'solutions',
    title: 'Customized Solutions',
    description: 'Tailored digital solutions to meet the unique needs of your business.',
  },
  {
    icon: 'team',
    title: 'Experienced Team',
    description: 'Experienced developers and consultants dedicated to your success.',
  },
];

export interface PortfolioTestimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

export const portfolioTestimonialsData: PortfolioTestimonial[] = [
  {
    id: 1,
    name: 'Atul Sharma',
    title: 'Founder',
    company: 'Presage Insights',
    quote: "We have redesigned our current website with new colors and components that are user-friendly, following modern UI standards and best practices.",
    image: presageUser,
  },
  {
    id: 2,
    name: 'Pavan Shetty',
    title: 'CTO',
    company: 'Karman Drones',
    quote: 'Webisha Tech redesigned our product and built proof-of-concept mobile apps for AI-powered image processing. Their work was thorough and delivered real results.',
    image: karmanDronesUser,
  },
  {
    id: 3,
    name: 'Jagadeesh Maira',
    title: 'Founder',
    company: 'QTR',
    quote: "The team developed a modern iOS app for planner tracking that our users rely on daily. Clean design, smooth performance, and on-time delivery—exactly what we needed.",
    image: qtruser,
  },
];
