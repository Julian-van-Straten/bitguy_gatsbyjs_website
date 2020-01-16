import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./services.css"

export default () => (
    <div className="services-container">
        <div>
            <h2>We cover 3 main service categories</h2>
            <hr style={{ margin: `0 auto` }}></hr>
            <br></br>
        </div>
        <div className="services-box-container">
            <div className="services-box">
                <FontAwesomeIcon icon="mobile" />
                <h3>iPhone Repairs</h3>
                <ul>
                    <li>Screen Repairs</li>
                    <li>Battery Replacements</li>
                    <li>Charger Ports</li>
                    <li>And more</li>
                </ul>
                <a href="/iphone-repairs/"><button >Read more</button></a>
            </div>
            <div className="services-box">
                <FontAwesomeIcon icon="mobile-alt" />
                <h3>Huawei Repairs</h3>
                <ul>
                    <li>Screen Repairs</li>
                    <li>Battery Replacements</li>
                    <li>Charger Ports</li>
                    <li>And more</li>
                </ul>
                <a href="/huawei-repairs/"><button>Read more</button></a>
            </div>
            <div className="services-box">
                <FontAwesomeIcon icon="laptop" />
                <h3>PC & Mac Repairs</h3>
                <ul>
                    <li>Laptop Screen Repairs</li>
                    <li>Hardware Replacements</li>
                    <li>Upgrades</li>
                    <li>And more</li>
                </ul>
                <a href="/pc-mac-repairs/"><button>Read more</button></a>
            </div>
        </div>
        
    </div>
)