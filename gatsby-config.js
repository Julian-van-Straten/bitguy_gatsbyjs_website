/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `src/Slider`, // wherever background images are stored  
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: `/Users/Jules/gatsby/tutorial-part-three/src/Images/Bitguy_Logo.svg` // See below to configure properly
      }
    },
  }
  ],
}

