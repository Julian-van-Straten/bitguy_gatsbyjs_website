import React from "react"

export default (props) => {
    let burgerClasses1 = "burger-line1";
    let burgerClasses2 = "burger-line2";
    let burgerClasses3 = "burger-line3";

    if(props.rotate){
        burgerClasses1 = "burger-line1 rotate-burger1";
        burgerClasses2 = "burger-line2 rotate-burger2";
        burgerClasses3 = "burger-line3 rotate-burger3";
    }

    return(
    <div className="burger-box" onClick={props.burgerClickHandler}>
        <div className={burgerClasses1}></div>
        <div className={burgerClasses2}></div>
        <div className={burgerClasses3}></div>
    </div>
    )
}