import { ImageResponse } from 'next/og';
import { SITE_TITLE } from '@/lib/site';
import { enTranslations } from '@/utils/translations';

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Imagen para compartir generada en build, estilo neobrutalista del sitio:
// borde negro grueso, sombra desplazada en neon y el verde de marca. Los
// colores vienen de globals.css (--color-green-brutalist y --color-neon);
// ImageResponse no lee CSS, por eso van en duro aqui.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '72px 88px',
          border: '10px solid #000000',
          boxShadow: '24px 24px 0 #00e593',
          backgroundColor: '#ffffff',
        }}
      >
        <div style={{ fontSize: 34, color: '#000000' }}>{enTranslations.bannerText.helloWorld}</div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: '#000000',
            marginTop: 12,
            letterSpacing: '-0.03em',
          }}
        >
          {enTranslations.data.name}
        </div>
        <div style={{ fontSize: 42, fontWeight: 600, color: '#008857', marginTop: 16 }}>
          {enTranslations.data.profesion}
        </div>
        <div style={{ fontSize: 28, color: '#6b7280', marginTop: 40 }}>mmgonnar.com</div>
      </div>
    </div>,
    size,
  );
}
