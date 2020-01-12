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
    
  },
  {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`${2241760115855388}`], // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
        },
        key: process.env.EAAmoEA9lA5UBAI5izpKsB97oylN2XSaFi969yWLjZCbgu3WsBhGLgCwSat2xh7ZAuzjQeZBZBVjIZA1poxhfAqyC4vZAEQo2fzZAjWPH5ZB6ZCsl0ckDB6GZCl3GdynqJMl7akLvL8HbX5V180sghWBA3eEJQDvjMZCNjJ4gLA8XTxYYfPd2rYGag0Qu2rOg0ZCTUnoZD, // You will need to create a Facebook application and go through review in order to get an API token.
      },
    },
  ],
}

