import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li className="mobile-links" style={{ display: `block`, margin: `2rem 0` }}>
        <Link to={props.to} style={{ textShadow: `none`, color: `white`, backgroundImage: `none`, fontSize: `18px` }}>{props.children}</Link>
    </li>
)

export default ListLink;