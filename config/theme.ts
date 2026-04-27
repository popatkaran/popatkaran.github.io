import type { ThemeConfig } from '@terminal-bird/theme';

/**
 * Theme Configuration
 *
 * activeLight — which palette to use in light mode
 * activeDark  — which palette to use in dark mode
 *
 * Available palettes: 'light' | 'dark' | 'light_lux' | 'dark_lux'
 * Color values are defined inside the package (theme-palette.ts) and
 * are not user-configurable. To customise colors, override CSS variables
 * in your own globals.css after importing '@terminal-bird/theme/styles'.
 */
export const themeConfig: ThemeConfig = {
  activeLight: 'light',
  activeDark: 'dark',
} as const;
