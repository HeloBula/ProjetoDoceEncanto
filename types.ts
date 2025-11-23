import React from 'react';

export interface Product {
  id: number;
  title: string; // Changed from name to title based on your snippet
  description: string;
  image: string;
  price?: number; // Optional since not in your snippet, but good to have
}

export interface SocialLink {
  id: string;
  Icon: React.FC<{ className?: string }>;
  href: string;
  bgClass: string;
}