# Portfolio Personal - Mariela Gonzalez

Portfolio personal moderno construido con Next.js 15, React 19 y TypeScript, que presenta proyectos, habilidades y experiencia profesional con un diseño neobrutalista distintivo. La aplicación implementa internacionalización (i18n) para soporte multiidioma (ES/EN) y utiliza las mejores prácticas de desarrollo moderno.

## 🎯 Descripción del Proyecto

Este portfolio es un ejemplo de aplicación web moderna que demuestra habilidades fullstack, combinando diseño UX/UI con desarrollo técnico. La aplicación está estructurada siguiendo principios de arquitectura limpia, con una organización basada en features que facilita el mantenimiento y la escalabilidad.

## ✨ Por qué es un buen ejemplo de buenas prácticas

### 🏗️ Arquitectura y Organización

- **Feature-based folder structure**: El código está organizado por features (`features/about-me`, `features/projects`, `features/skills`), lo que facilita la localización de funcionalidades y mejora la mantenibilidad.
- **Separación de responsabilidades**: Cada feature contiene sus propios componentes, tipos, utilidades y constantes, siguiendo el principio de cohesión.
- **Componentes reutilizables**: Componentes UI como `NeobrutalistCard`, `Modal`, y `ContentSection` están diseñados para ser reutilizables y composables.

### 💻 Tecnologías y Stack Moderno

- **Next.js 15 con App Router**: Utiliza la última versión de Next.js con el nuevo App Router para mejor rendimiento y SEO.
- **React 19**: Aprovecha las últimas características de React para una mejor experiencia de desarrollo.
- **TypeScript con strict mode**: Tipado fuerte que previene errores en tiempo de desarrollo y mejora la experiencia del desarrollador.
- **Tailwind CSS 4**: Utilización de utility-first CSS con configuración moderna para un diseño consistente y responsive.

### 🎨 Buenas Prácticas de Código

- **TypeScript bien tipado**: Interfaces y tipos definidos para props, estados y datos (`ProjectCardProps`, `Project`, `IconItem`).
- **Funciones puras y composables**: Utilidades como `cn()` para merge de clases CSS de forma segura.
- **Naming conventions consistentes**: Uso de kebab-case para carpetas y camelCase para funciones/variables.
- **Componentes funcionales**: Uso de componentes funcionales con hooks modernos de React.

### 🌐 Internacionalización (i18n)

- **Soporte multiidioma**: Implementación completa de i18n con `react-i18next` para español e inglés.
- **Traducciones centralizadas**: Todas las traducciones están organizadas en `utils/constants.ts` para fácil mantenimiento.
- **Provider pattern**: Uso de `LanguageProvider` para manejar el contexto de idioma de forma global.

### 🎯 Mejores Prácticas de UI/UX

- **Diseño responsive**: Implementación mobile-first con breakpoints personalizados (`custom-sm`, `custom-lg`).
- **Accesibilidad**: Uso de componentes de Radix UI que incluyen características de accesibilidad por defecto.
- **Optimización de imágenes**: Uso de `next/image` para optimización automática de imágenes.
- **Animaciones suaves**: Integración de Framer Motion para transiciones y animaciones fluidas.

### 🔧 Configuración y Herramientas

- **ESLint y Prettier**: Configuración de linting y formateo para mantener consistencia en el código.
- **Path aliases**: Configuración de `@/*` para imports absolutos más limpios.
- **Turbopack**: Uso de Turbopack para builds más rápidos en desarrollo.

## 🚀 Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo con Turbopack
- `build`: Construye la aplicación para producción
- `start`: Inicia el servidor de producción
- `lint`: Ejecuta ESLint
- `format`: Formatea el código con Prettier
- `format:check`: Verifica el formato sin modificar archivos

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15.5.27
- **UI Library**: React 19.1.0
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **UI Components**: Radix UI, Shadcn UI
- **Animaciones**: Framer Motion
- **i18n**: react-i18next
- **Carousel**: Embla Carousel
- **Iconos**: Lucide React

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
