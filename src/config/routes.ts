/**
 * Routes Configuration
 * Centralized route definitions for the application
 * Add or modify routes here to update navigation throughout the app
 */

import React from 'react';
import Home from '../pages/home/Home';
import SignIn from '../pages/signIn/SignIn';
import About from '../pages/about/About';

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
];

// Route paths as constants for easy reference
export const ROUTE_PATHS = {
  HOME: '/',
  SIGN_IN: '/signin',
  ABOUT: '/about',
} as const;
