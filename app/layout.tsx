import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import { TerminalBirdLayout, initThemeConfig } from '@terminal-bird/theme';
import themeConfig from '../theme.config';
import '@terminal-bird/theme/styles';

// Initialise config at module load time so getConfig() works in all server components
initThemeConfig(themeConfig);

const font = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono', // must be a string literal (Next.js font loader constraint)
  display: 'swap',
});

const { site } = themeConfig;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.logo}`,
    template: `%s | ${site.logo}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.author.name, url: site.url }],
  creator: site.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    creator: site.social.twitter,
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: site.url,
    types: { 'application/rss+xml': `${site.url}/rss.xml` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <TerminalBirdLayout config={themeConfig} fontVariable={font.variable}>
      {children}
    </TerminalBirdLayout>
  );
}
