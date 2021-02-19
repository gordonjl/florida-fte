module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['NimbusSansL-Reg']
      },
      textColor: {
             'nav-black': '#333333',
           },
      colors: {
        'primary': {DEFAULT:'#008549', 200:'#777777'},
        'secondary': '#186298',
        'fl-yellow': '#FFDD00'
      },
      flexGrow: {
        '1': '1',
        '2': '2'
      },
      backgroundImage: {
        'stroke-texture': 'url(/Stroke-Texture.png)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
