import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_TITLE } from '@/lib/site';
import { enTranslations } from '@/utils/translations';

export const alt = SITE_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// La ruta es estatica, asi que esto corre en build y process.cwd() es la raiz
// del proyecto. Inter es la fuente del sitio; Source Code Pro sustituye al
// stack mono del sistema (SF Mono/Consolas), que es propietario y no se puede
// empaquetar.
const FONT_DIR = path.join(process.cwd(), 'features/ui/assets/fonts');

// Imagen para compartir generada en build, con el lenguaje del sitio: logo del
// header, borde negro grueso, sombra en neon y la banda de consola del bloque
// de contacto. Los colores vienen de globals.css y de las clases Tailwind de
// esos componentes; ImageResponse no lee CSS, por eso van en duro aqui.
export default async function OpengraphImage() {
  const [inter800, mono400, mono700] = await Promise.all([
    readFile(path.join(FONT_DIR, 'inter-extrabold.ttf')),
    readFile(path.join(FONT_DIR, 'source-code-pro-regular.ttf')),
    readFile(path.join(FONT_DIR, 'source-code-pro-bold.ttf')),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#ffffff',
        padding: '48px 72px 72px 48px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          border: '10px solid #000000',
          boxShadow: '24px 24px 0 #00e593',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '36px 56px 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Source Code Pro',
              fontWeight: 700,
              fontSize: 44,
            }}
          >
            <span style={{ color: '#008857' }}>mm</span>
            <span style={{ color: '#000000' }}>gonnar</span>
          </div>
          <div
            style={{
              fontFamily: 'Source Code Pro',
              fontWeight: 700,
              fontSize: 28,
              color: '#9ca3af',
              letterSpacing: '0.08em',
            }}
          >
            [ PORTFOLIO ]
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'center',
            padding: '0 56px',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter',
              fontWeight: 800,
              fontSize: 112,
              color: '#000000',
              letterSpacing: '-0.03em',
            }}
          >
            {enTranslations.data.name}
          </div>
          <div
            style={{
              fontFamily: 'Source Code Pro',
              fontSize: 40,
              color: '#008857',
              marginTop: 20,
            }}
          >
            {enTranslations.data.profesion}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#00e593',
            padding: '24px 56px',
            fontFamily: 'Source Code Pro',
            fontSize: 28,
            color: '#525252',
          }}
        >
          <span>console&gt; node connect.js|</span>
          <span>mmgonnar.com</span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Inter', data: inter800, weight: 800, style: 'normal' },
        { name: 'Source Code Pro', data: mono400, weight: 400, style: 'normal' },
        { name: 'Source Code Pro', data: mono700, weight: 700, style: 'normal' },
      ],
    },
  );
}
