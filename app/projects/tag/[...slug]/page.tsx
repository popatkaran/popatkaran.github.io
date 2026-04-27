import {
  initThemeConfig,
  projectsByTagStaticParams,
  projectsByTagMetadata,
  ProjectsByTagPage,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export async function generateStaticParams() {
  initThemeConfig(themeConfig);
  return projectsByTagStaticParams();
}

export const generateMetadata = projectsByTagMetadata;
export default ProjectsByTagPage;
