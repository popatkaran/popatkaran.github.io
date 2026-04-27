import {
  initThemeConfig,
  articlesPageNStaticParams,
  articlesPageNMetadata,
  ArticlesPageN,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export async function generateStaticParams() {
  initThemeConfig(themeConfig);
  return articlesPageNStaticParams();
}

export const generateMetadata = articlesPageNMetadata;
export default ArticlesPageN;
