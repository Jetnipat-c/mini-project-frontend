module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
   
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'bgx': '#1A1E1E',
      'tx': '#788C95',
      'bgnav': '#293233'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
