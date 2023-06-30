/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xxs: ['0.5rem', {
        lineHeight: '0.5rem',
      }],
      sm: ['0.8rem', {
        lineHeight: '1rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      base: ['1rem', {
        lineHeight: '1.25rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      xl: ['1.25rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '2xl': ['1.4rem', {
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
      '6xl': '3.5rem',
    },
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }
      
      'ssmed': '520px',

      'smed': '650px',

      'md': '840px',
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