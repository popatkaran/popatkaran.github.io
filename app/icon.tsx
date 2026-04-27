import { ImageResponse } from 'next/og';
import { themePalette } from '@terminal-bird/theme';
import themeConfig from '../theme.config';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  const palette = themePalette[themeConfig.theme.activeDark] ?? themePalette.dark;
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: palette.background,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.accent,
        fontFamily: 'monospace',
      }}
    >
      $
    </div>,
    { ...size }
  );
}
