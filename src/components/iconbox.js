import React from "react"
import "./iconbox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (props) => (
    <div className="icon-container">
        <div className="icon-circle"><FontAwesomeIcon icon={props.icon} /></div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
    </div>
)