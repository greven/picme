// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./js/**/*.js', '../lib/*_web.ex', '../lib/*_web/**/*.*ex'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        headings: ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          DEFAULT: '#F76E58',
          50: '#FEF4F2',
          100: '#FEE6E2',
          200: '#FED1CA',
          300: '#FCB1A5',
          400: '#F76E58',
          500: '#EF5C44',
          600: '#DC3F26',
          700: '#B9321C',
          800: '#992C1B',
          900: '#7F2B1D',
        },
        secondary: {
          DEFAULT: '#FFD481',
          50: '#FFF8EB',
          100: '#FFECC6',
          200: '#FFD481',
          300: '#FFBB4A',
          400: '#FFA120',
          500: '#F97D07',
          600: '#DD5802',
          700: '#B73A06',
          800: '#942C0C',
          900: '#7A250D',
        },
        tertiary: {
          DEFAULT: '#077D7A',
          50: '#EFFEFC',
          100: '#C8FFF6',
          200: '#92FDEE',
          300: '#53F5E3',
          400: '#20E1D3',
          500: '#07C5BA',
          600: '#039E99',
          700: '#077D7A',
          800: '#0B6463',
          900: '#0E5352',
        },

        dark: {
          DEFAULT: colors.neutral[900],
          ...colors.neutral,
        },
        info: {
          DEFAULT: colors.sky[900],
          ...colors.sky,
        },
        success: {
          DEFAULT: colors.emerald[900],
          ...colors.emerald,
        },
        warning: {
          DEFAULT: colors.amber[900],
          ...colors.amber,
        },
        error: {
          DEFAULT: colors.rose[900],
          ...colors.rose,
        },

        surface: {
          light: {
            1: '#F9F8EE',
            2: '#FFFFFF',
            3: '#EFECD4',
          },
          dark: {
            1: colors.neutral[900],
            2: colors.neutral[800],
            3: colors.neutral[700],
          },
        },
        text: {
          light: {
            1: colors.neutral[900],
            2: colors.neutral[800],
            3: colors.neutral[700],
          },
          dark: {
            1: colors.neutral[100],
            2: colors.neutral[200],
            3: colors.neutral[300],
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addVariant }) => addVariant('phx-no-feedback', ['.phx-no-feedback&', '.phx-no-feedback &'])),
    plugin(({ addVariant }) => addVariant('phx-click-loading', ['.phx-click-loading&', '.phx-click-loading &'])),
    plugin(({ addVariant }) => addVariant('phx-submit-loading', ['.phx-submit-loading&', '.phx-submit-loading &'])),
    plugin(({ addVariant }) => addVariant('phx-change-loading', ['.phx-change-loading&', '.phx-change-loading &'])),
    plugin(({ addVariant }) => addVariant('phx-error', ['.phx-error&', '.phx-error &'])),
    plugin(({ addVariant }) => addVariant('phx-form-error', [':not(.phx-no-feedback).show-errors &'])),
  ],
}
