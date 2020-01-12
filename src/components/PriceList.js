import React from "react"
import "./price-list.css"


export default (props) => (
    <div className="price-box">
        <div className="heading-box">
            <h3>{props.phoneModel}</h3>
        </div> 
        <img src={props.phoneImage} alt="Phone model"></img>
        <ul>
            <li>Screen Repair: {props.screenPrice}</li>
            <li>Battery Replacement: {props.batteryPrice}</li>
        </ul>

    </div>
)