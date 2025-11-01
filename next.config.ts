// next.config.js

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuración de Imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.giphy.com', // <--- Dominio de Giphy
        port: '',
        pathname: '/media/**', // Permite todas las rutas en el directorio media
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // <--- ¡AÑADIDO ESTE DOMINIO!
        port: '',
        pathname: '/**', // Permite cualquier ruta de imagen en este dominio
      },
    ],
  },
  /* otras opciones de configuración aquí */
};

export default nextConfig;
