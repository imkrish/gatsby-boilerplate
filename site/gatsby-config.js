module.exports = {
  siteMetadata: {
    title: `Site Title`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
};
