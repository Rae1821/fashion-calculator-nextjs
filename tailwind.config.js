/** @type {import('tailwindcss').Config} */
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
      boxShadow: {
        '3xl': '10px 10px #2B283A',
        '4xl': '10px 10px #40B6AD',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern': "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2340b6ad' fill-opacity='0.1'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        '3xl': '10px 10px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
