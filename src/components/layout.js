import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faAutoprefixer } from "@fortawesome/free-brands-svg-icons"
import {
  faCheckSquare,
  faCoffee,
  faStar,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCalendarCheck,
  faWrench,
  faMoneyBill,
  faMobile,
  faMobileAlt,
  faLaptop
} from "@fortawesome/free-solid-svg-icons"
import logo from "../Images/bitguy_logo_main.png"
import footerlogo from "../Images/bitguy_logo_main_white.png"
import Burger from "./burger.js"
import MobileNav from "./mobilenav.js"
import Backdrop from "./Backdrop/Backdrop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "./SEO"

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faStar,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faMoneyBill,
  faWrench,
  faCalendarCheck,
  faMobile,
  faMobileAlt,
  faLaptop
)

const ListLink = props => (
  <li
    className="header-links"
    style={{ display: `inline-block`, height: `12vh`, marginRight: `1rem`, marginBottom: `0` }}
  >
    <Link
      to={props.to}
      style={{
        textShadow: `none`,
        color: `#3E3E3E`,
        backgroundImage: `none`,
        fontSize: `18px`,
        lineHeight: `12vh`,
        marginBottom: `0`
      }}
    >
      {props.children}
    </Link>
  </li>
)

const ListLink2 = props => (
  <li
    className="footer-links"
    style={{ display: `inline-block`, marginLeft: `1rem`, marginBottom: `0` }}
  >
    <Link
      to={props.to}
      style={{
        textShadow: `none`,
        color: `white`,
        backgroundImage: `none`,
        fontSize: `18px`,
      }}
    >
      {props.children}
    </Link>
  </li>
)

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen: false,
      backDropOpen: false,
    }
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
        backDropOpen: !prevState.backDropOpen,
      }
    })
  }

  backDropToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        backDropOpen: !prevState.backDropOpen,
        sideDrawerOpen: !prevState.sideDrawerOpen,
      }
    })
  }

  render() {
    let backDrop
    if (this.state.sideDrawerOpen) {
      backDrop = (
        <Backdrop backdropClickHandler={this.backDropToggleClickHandler} />
      )
    }

    if (!this.state.backDropOpen) {
      backDrop = null
    }

    const { children } = this.props
    return (
      
      <div>
      
        <div className="above-header">
              <p style={{ display: `flex`, fontSize: `14px` }}>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                    marginRight: `3px`
                  }}
                >
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>{" "}
                Nortoft Road, Bournemouth, BH88QA<br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                    marginRight: `3px`
                  }}
                >
                  <FontAwesomeIcon icon="phone" />
                </div>{" "}
                0741 134 3348<br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                    marginRight: `3px`
                  }}
                >
                  <FontAwesomeIcon icon="envelope" />
                </div>{" "}
                julian@bitguy.net<br></br>
              </p>
            </div>
        <header
          style={{
            maxWidth: `100vw`,
            height: `12vh`,
            padding: `0 2rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img className="logo" src={logo} alt="Bitguy Company Logo"></img>
          </Link>
          <Burger
            rotate={this.state.sideDrawerOpen}
            burgerClickHandler={this.drawerToggleClickHandler}
          />
          <div className="desktop-nav" style={{ display: `flex` , alignItems: `center`}}>
            <ul style={{ listStyle: `none`, marginBottom: `0`, marginLeft: `0` }}>
                <ListLink to="/iphone-repairs/">iPhone Repairs</ListLink>
                <ListLink to="/huawei-repairs/">Huawei Repairs</ListLink>
                <ListLink to="/pc-mac-repairs/">PC/Mac Repairs</ListLink>
            </ul>
            <a href="/contact/">
                <button
                    style={{
                    backgroundColor: `#08ccf3`,
                    color: `#ffffff`,
                    padding: `5px 20px`,
                    border: `none`,
                    height: `45px`,
                    }}
                >
                    Book a repair
                </button>
            </a>
          </div>
        </header>

        <div style={{ margin: `3rem auto`, maxWidth: 950, padding: `0 1rem` }}>
          {backDrop}
          <MobileNav show={this.state.sideDrawerOpen} />
          {children}
        </div>
        <div>
          <footer
            style={{
              backgroundColor: `#3E3E3E`,
              width: `100%`,
              padding: `1rem 2rem`,
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `flex-start`,
              fontSize: `16px`,
            }}
          >
            <div>
              <img src={footerlogo} alt="bitguy company logo"></img>
              <p style={{ color: `white` }}>
                Registered in England & Wales.
                <br></br>
                Company Nr. 11466822
              </p>
            </div>

            <div>
              <p style={{ color: `white`, fontSize: `16px` }}>
                CONTACT ME<br></br>
                <br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                  }}
                >
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>{" "}
                Nortoft Road, Bournemouth, BH88QA<br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                  }}
                >
                  <FontAwesomeIcon icon="phone" />
                </div>{" "}
                0741 134 3348<br></br>
                <div
                  style={{
                    width: `20px`,
                    height: `20px`,
                    display: `inline-block`,
                    textAlign: `center`,
                  }}
                >
                  <FontAwesomeIcon icon="envelope" />
                </div>{" "}
                julian@bitguy.net<br></br>
              </p>
            </div>
          </footer>
          <div className="copyright-bar">
             <p>© Copyright 2018. Bitguy LTD. | Website created by <a href="https://pandaface.uk/">PandaFace</a></p> 
            <ul style={{ listStyle: `none`, marginBottom: `0` }}>
              <ListLink2 to="/">Home</ListLink2>
              <ListLink2 to="/terms/">Terms</ListLink2>
              <ListLink2 to="/contact/">Contact</ListLink2>
              <ListLink2 to="/iphone-repairs/">iPhone Repairs</ListLink2>
              <ListLink2 to="/huawei-repairs/">Huawei Repairs</ListLink2>
              <ListLink2 to="/pc-mac-repairs/">PC/Mac Repairs</ListLink2>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
