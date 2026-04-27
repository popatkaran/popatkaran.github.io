import {
  initThemeConfig,
  projectsPageNStaticParams,
  projectsPageNMetadata,
  ProjectsPageN,
} from '@terminal-bird/theme';
import themeConfig from '../../../../theme.config';

export async function generateStaticParams() {
  initThemeConfig(themeConfig);
  return projectsPageNStaticParams();
}

export const generateMetadata = projectsPageNMetadata;
export default ProjectsPageN;
