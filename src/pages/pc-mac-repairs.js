import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Sidebar2 from "../components/Sidebar2"
import PcMacPricelist from "../components/PcMacPricelist"
import "./pc-mac-repairs.css"

export default () => (
  <Layout>
    <div className="main-container">
      <main className="main-content">
        <h1 style={{ fontSize: `30px`}}>PC and Apple Mac Repairs Bournemouth</h1>
        <hr></hr>
        <br></br>
        <p className="tagline">Laptops, desktops, iMACs and Macbooks - we repair them all</p>
        <br></br>
        <p>
          With over a decade's experience building, upgrading, fixing, and maintaining PCs and Apple Macs, you simply can't go wrong with Bitguy.
          <br></br><br></br>
          I deal with everything from Apple Mac hard drive upgrades through to complex network and WiFi issues. 
          <br></br><br></br>
          See below for a list of the more common services we provide. Please get in contact if you have any questions.
        </p>
          <p>
            <br></br>
            <h2 className="heading2">Data Backup</h2>
              There are endless solutions available for backing up your precious data. From local, to cloud, to simple data transfers I can work out which one would best suit your needs, and set it all up for you!
          </p>
          <p>
            <br></br>
            <h2 className="heading2">Hardware Repairs & Replacements</h2>
            PC not turning on? Making funny beeping sounds? Screen flickering? Chances are it's a hardware issue. I will diagnose and quote you on a repair or replacement part free of charge!
          </p>
          <p>
            <br></br>
            <h2 className="heading2">PC and MAC Upgrades</h2>
              If you're running low on disk space, need more memory, want a faster CPU or a full system upgrade, we've got you. Bitguy has done hundreds of successful Mac and PC hardware upgrades.
            </p>
          <p>
          <p>
            <br></br>
            <h2 className="heading2">Network solutions</h2>
            I am a Cisco Certified Engineer with years of experience supporting large businesses. I can design and set up your new network, improve your existing one, or solve any issues you may have.
          </p>
          <p>
            <br></br>
            <h2>Give Us A Call Today</h2>
            You can see the prices for some of our most common repair
            jobs below. Alternatively, give our Bournemouth base a call on 0741
            134 3348 to find out more today.
          </p>
          </p>
      </main>
      <Sidebar sidebarSelect="contactSidebar" />
    </div>

    <div className="price-list-content">
      <div className="price-list-container">
        <h2>PC and Apple Mac Repair Price List</h2>
        <PcMacPricelist />
      </div>
      <Sidebar2 />
    </div>
  </Layout>
)
