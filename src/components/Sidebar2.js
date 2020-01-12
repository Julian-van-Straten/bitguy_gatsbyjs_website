import React from "react"
import "./sidebar2.css"
import Reviews2 from "./reviews2"


class Sidebar2 extends React.Component {
    render(){
        return(
        <div className="sidebar2">
            <p>
                <Reviews2 />
            </p>
           
        </div>    
        )
    }
}

export default Sidebar2;
