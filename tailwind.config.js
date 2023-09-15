/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'turq': '#088C7F',
      'light-turq': '#40B6AD',
      'light-green': "#2CC19E",
      'lighter-green': 'rgba(44,193,158,.7)',
      'tropicana': '#F27052',
      'light-tropicana': 'rgba(242,111,82,.7)',
      'lightest-tropicana': 'rgba(242,111,82,.3)',
      'dark': '#2B283A',
      'light': '#F2F2F2',
      'black': 'rgba(0,0,0,0.8)',
      'pure-black': 'rgba(0,0,0,1)',
      assistant: 'rgba(var(--color-assistant), <alpha-value>)',
      user: 'rgba(var(--color-user), <alpha-value>)',
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        lg: '2px 2px 4px var(--tw-shadow-color)',
      },
      boxShadow: {
        '3xl': '10px 10px #2B283A',
        '4xl': '10px 10px #40B6AD',
      },
      // boxShadow: {
      //   '3xl': '10px 10px rgba(0,0,0,1)',
      // },
      fontFamily: {
        display: ['var(--font-sacramento)'],
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow')}
      )
    }),
  ],
}
