/**
 * Theme Configuration
 * Centralized color and styling configuration
 * Change colors here to update the entire application
 */

export const theme = {
  colors: {
    // Background Colors
    primaryBg: '#000000',
    secondaryBg: '#b51919',
    tertiaryBg: '#ffffff',
    
    // Text Colors
    primaryText: '#ffffff',
    secondaryText: '#8892b0',
    tertiaryText: '#000000',
    primaryTextColor: '#e3dcdc',
    secondaryTextColor: '#b51919',
    tertiaryTextColor: '#000000',
    
    // Accent Colors
    accent: '#4a9eff',
    hover: '#64b5f6',
    
    // Additional Colors
    code: '#4a9eff',
    border: 'rgba(255, 255, 255, 0.2)',
    borderLight: 'rgba(255, 255, 255, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    shadowLight: 'rgba(0, 0, 0, 0.1)',
    
    // Specific UI Colors
    white: '#ffffff',
    black: '#000000',
    grayLight: '#f5f5f5',
    grayDark: '#1a1a1a',
    grayDarker: '#2a2a2a',
    hoverSecondary: '#d14d56',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)',
    dark: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '50%',
  },
  
  transitions: {
    default: '0.3s ease',
    fast: '0.2s ease',
    slow: '0.5s ease',
  },
} as const;

export type Theme = typeof theme;
