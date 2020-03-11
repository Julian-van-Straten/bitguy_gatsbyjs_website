/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



module.exports = {
  
  siteMetadata: {
    title: "Welcome to Bitguy",
    description:
      "Bitguy is the best iPhone, Huawei and PC repair service in Bournemouth, Dorset.",
    url: "https://www.bitguy.net", // No trailing slash allowed!
    image: "./bg-car-lq-1024x768.jpg", // Path to your image you placed in the 'static' folder
    siteUrl: 'https://bitguy.net',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bitguy.net`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1821923471438687',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-140651655-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bitguy iPhone, Huawei and PC Repair Bournemouth",
        short_name: "Bitguy",
        start_url: "/",
        background_color: "#09CCF3",
        theme_color: "#09CCF3",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/faviconspanner.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        
      },
    },
    
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bitguy.net',
        sitemap: 'https://bitguy.net/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    
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
  ],
}

