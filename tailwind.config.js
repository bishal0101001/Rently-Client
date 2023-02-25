/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        60: "60deg",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      dropShadow: {
        home: "-10px 15px 4px rgba(0, 0, 0, 0.25)",
      },
      height: {
        "70vh": "70vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      width: {
        "90vw": "90vw",
        "70vw": "70vw",
      },
      zIndex: {
        9999: "9999",
        99999: "99999",
        999999: "999999",
      },
      keyframes: {
        // spin: {
        //   "0%": {
        //     transform: "rotate(0deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg)",
        //   },
        // },
        // pulse: {
        //   "0%, 100%": {
        //     transform: "scale(1)",
        //   },
        //   "50%": {
        //     transform: "scale(1.1)",
        //   },
        // },
        // bounce: {
        //   "0%, 100%": {
        //     transform: "translateY(0)",
        //   },
        //   "50%": {
        //     transform: "translateY(-0.5rem)",
        //   },
        // },
        spinpulse: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(120deg)" },
          "20%": { transform: "rotate(240deg)" },
          "30%": { transform: "rotate(360deg)" },
          "40%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "60%": { transform: "scale(1)" },
          "70%": { transform: "scale(1.1)" },
          "80%": { transform: "scale(1)" },
          "90%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "animate-spin-slow": "spin 6s linear infinite",
        "animate-pulse-slow": "pulse 6s ease-in-out infinite",
        "animate-bounce-slow": "bounce 1.5s ease-in-out infinite",
        home: "spinpulse 4s linear infinite",
      },
    },
    colors: ({ colors }) => ({
      primary: "#000",
      secondary: "#fff",
      light: "#EEEEEE",
      superLight: "#F5F5F5",
      light2: "#AFAFAF",
      lightText: "#8A8A8A",
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
