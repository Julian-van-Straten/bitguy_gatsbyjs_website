import React from "react"
import Layout from "../components/layout"
import ContactForm2 from "../components/ContactForm2"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faCheckSquare,
  faCoffee,
  faStar,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./contact.css"

export default () => (
  <Layout>
    <div className="contact-container">
      <div style={{ textAlign: `center`, marginBottom:`10px` }}>
        <h1>I'd love to talk!</h1>
      </div>
      <div className="contact-text">
      <div style={{ border: `1px solid rgba(0,0,0,0.1)`, padding: `10px` }}>
        <p>Fill out the form or email me and I'll get back to you as quickly as possible. Alternatively, give me a call!</p>
      </div>
      <div className="contact-details" style={{ border: `1px solid rgba(0,0,0,0.1)`, padding: `10px`, marginLeft:`10px` }}>
      <p style={{ color: `hsla(0,0%,0%,0.8)`, fontSize: `16px` }}>
               
          
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                  }}
                >
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>{" "}
                Nortoft Road, Bournemouth, BH88QA<br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                  }}
                >
                  <FontAwesomeIcon icon="phone" />
                </div>{" "}
                0741 134 3348<br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                  }}
                >
                  <FontAwesomeIcon icon="envelope" />
                </div>{" "}
                
                julian@bitguy.net<br></br>
              </p>
              
             </div>
             </div>
      
                
        <ContactForm2  />
      
    </div>
  </Layout>
)