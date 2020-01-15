import React from "react"
import Layout from "../components/layout"
import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/hero.js"
import Reviews from "../components/reviews.js"
import Whoami from "../components/whoami.js"
import Iconbox from "../components/iconbox"
import Services from "../components/services"

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
        <div className="iconbox-section">        
            <Iconbox icon={"money-bill"} heading={"No-fix no-Fee"} text={"I am so confident with our service that if I can’t fix the problem, you don’t pay."} />
            <Iconbox icon={"wrench"} heading={"Pickup and drop-off"} text={"I can pick it up, drop it off, fix it at your place – or mine. The choice is yours!"} />
            <Iconbox icon={"calendar-check"} heading={"30 Days warranty"} text={"In the event the issue returns within 30 days, I’ll fix it free of charge."} />
        </div>

        <Reviews />
        <Whoami />
        <Services />
    </Layout>

)
