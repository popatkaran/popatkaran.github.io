import type { HomeConfig } from '@terminal-bird/theme';

export const homeConfig: HomeConfig = {
  sections: {
    /** Width of the hero section as a CSS value (e.g. '100%', '80vw') */
    hero: '100%',
  },
  hero: {
    /** Large ASCII-style heading displayed in the terminal hero */
    title: 'YOURNAME',

    /** Rotating taglines shown in the typewriter effect */
    taglines: [
      'Software Engineer',
      'Open Source Contributor',
      'Building things that matter',
    ],

    /** Paragraph shown below the taglines */
    description: 'A brief description of your background and what you are passionate about.',

    cta: {
      primary: { label: 'See My Work', href: '/projects' },
      secondary: { label: 'Get In Touch', href: '/contact' },
    },
  },
} as const;
