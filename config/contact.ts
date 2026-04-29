import type { ContactConfig } from '@terminal-bird/theme';

export const contactConfig: ContactConfig = {
  sections: {
    contact: '100%',
  },
  metadata: {
    description:
      'Get in touch with Karan Popat — open to senior engineering roles, architecture consulting, AI workflow projects, and speaking engagements.',
  },
  title: "LET'S CONNECT",
  subtitle:
    'Whether you want to talk architecture, AI-powered systems, or the next big backend challenge — I am happy to connect. Drop me a message or book a slot directly.',
  methods: [
    {
      title: 'Email',
      value: 'krn.ppt@gmail.com',
      description: 'Send me a message directly',
      href: 'mailto:krn.ppt@gmail.com',
    },
    {
      title: 'Schedule a meeting',
      value: 'Booking page',
      description: 'Find a time that works for both of us',
      href: 'https://calendar.app.google/VDfc1ju38MvMMucKA',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/popatkaran',
      description: 'Connect professionally',
      href: 'https://linkedin.com/in/popatkaran',
    },
    {
      title: 'GitHub',
      value: 'github.com/popatkaran',
      description: 'Browse my open-source work',
      href: 'https://github.com/popatkaran',
    },
  ],
} as const;