// next.config.js

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuración de Imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.giphy.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mszggpdjafkzgnzthfne.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  /* otras opciones de configuración aquí */
};

export default nextConfig;
