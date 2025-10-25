/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // required for dark toggle
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Optional: fallback named colors for your gradients
        'light-bg-start': '#f0f4ff',
        'light-bg-end': '#d9e4ff',
        'dark-bg-start': '#0f172a',
        'dark-bg-end': '#1e293b',
      },
    },
  },
  plugins: [],
  safelist: [
    // Force Tailwind to compile all dark variants (especially gradients)
    { pattern: /^dark:/ },
  ],
};
