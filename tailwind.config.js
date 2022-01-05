module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        inDown: 'fadeInDown 1s linear'
      },
      keyframes: (theme) => ({
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'scale(1.5) translateY(-100px) translateX(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0) translate(0)'
          }
        }
      })
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '56px',
      8: '64px'
    }
  },
  plugins: []
}
