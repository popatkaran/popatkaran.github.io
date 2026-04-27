import {
  initThemeConfig,
  articlesByCategoryStaticParams,
  articlesByCategoryMetadata,
  ArticlesByCategoryPage,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export async function generateStaticParams() {
  initThemeConfig(themeConfig);
  return articlesByCategoryStaticParams();
}

export const generateMetadata = articlesByCategoryMetadata;
export default ArticlesByCategoryPage;
