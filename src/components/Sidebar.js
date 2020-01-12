import React from "react"
import face from "../Images/face.png"
import "./Sidebar.css"
import ContactForm from "./ContactForm"


const ContactSidebar = () => (
        <div className="sidebar">
        <img className="avatar" src={face} alt="Julian owner of Bitguy"></img>
                <br></br>
                <h2>Hello!</h2>
                    <p>
                    My name is Julian and I am the owner and Chief Nerd at Bitguy.
                    </p>
                        <br></br>
            <div className="sticky">
            <p>            
                    Contact me now to book your repair using the form below!</p>
                    <ContactForm />
            </div>
        </div>    
    )

   

class Sidebar extends React.Component {

    render(props){
        let sidebar;
        if(this.props.sidebarSelect === "contactSidebar"){
            sidebar = <ContactSidebar />
        } 

        return(

            
            <div className="sidebar-container">
            
                {sidebar}

            
            </div>
        )

    }
}

export default Sidebar;
