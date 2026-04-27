import type { AboutConfig } from '@terminal-bird/theme';

export const aboutConfig: AboutConfig = {
  sections: {
    hero: '100%',
    coreServices: '80%',
    expertise: '80%',
    principles: '80%',
    certifications: '80%',
    cta: '60%',
  },
  metadata: {
    description: 'A longer description of yourself for the About page meta tag.',
  },
  hero: {
    title: 'Who is YOURNAME?',
    subtitle: 'A paragraph or two about your background, experience, and what makes you unique.',
  },
  coreServices: {
    title: 'Core Services',
    description: 'What I bring to the table',
    services: [
      {
        title: 'Service One',
        value: 'Short Value Prop',
        description: 'Describe this service in one or two sentences.',
        href: '#',
      },
      {
        title: 'Service Two',
        value: 'Short Value Prop',
        description: 'Describe this service in one or two sentences.',
        href: '#',
      },
    ],
  },
  expertise: {
    title: 'Technical Expertise',
    description: 'Technologies and tools I work with',
    skills: [
      {
        title: 'Frontend',
        value: 'React, Next.js, TypeScript',
        description: 'Describe your frontend skills.',
        href: '#',
      },
      {
        title: 'Backend',
        value: 'Node.js, Go, PostgreSQL',
        description: 'Describe your backend skills.',
        href: '#',
      },
    ],
  },
  principles: {
    title: 'Engineering Principles',
    description: 'Core values that guide my work',
    principles: [
      {
        title: 'Principle One',
        value: 'Short Tagline',
        description: 'Explain this principle in a sentence or two.',
        href: '#',
      },
    ],
  },
  certifications: {
    title: 'Certifications & Credentials',
    description: 'Formal recognition across platforms and disciplines',
    certifications: [
      {
        title: 'Platform Name',
        value: 'Certification Name',
        description: 'Certification description — year',
        href: '#',
      },
    ],
  },
  cta: {
    title: "Let's Work Together",
    description: 'A short call-to-action inviting visitors to reach out.',
    buttons: [
      { label: 'Contact Me', href: '/contact', variant: 'primary' as const },
      { label: 'View Projects', href: '/projects', variant: 'secondary' as const },
    ],
  },
} as const;
