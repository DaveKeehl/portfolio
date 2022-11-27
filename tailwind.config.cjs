/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '500px'
      },
      colors: {
        grayscale: {
          100: '#EEF2F6',
          300: 'hsl(212deg 90% 6%)'
        },
        turquoise: {
          100: '#9AF6F9',
          200: '#0FE2EA',
          300: '#0CB5BB'
        },
        blue: {
          100: '#B7CDE5',
          200: '#476485',
          300: '#031F40',
          400: 'hsl(215deg 89% 8%)'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Menlo', 'sans-serif']
      },
      fontSize: {
        h1: '48px',
        h2: '36px',
        h3: '28px',
        h4: '18px',
        h5: '16px',
        p1: '24px',
        p2: '22px',
        p3: '20px',
        p4: '18px',
        p5: '16px',
        p6: '14px'
      },
      gridTemplateColumns: {
        blogPosts: 'repeat(auto-fill, minmax(360px, 1fr))'
      }
    }
  },
  plugins: []
};
