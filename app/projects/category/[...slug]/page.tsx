import {
  initThemeConfig,
  projectsByCategoryStaticParams,
  projectsByCategoryMetadata,
  ProjectsByCategoryPage,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export async function generateStaticParams() {
  initThemeConfig(themeConfig);
  return projectsByCategoryStaticParams();
}

export const generateMetadata = projectsByCategoryMetadata;
export default ProjectsByCategoryPage;
