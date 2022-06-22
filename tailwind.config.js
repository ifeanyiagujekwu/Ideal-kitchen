module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'sm': {'min': '500px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      colors: {
        amber: '#ffbf00',
        goose: ' #D1D0CE',
        dark_gray: '#A9A9A9'
      },
      backgroundImage: {
        pic1: "url('/src/images/pic1.jpeg')",
        pic2: "url('/src/images/pic2.jpeg')",
        pic3: "url('/src/images/pic3.jpeg')",
        pic4: "url('/src/images/pic4.jpeg')",
        pic5: "url('/src/images/pic5.jpeg')",
        pic6: "url('/src/images/pic6.jpeg')",
        pic7: "url('/src/images/pic7.jpeg')",
        pic8: "url('/src/images/pic8.jpeg')",
        pic9: "url('/src/images/pic9.jpeg')",
        pic10: "url('/src/images/pic10.jpeg')",
        pic11: "url('/src/images/pic11.jpeg')",
        pic12: "url('/src/images/pic12.jpeg')",
        pic13: "url('/src/images/pic13.jpeg')",
        vitamilk: "url('/src/images/vitamilk.jpeg')",
        turbo_king: "url('/src/images/turbo-king.jpg')",
        trophy: "url('/src/images/trophy.jpg')",
        trophy_stout: "url('/src/images/trophy-stout.jpg')",
        tiger: "url('/src/images/tiger.jpg')",
        star_radler_red: "url('/src/images/star-radler-red.png')",
        star_radler_orange: "url('/src/images/star-radler-orange.jpg')",
        smooth_stout: "url('/src/images/smooth-stout.jpg')",
        smirnoff: "url('/src/images/smirnoff.jpg')",
        red_bull: "url('/src/images/redbull.jpg')",
        origin_bitters: "url('/src/images/origin-bitters.png')",
        origin_beer: "url('/src/images/origin-beer.jpg')",
        odogwu_bitters: "url('/src/images/odogwu_bitters.jpg')",
        monster: "url('/src/images/monster.jpg')",
        medium_stout: "url('/src/images/medium-stout.jpg')",
        legend_stout: "url('/src/images/legend.jpg')",
        hollandia_yoghurt: "url('/src/images/hollandia-yoghurt')",
        heineken: "url('/src/images/heineken.jpg')",
        gulder: "url('/src/images/gulder.jpeg')",
        guinness_malt: "url('/src/images/guinness-malt')",
        guinness_malt_can: "url('/src/images/guinness-malt-can')",
        goldberg: "url('/src/images/goldberg.jpg')",
        freshyoutube: "url('/src/images/freshyoutube.jpg')",
        fearless: "url('/src/images/fearless.jpg')",
        fayrouz_can: "url('/src/images/fayrouz-can.jpg')",
        dudu_youghurt: "url('/src/images/dudu-youghurt.jpg')",
        desperado: "url('/src/images/desperado.jpg')",
        bullet: "url('/src/images/bullet.jpg')",
        budweiser: "url('/src/images/budweiser.jpg')",
        big_stout: "url('/src/images/big-stout.jpg.')",
        amstel: "url('/src/images/amstel.jpg')",
        amstel_can: "url('/src/images/amstel-can.jpg')",
        three_three: "url('/src/images/33.jpg')"

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
