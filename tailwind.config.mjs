/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Storfully brand tokens — see Storfully_Brand_Assets/storfully-color-palette.png
        ink: '#000000',
        paper: '#ffffff',
        accent: {
          DEFAULT: '#4cc9f0',
          dark: '#2fb4de',
        },
        section: '#f3f4f6',
        line: '#e2e4e8',
      },
      fontFamily: {
        heading: ['Oswald', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      maxWidth: {
        container: '72rem',
      },
    },
  },
  plugins: [],
};
