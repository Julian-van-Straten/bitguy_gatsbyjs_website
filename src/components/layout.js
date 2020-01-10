import React from "react"
import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'
import logo from "../Images/bitguy_logo_main.png"
import footerlogo from "../Images/bitguy_logo_main_white.png"
import Burger from "./burger.js"
import MobileNav from "./mobilenav.js"
import Backdrop from "./Backdrop/Backdrop"

library.add(fab, faCheckSquare, faCoffee, faStar)



const ListLink = props => (
    <li className="header-links" style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0` }}>
        <Link to={props.to} style={{ textShadow: `none`, color: `#3E3E3E`, backgroundImage: `none`, fontSize: `18px` }}>{props.children}</Link>
    </li>
)


const ListLink2 = props => (
    <li className="footer-links" style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0` }}>
        <Link to={props.to} style={{ textShadow: `none`, color: `white`, backgroundImage: `none`, fontSize: `18px` }}>{props.children}</Link>
    </li>
)

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            sideDrawerOpen: false,
            backDropOpen: false 
        }
    }
    
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen,
                backDropOpen: !prevState.backDropOpen
            };
            
        });
    };

    backDropToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                backDropOpen: !prevState.backDropOpen,
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        })
    }


    render() {

    
        let backDrop;
            if(this.state.sideDrawerOpen) {
            
            backDrop = <Backdrop backdropClickHandler={this.backDropToggleClickHandler} />
        }

        if(!this.state.backDropOpen){
            backDrop = null;
        }

        const { children } = this.props;
        return(
            <div>
                <header style={{ maxWidth: `100vw`, height: `12vh`, padding: `0 1rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
                    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                        <img className="logo" src={logo} alt="Bitguy Company Logo"></img>
                    </Link>
                    <Burger rotate={this.state.sideDrawerOpen} burgerClickHandler={this.drawerToggleClickHandler} />
                    
                    
                    <ul style={{ listStyle: `none`, marginBottom: `0`, marginLeft: `0` }}>

                        <ListLink to="/">iPhone Repairs</ListLink>
                        <ListLink to="/about/">Huawei Repairs</ListLink>
                        <ListLink to="/contact/">PC/Mac Repairs</ListLink>  

                    </ul>
                    <button style={{ backgroundColor: `#08ccf3`, color: `#ffffff`, padding: `5px 20px`, border: `none`, height: `45px` }}>Book a repair</button>
                </header>

            <div style={{ margin: `3rem auto`, maxWidth: 950, padding: `0 1rem` }}>
            {backDrop}
            <MobileNav show={this.state.sideDrawerOpen} />
            {children}
            
            </div>
            <div>
            <footer style={{ backgroundColor: `#3E3E3E`, width: `100%`, padding: `1rem 2rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
                <img src={footerlogo} alt="bitguy company logo"></img>
                
                <ul style={{ listStyle: `none`, marginBottom: `0` }}>

                    <ListLink2 to="/">Home</ListLink2>
                    <ListLink2 to="/about/">Terms</ListLink2>
                    <ListLink2 to="/contact/">Contact</ListLink2>

                </ul>

            </footer>
        </div>
    </div>
        )
    }
}

export default Layout;