import React from "react"
import Layout from "../components/layout"
import "./iphone-repairs.css"
import Sidebar from "../components/sidebar"
import PriceList from "../components/PriceList"
import ip6s from "../Images/pricelist/ip6s.png"
import ipse from "../Images/pricelist/ipse.png"
import ip6 from "../Images/pricelist/ip6.jpg"
import ip7 from "../Images/pricelist/ip7.jpg"
import ip8 from "../Images/pricelist/ip8.png"
import ip8p from "../Images/pricelist/ip8p.png"
import ipxr from "../Images/pricelist/xr.png"
import x from "../Images/pricelist/X.png"
import ip11 from "../Images/pricelist/ip11.jpeg"
import Sidebar2 from "../components/Sidebar2"
import lab from "../Images/iphone/lab.jpg"
import SEO from "../components/SEO"

export default () => (
  <Layout>
  <SEO 
    title="iPhone Repair Bournemouth - Cheap Cracked iPhone Screen &amp; Broken Charging Repairs in Dorset"
    description="Professional Repair Services For iPhones & More"
    url="https://bitguy.net/iphone-repair"
    
  />

    <div className="main-container">
    <main className="main-content">
      <h1 style={{ fontSize: `30px` }}>Best iPhone Repairs in Bournemouth</h1>
      <hr></hr>
      <br></br>
      <p className="tagline">Giving you a second bite of the Apple</p>
      <br></br>
      <p>
      Your iPhone is an essential part of your life, improving your efficiency on a daily basis by facilitating your communication with friends, family and work colleagues, organising your daily activities, and curing boredom with games, music, and more. If your smartphone gets broken or the screen gets cracked and becomes faulty, it can feel as though you’ve lost a limb.
      <p/><p>
        <br></br>
      Bitguy is the best local iPhone repair service in Bournemouth, Dorset that can restore your device to its former glory. A quick, cheap, and highly professional service is just a call away.
      </p><p>
        <br></br>
      <h2>Professional Repair Services For iPhones & More</h2>
      Bitguy offers a friendly service right in the heart of Bournemouth, based on Nortoft Road, and can provide a range of highly-professional repair jobs on a comprehensive range of Apple iPhone devices including cracked screen repairs, charger port replacements and more, all at a cheap price.
      </p><p>
        <br></br>
      Whether it’s a new iPhone X or a slightly older iPhone 5 it doesn’t matter, Bitguy can provide a range of services to restore the look and performance of your Apple smartphone with simply stunning results.
      </p><p>
        <br></br>
      Thanks to our large selection of spare parts, we can usually offer a same day service on repairs for any device from the iPhone 5 and above. All of our work and new fittings also come with a 12-month warranty to provide you with complete peace of mind.
      </p><p>
        <br></br>
      In addition to iPhone repairs, Bitguy can restore broken Macbooks and iMacs. So, if you have a problem with your Apple device, give us a call to discuss the options we have available today.
      </p><p>
        <br></br>
      <h2>Cracked Screen, Battery Replacements & Charger Port Repairs</h2>
      When your iPhone is broken, there’s a very strong probability that the faults will be attributed to your screen, battery, or charger point. Our comprehensive range of services can treat most cosmetic damage and battery-related issues to make your smartphone feel as good as new.
      </p><p>
      <div className="image-box-huawei">
            
            <div className="image-box-box-iphone">
              <img src={lab} alt="bitguy-lab"></img>
              <p className="caption">Bitguy's iPhone job queue for the day</p>
            </div>
           
          </div>
        <br></br>
      <h2 className="heading2">Screen Fixes</h2>
      If you have a cracked screen that is obstructing your view or impacting the touch screen capabilities, we can help. With the choice of high quality aftermarket or original Apple screens, we can remove and dispose of your cracked screen before installing a new one that offers the same look and feel as the original Apple solution.
      </p><p>
        <br></br>
      <h2 className="heading2">Battery Replacements</h2>
      The infamous problems with reduced battery life causes thousands of people to upgrade iPhones that are perfectly fine in every other aspect. Replacing the battery isn’t easy due to the Apple design, but it’s a service that Bitguy can provide to make your phone perform at its best, just as it did when you first unboxed it.
      </p><p>
        <br></br>
      <h2 className="heading2">Charger Port Repairs</h2>

      In addition to faults with the battery itself, it’s not uncommon for problems to occur with the charger port. This can be caused by dust, debris, wear and tear, or using inferior charger cables. Either way we can investigate the source of your troubles before finding the best solution to restore normality.
      </p><p>
        <br></br>
      <h2>Give Us A Call Today</h2>
      Bitguy can also complete a number of other repairs including issues with headphone jacks, broken speakers, home buttons, and volume controls. You can see the prices for some of our most common repair jobs below. Alternatively, give our Bournemouth base a call on 0741 134 3348 to find out more today.
      </p>
      </p>
      </main>
      <Sidebar sidebarSelect="contactSidebar" />
      </div>
      
      <div className="iphone-pricelist-content">
        <div className="iphone-pricelist-container">
          <h2>iPhone Repair Price List</h2>
          
          <PriceList phoneModel="iPhone 5/5S/5C/SE" phoneImage={ipse} screenPrice="£35" batteryPrice="£30" />
          <PriceList phoneModel="iPhone 6" phoneImage={ip6} screenPrice="£45" batteryPrice="£30" />
          <PriceList phoneModel="iPhone 6+/6S" phoneImage={ip6s} screenPrice="£50" batteryPrice="£30" />
          <PriceList phoneModel="iPhone 6S+/7" phoneImage={ip7} screenPrice="£60" batteryPrice="£30" />
          <PriceList phoneModel="iPhone 7+/8" phoneImage={ip8} screenPrice="£65" batteryPrice="£30" />
          <PriceList phoneModel="iPhone 8+" phoneImage={ip8p} screenPrice="£70" batteryPrice="£30" />
          <PriceList phoneModel="iPhone XR" phoneImage={ipxr} screenPrice="£100" batteryPrice="£40" />
          <PriceList phoneModel="iPhone X" phoneImage={x} screenPrice="£170" batteryPrice="£40" />
          <PriceList phoneModel="iPhone XS" phoneImage={x} screenPrice="£190" batteryPrice="£50" />
          <PriceList phoneModel="iPhone XS MAX" phoneImage={x} screenPrice="£205" batteryPrice="£80" />
          <PriceList phoneModel="iPhone 11" phoneImage={ip11} screenPrice="£215" batteryPrice="N/A" classname="ip11" />
          </div>
          <Sidebar2 />
      </div>
  </Layout>
)