import {
  initThemeConfig,
  articlesByTagStaticParams,
  articlesByTagMetadata,
  ArticlesByTagPage,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export async function generateStaticParams() {
  initThemeConfig(themeConfig);
  return articlesByTagStaticParams();
}

export const generateMetadata = articlesByTagMetadata;
export default ArticlesByTagPage;
