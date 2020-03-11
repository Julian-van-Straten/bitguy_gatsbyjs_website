import React from "react"
import Layout from "../components/layout"
import "./huawei-repairs.css"
import Sidebar from "../components/sidebar"
import Sidebar2 from "../components/Sidebar2"
import HuaweiPricelist from "../components/HuaweiPricelist"
import huaweiFront1 from "../Images/huawei/screen-fix-huawei.jpg"
import huaweiFront2 from "../Images/huawei/screen-fix-huawei2.jpg"
import huaweiBack from "../Images/huawei/rear-panel-fix-huawei.jpg"
import SEO from "../components/SEO"

export default () => (
  <Layout>
  <SEO 
    title="Huawei Repair Bournemouth - Cheap Cracked Huawei Screen &amp; Battery Charging Repairs in Dorset"
    description="Professional Repair Services For Huawei Phones"
    url="https://bitguy.net/huawei-repair"
    
  />
    <div className="main-container">
      <main className="main-content">
        <h1>Huawei Repairs Bournemouth</h1>
        <hr></hr>
        <br></br>
        <p className="tagline">The best Huawei repair service in Dorset</p>
        <br></br>
        <p>
          Huawei is one of the most popular mobile phones in today's market, and for a good reason!
          <br></br> <br></br>
          These smart phones are beautifully designed with top tier hardware, some of the best cameras in existence, and super attractive price points.
          <br></br> <br></br>
          I have been an avid Huawei supporter since originally getting my P20 Pro in 2017.
          <br></br> <br></br>
          There's just one problem...
          <br></br> <br></br>
          Not many shops like to fix them due to the way they are put together. The time it takes to get through the strong adhesive holding them together means it's simply not worth it for most repair services.
          <br></br> <br></br>
          But with the right tools and techniques, Huawei repairs are simple. And over the past few years I have perfected these techniques to the point where I can do them in my sleep!
          <div className="image-box-huawei">
            <div className="image-box-box">
              <img src={huaweiFront1} alt="huawei screen repair"></img>
            </div>
            <div className="image-box-box">
              <img src={huaweiBack} alt="huawei back repair"></img>
            </div>
            <div className="image-box-box">
              <img src={huaweiFront2} alt="huawei screen repair"></img>
            </div>
          </div>
        </p>
          <p>
            <br></br>
            <h2 className="heading2">Screen Repair</h2>
              If you have a smashed, cracked, or out right broken screen. I can replace the entire screen assembly, including the LCD, touchscreen digitizer and glass. I use only genuine Huawei parts and they come with a 12 month warranty.
          </p>
          <p>
            <br></br>
            <h2 className="heading2">Battery Replacements</h2>
              If your phone is under performing and the battery doesn't last as long as it used to, it may be time to get it replaced. Huawei battery replacements are relatively inexpensive and can breathe new life into your beloved phone.
          </p>
          <p>
            <br></br>
            <h2 className="heading2">Charger Port Repairs</h2>
              Charger port failures are more common than you think. Often it can be down to something simple like a build up of lint from your pockets being compacted down into the charger port. So make sure you check this first. Use a wooden toothpick to remove any debris from it.
               If you are still having issues we can diagnose and repair or replace the charger port and get it fully fuctioning again.
            </p>
          <p>
            <br></br>
            <h2>Give Us A Call Today</h2>
            Bitguy can also complete a number of other repairs including issues
            with headphone jacks, broken speakers, home buttons, and volume
            controls. You can see the prices for some of our most common repair
            jobs below. Alternatively, give our Bournemouth base a call on 0741
            134 3348 to find out more today.
          </p>
      </main>
      <Sidebar sidebarSelect="contactSidebar" />
    </div>

    <div className="price-list-content">
      <div className="price-list-container">
        <h2>Huawei Repair Price List</h2>
        <HuaweiPricelist />
      </div>
      <Sidebar2 />
    </div>
  </Layout>
)
