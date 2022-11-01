module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `muli\:400,400i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
