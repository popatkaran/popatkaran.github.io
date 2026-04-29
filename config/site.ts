import type { SiteConfig } from '@terminal-bird/theme';

export const siteConfig: SiteConfig = {
  /** Short identifier shown in the terminal prompt (e.g. "$ YourName") */
  logo: 'popatkaran',

  /** Full display name used in titles and metadata */
  name: 'Karan Popat',

  /** Canonical URL of your site — no trailing slash */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://popatkaran.github.io',

  /** One-sentence description used in meta tags and OG cards */
  description:
    'Lead Software Engineer & Tech Architect specialising in Go microservices, AI-powered workflows, and large-scale e-commerce backends.',

  author: {
    name: 'Karan Popat',
    email: 'krn.ppt@gmail.com',
  },

  /** Keywords for SEO */
  keywords: [
    'Karan Popat',
    'popatkaran',
    'Karan',
    'Popat',
    'Lead Software Engineer',
    'Staff Software Engineer',
    'Tech Architect',
    'Solution Architect',
    'Go Engineer',
    'Golang',
    'PHP Engineer',
    'Spryker',
    'Magento',
    'Adobe Commerce',
    'Microservices',
    'AI Workflow',
    'n8n',
    'CrewAI',
    'Kafka',
    'Kubernetes',
    'E-commerce Backend',
    'Berlin',
  ],

  social: {
    github: 'https://github.com/popatkaran',
    linkedin: 'https://linkedin.com/in/popatkaran',
    /** Twitter/X handle including the @ */
    twitter: '@popatkaran',
  },

  /** Top-level navigation links */
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // { label: 'Projects', href: '/projects' },
    { label: 'Articles', href: '/articles' },
    // { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;