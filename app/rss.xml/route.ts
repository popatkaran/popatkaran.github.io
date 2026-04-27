import { generateRssFeed } from '@terminal-bird/theme';
import themeConfig from '../../theme.config';

export async function GET() {
  const rss = generateRssFeed(themeConfig);
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
