import type { ContactConfig } from '@terminal-bird/theme';

export const contactConfig: ContactConfig = {
  sections: {
    contact: '70%',
  },
  metadata: {
    description: 'Get in touch — describe what kinds of enquiries you welcome.',
  },
  title: "LET'S CONNECT",
  subtitle: 'A sentence or two inviting visitors to reach out and what to expect.',
  methods: [
    {
      title: 'Email',
      value: 'hello@example.com',
      description: 'Send me a message directly',
      href: 'mailto:hello@example.com',
    },
    {
      title: 'Schedule a meeting',
      value: 'Booking page',
      description: 'Find a time that works for both of us',
      href: 'https://cal.com/yourusername',
    },
  ],
} as const;
