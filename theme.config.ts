import type { TerminalBirdConfig } from '@terminal-bird/theme';
import { siteConfig } from './config/site';
import { homeConfig } from './config/home';
import { aboutConfig } from './config/about';
import { contactConfig } from './config/contact';
import { articlesConfig } from './config/articles';
import { projectsConfig } from './config/projects';
import { testimonialsConfig } from './config/testimonials';
import { layoutConfig } from './config/layout';
import { themeConfig as theme } from './config/theme';
import { notFoundConfig } from './config/notfound';

const themeConfig: TerminalBirdConfig = {
  site: siteConfig,
  home: homeConfig,
  about: aboutConfig,
  contact: contactConfig,
  articles: articlesConfig,
  projects: projectsConfig,
  testimonials: testimonialsConfig,
  layout: layoutConfig,
  theme,
  notFound: notFoundConfig,
};

export default themeConfig;
