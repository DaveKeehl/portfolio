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
          100: 'hsl(182deg 88% 97%)',
          200: 'hsl(182deg 88% 49%)',
          '200/40': 'hsl(182deg 88% 49% / 40%)',
          300: 'hsl(182deg 88% 39%)'
        },
        blue: {
          100: '#B7CDE5',
          200: '#476485',
          '200/25': 'hsl(212deg 30% 40% / 25%)',
          300: '#031F40',
          400: 'hsl(215deg 89% 8%)'
        }
      },
      boxShadow: ({ theme }) => ({
        'primary-btn-focus': `0 0 0 4px ${theme('colors.turquoise.300')}`,
        'secondary-btn-focus': `0 0 0 2px ${theme('colors.turquoise.200')}`
      }),
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
      },
      backgroundImage: ({ theme }) => ({
        hero: `linear-gradient(to right, ${theme(
          'colors.turquoise.100'
        )} 0%, ${theme('colors.turquoise.300')} 100%)`,
        header: `linear-gradient(to right, transparent, ${theme(
          'colors.blue.200/25'
        )}, transparent)`,
        about: `linear-gradient(to bottom, ${theme(
          'colors.grayscale.300'
        )} 31.25%, ${theme('colors.blue.400')} 100%)`,
        'about-img':
          'linear-gradient(52.82deg, rgba(2, 19, 39, 0.8) 18.42%, rgba(2, 19, 39, 0) 107.21%)',
        post: `linear-gradient(to bottom, ${theme(
          'colors.grayscale.300'
        )} 150px, ${theme('colors.blue.400')} 550px)`,
        'project-card':
          'linear-gradient(90deg, rgba(2, 19, 38, 0.9) 10%, rgba(2, 21, 43, 0.2) 50%)',
        'project-card-reversed':
          'linear-gradient(90deg, rgba(2, 21, 43, 0.2) 50%, rgba(2, 19, 38, 0.9) 90%)'
      })
    }
  },
  plugins: []
};
