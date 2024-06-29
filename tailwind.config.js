/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme:{
    extend:{
      colors:{
        bone:"#f4f0e8",
        space:"#2d383a",
        onyx:"#f4f0e8",
      },
      keyframes:{
        shuffle:{
          '0%,100%':{
            transform:'rotate(0deg)'
          },
          '50%':{
            transform:'rotate(75deg)'
          }
        }
      },
      animation:{
        shuffle:'shuffle 0.25s'
      }
    },

  },
  plugins: [],
}

