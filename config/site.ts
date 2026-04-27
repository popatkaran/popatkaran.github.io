import type { SiteConfig } from '@terminal-bird/theme';

export const siteConfig: SiteConfig = {
  /** Short identifier shown in the terminal prompt (e.g. "$ YourName") */
  logo: 'YourName',

  /** Full display name used in titles and metadata */
  name: 'Your Name',

  /** Canonical URL of your site — no trailing slash */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',

  /** One-sentence description used in meta tags and OG cards */
  description: 'A short description of who you are and what you do.',

  author: {
    name: 'Your Name',
    email: 'hello@example.com',
  },

  /** Keywords for SEO */
  keywords: ['Your Name', 'Software Engineer', 'TypeScript', 'Next.js'],

  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    /** Twitter/X handle including the @ */
    twitter: '@yourusername',
  },

  /** Top-level navigation links */
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Articles', href: '/articles' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
