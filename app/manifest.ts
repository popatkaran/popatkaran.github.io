import { generateManifest } from '@terminal-bird/theme';
import themeConfig from '../theme.config';

export default function manifest() {
  return generateManifest(themeConfig);
}
