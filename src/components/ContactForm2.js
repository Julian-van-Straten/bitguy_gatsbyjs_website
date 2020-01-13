import React from "react";
import "./contact-form.css";

export default () => (
    <div className="contact-form-container">
        <form method="post" action="https://getform.io/f/6d0f747a-3e52-4c4e-9a33-be56c3a6b561">
            <label>
                <input type="text" name="name" id="name" placeholder="Your name" />
            </label>
            <label>
                <input type="email" name="email" id="email" placeholder="Your email" />
            </label>
            <label>
                <input type="text" name="tel" id="tel" placeholder="Your phone number" />
            </label>
            <label>
                <input type="text" name="subject" id="subject" placeholder="Subject" />
            </label>
            <label>
                <textarea name="message" id="message" rows="5" placeholder="Message" />
            </label>
            <button type="submit">Submit</button>
            
        </form>
    </div>
)