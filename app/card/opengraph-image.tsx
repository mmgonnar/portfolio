// Reutiliza la imagen del segmento raiz: este layout define su propio bloque
// openGraph y eso descarta la imagen heredada, asi que el segmento necesita
// su propio archivo de imagen.
export { default, alt, size, contentType } from '@/app/opengraph-image';
