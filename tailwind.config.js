module.exports = {
  content: ["./src/**/*.{html,js, jsx,ts,tsx, css}"],
  theme: {
    extend: {
      colors: {
        "seil-light-grey": "#F9F9FA",
        "seil-dark-green": "#2E5549",
        "seil-dark-grey": "#D8DCDD",
        "seil-light-green": "#3E8679",
        "seil-black": "#2A2A2A",
        "seil-light-black": "#444444",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        logo: ["34px"],
      },
      inset: {
        "side-bar": "55px",
      },
    },
  },
  plugins: [],
};
