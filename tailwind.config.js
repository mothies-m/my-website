/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textShadow: {
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                sm: '0 2px 2px var(--tw-shadow-color)',
                lg: '0 4px 10px var(--tw-shadow-color)',
            },
        },
    },
  plugins: [
      plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
}

