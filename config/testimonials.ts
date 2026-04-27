import type { TestimonialsConfig } from '@terminal-bird/theme';

export const testimonialsConfig: TestimonialsConfig = {
  sections: {
    list: '100%',
  },
  hero: {
    title: '$ testimonials',
    description: '> what people say about working with me',
  },
  metadata: {
    title: 'Testimonials — Your Name',
    description: 'What colleagues and clients say about working with me.',
  },
  backLink: {
    text: 'Back to Testimonials',
  },
  /** Number of testimonials shown per page */
  itemsPerPage: 3,
} as const;
