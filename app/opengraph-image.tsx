import { ImageResponse } from 'next/og';
import { themePalette } from '@terminal-bird/theme';
import themeConfig from '../theme.config';

export const alt = themeConfig.site.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const palette = themePalette[themeConfig.theme.activeDark] ?? themePalette.dark;
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: palette.background,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.foreground,
        fontFamily: 'monospace',
        padding: '40px',
      }}
    >
      <div style={{ display: 'flex', color: palette.accent, marginBottom: '20px' }}>
        $ {themeConfig.site.logo}
      </div>
      <div style={{ display: 'flex', fontSize: 48, textAlign: 'center' }}>
        {themeConfig.site.description}
      </div>
      <div style={{ display: 'flex', fontSize: 32, color: palette.muted, marginTop: '20px' }}>
        {themeConfig.site.author.name}
      </div>
    </div>,
    { ...size }
  );
}
