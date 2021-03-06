import React from "react"
import Layout from "../components/layout"
import ContactForm2 from "../components/ContactForm2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./contact.css"
import SEO from "../components/SEO"

export default () => (
  <Layout>

    <SEO 
      title="Get in Contact"
      description="Booking and contact page for iPhone, Huawei and PC repair Bournemouth"
      url="https://bitguy.net/contact"
    />

    <div className="contact-container">
      <div style={{ textAlign: `center`, marginBottom:`10px` }}>
        <h1>Get in Touch</h1>
        
        <br></br>
        <hr style={{ width: `40px`, margin: `0 auto` }}></hr>
        <br></br>
        
      </div>
      <div className="contact-text">
      <div className="contact-first-sentence" style={{ width: `90%`,fontSize:`16px`, padding: `10px` }}>
        <p>Fill out the form or email me and I'll get back to you as quickly as possible. Alternatively, give me a call!</p>
      </div>
      <div className="contact-details" style={{ padding: `10px`, marginLeft:`10px` }}>
      
               
          
         <div className="contact-icons">   
          <FontAwesomeIcon icon="map-marker-alt" />
          <FontAwesomeIcon icon="phone" /> 
          <FontAwesomeIcon icon="envelope" />
        </div>  
        <div className="contact-info">
          Nortoft Road, Bournemouth, BH88QA<br></br>  
          0741 134 3348<br></br>     
          julian@bitguy.net<br></br>
        </div>
    
              
      </div>
             </div>
      
                
        <ContactForm2  />
      
    </div>
  </Layout>
)