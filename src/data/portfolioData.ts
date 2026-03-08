import prestiage from '../assets/images/portfolio/prestiage.png';
import qtr from '../assets/images/portfolio/qtr.png';
import sai from '../assets/images/portfolio/sai.png';

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    image: prestiage,
    title: 'Tool Management',
    category: 'Web Development',
  },
  {
    id: 2,
    image: qtr,
    title: 'Healthcare App',
    category: 'Mobile Application',
  },
  {
    id: 3,
    image: sai,
    title: 'Event Management',
    category: 'Web Development',
  },
  {
    id: 4,
    image: prestiage,
    title: 'Enterprise Portal',
    category: 'Web Development',
  },
  {
    id: 5,
    image: qtr,
    title: 'Productivity Suite',
    category: 'Mobile Application',
  },
];
