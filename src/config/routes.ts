/**
 * Routes Configuration
 * Centralized route definitions for the application
 * Add or modify routes here to update navigation throughout the app
 */

import React from 'react';
import Home from '../pages/home/Home';
import SignIn from '../pages/signIn/SignIn';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import ServicesPage from '../pages/services/Services';
import ServiceDetailPage from '../pages/serviceDetail/ServiceDetail';
import PortfolioPage from '../pages/portfolio/Portfolio';
import CaseStudyPage from '../pages/caseStudy/CaseStudy';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  label?: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: Home,
    label: 'Home',
  },
  {
    path: '/signin',
    element: SignIn,
    label: 'Sign In',
  },
  {
    path: '/about',
    element: About,
    label: 'About',
  },
  {
    path: '/services',
    element: ServicesPage,
    label: 'Services',
  },
  {
    path: '/services/:serviceId',
    element: ServiceDetailPage,
    label: 'Service Detail',
  },
  {
    path: '/portfolio',
    element: PortfolioPage,
    label: 'Portfolio',
  },
  {
    path: '/portfolio/case-study/:id',
    element: CaseStudyPage,
    label: 'Case Study',
  },
  {
    path: '/contact',
    element: Contact,
    label: 'Contact',
  },
];

// Route paths as constants for easy reference
export const ROUTE_PATHS = {
  HOME: '/',
  SIGN_IN: '/signin',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE_DETAIL: '/services',
  PORTFOLIO: '/portfolio',
  CASE_STUDY: '/portfolio/case-study',
  CONTACT: '/contact',
} as const;
