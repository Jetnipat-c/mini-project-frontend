module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    textColor: {
      primary: "#4FAFD1",
      secondary: "#ffed4a",
      danger: "#e3342f",
      white: "#FFFFFF",
      gray: "#F5F5F5",
      title: "#788C95",
      green: "#23e737",
      red: "#FF0000",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      bgx: "#1A1E1E",
      tx: "#788C95",
      bgnav: "#293233",
      modewhite: "#F5F5F5",
    }),
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      bx: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
