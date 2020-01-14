import React from "react"
import "./iconbox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (props) => (
    <div className="icon-container">
        <FontAwesomeIcon icon={props.icon} />
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
)