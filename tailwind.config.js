/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
      },
      dropShadow: {
        home: "-10px 15px 4px rgba(0, 0, 0, 0.25)",
      },
      height: {
        "90vh": "90vh",
        "95vh": "95vh",
      },
      width: {
        "90vw": "90vw",
      },
      zIndex: {
        99999: "99999",
      },
    },
    colors: ({ colors }) => ({
      primary: "#000",
      secondary: "#fff",
      light: "#EEEEEE",
      dark: "#4D4D4D",
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
  },
  plugins: [],
};
