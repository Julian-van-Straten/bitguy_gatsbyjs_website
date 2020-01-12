import React from "react";
import "./contact-form.css";

export default () => (
    <div>
        <hr className="sidebar-hr"></hr>
        <form method="post" action="#">
            <label>
                Name
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Phone Model
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                <p>Message</p>
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Get a quote</button>
            
        </form>
    </div>
)