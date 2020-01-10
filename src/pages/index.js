import React from "react"
import Layout from "../components/layout"
import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/hero.js"
import Reviews from "../components/reviews.js"
import Whoami from "../components/whoami.js"

export default () => (

    <Layout>
        
            <BackgroundSlider 
            query={useStaticQuery(graphql`
                query {
                backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
                    nodes {
                    relativePath
                    childImageSharp {
                        fluid (maxWidth: 4000, quality: 100){
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                }
                }
            `)}
            />
            <div className="image-overlay"></div>
      


        <Hero />
        <Reviews />
        <Whoami />
    </Layout>

)
