module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',

        // Background
        background: {
          light: 'rgb(var(--color-background-light) / <alpha-value>)',
          dark: 'rgb(var(--color-background-dark) / <alpha-value>)',
        },

        // Surface
        surface: {
          light: 'rgb(var(--color-surface-light) / <alpha-value>)',
          dark: 'rgb(var(--color-surface-dark) / <alpha-value>)',
        },

        // Text
        'text-primary': {
          light: 'rgb(var(--color-text-primary-light) / <alpha-value>)',
          dark: 'rgb(var(--color-text-primary-dark) / <alpha-value>)',
        },
        'text-secondary': {
          light: 'rgb(var(--color-text-secondary-light) / <alpha-value>)',
          dark: 'rgb(var(--color-text-secondary-dark) / <alpha-value>)',
        },

        // Border
        border: {
          light: 'rgb(var(--color-border-light) / <alpha-value>)',
          dark: 'rgb(var(--color-border-dark) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
