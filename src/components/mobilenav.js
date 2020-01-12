import React from "react"
import ListLink from "./menulinks"

export default (props) => {
    let drawerClasses = 'mobile-nav'
    if (props.show){
        drawerClasses = 'mobile-nav open'
    }
    
    return (
            <div className={drawerClasses}>
                <ul style={{ listStyle: `none`, marginBottom: `0`, marginLeft: `0` }}>

                    <ListLink to="/iphone-repairs">iPhone Repairs</ListLink>
                    <ListLink to="/huawei-repairs/">Huawei Repairs</ListLink>
                    <ListLink to="/pc-mac-repairs/">PC/Mac Repairs</ListLink>


                </ul>
            </div>
        )
    }