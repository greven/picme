// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./js/**/*.js", "../lib/*_web.ex", "../lib/*_web/**/*.*ex"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        headings: ["Montserrat", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  daisyui: {
    styled: true,
    darkTheme: false,
    themes: [
      {
        light: {
          primary: "#FED784",
          secondary: "#F7705A",
          accent: "#0A9396",
          neutral: "#001219",
          "neutral-focus": "#001E29",
          "neutral-content": "#F3FCFF",
          "base-100": "#FAF6F2",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {},
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    // Phoenix utilities
    plugin(({ addVariant }) =>
      addVariant("phx-no-feedback", [".phx-no-feedback&", ".phx-no-feedback &"])
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-click-loading", [
        ".phx-click-loading&",
        ".phx-click-loading &",
      ])
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-submit-loading", [
        ".phx-submit-loading&",
        ".phx-submit-loading &",
      ])
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-change-loading", [
        ".phx-change-loading&",
        ".phx-change-loading &",
      ])
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-error", [".phx-error&", ".phx-error &"])
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-form-error", [":not(.phx-no-feedback).show-errors &"])
    ),
  ],
};
