import type { HomeConfig } from '@terminal-bird/theme';

export const homeConfig: HomeConfig = {
  sections: {
    /** Width of the hero section as a CSS value (e.g. '100%', '80vw') */
    hero: '100%',
  },
  hero: {
    /** Large ASCII-style heading displayed in the terminal hero */
    title: 'Karan Popat',

    /** Rotating taglines shown in the typewriter effect */
    taglines: [
      'Lead Software Engineer',
      'Tech Architect @ Accenture Berlin',
      'Go & PHP Microservices',
      'AI Workflow Engineer',
      'Building backends that scale',
    ],

    /** Paragraph shown below the taglines */
    description:
      '12+ years designing and delivering high-performance e-commerce backends. I architect Go microservices, tame Kafka event streams, and build production-grade AI workflows with n8n, CrewAI, and Claude Code — then share what I learn.',

    cta: {
      primary: { label: 'What do I think?', href: '/articles' },
      secondary: { label: 'Get In Touch', href: '/contact' },
    },
  },
} as const;