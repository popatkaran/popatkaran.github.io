import {
  initThemeConfig,
  testimonialsPageNStaticParams,
  testimonialsPageNMetadata,
  TestimonialsPageN,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export function generateStaticParams() {
  initThemeConfig(themeConfig);
  return testimonialsPageNStaticParams();
}

export const generateMetadata = testimonialsPageNMetadata;
export default TestimonialsPageN;
