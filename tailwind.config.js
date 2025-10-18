/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: [
          'var(--font-consolas)',
          'Consolas',
          'Monaco',
          'Courier New',
          'monospace',
        ],
        consolas: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      colors: {
        'green-brutalist': '#008857',
      },
    },
  },
  plugins: [],
};
