import { generateSitemap } from '@terminal-bird/theme';
import themeConfig from '../theme.config';

export default function sitemap() {
  return generateSitemap(themeConfig);
}
