const purge = process.env.NODE_ENV === 'production' ? true : false;
console.log("Current mode", process.env.NODE_ENV, purge);
module.exports = {
  purge: {
    enabled: purge,
    content: ['./public/**/*.html','./public/**/*.js',]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
