/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xxs: ['0.5rem', {
        lineHeight: '0.5rem',
      }],
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['1.75rem', {
        lineHeight: '2.15rem',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      }],
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }
      
      'md': '600px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

    },
  },
  plugins: [],
};