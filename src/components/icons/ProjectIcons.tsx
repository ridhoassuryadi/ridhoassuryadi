import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const RaizoraIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" />
    <path d="M6 6h4v1H6V6zM6 8h4v1H6V8zM6 10h2v1H6v-1z" fill="white" />
  </svg>
);

export const HimajinHobbyIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 2l1.5 4.5L14 8l-4.5 1.5L8 14l-1.5-4.5L2 8l4.5-1.5L8 2z" />
  </svg>
);

export const TreonStudioIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v6M5 8h6" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const GeaTourismIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 2L3 6v8h10V6l-5-4z" />
    <rect x="6" y="9" width="4" height="5" fill="white" />
  </svg>
);

export const TempatTeduhIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 1L15 8H1L8 1z" />
    <rect x="3" y="8" width="10" height="6" />
  </svg>
);

export const DigitalCraftedsIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="12" height="12" rx="2" />
    <path d="M6 6v4M8 6v4M10 6v4" stroke="white" strokeWidth="1.5" />
  </svg>
);