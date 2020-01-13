import React from "react"
import face from "../Images/face.png"

export default () => (
    <div className="whoami-section">
        <div className="whoami-content">
            <div>
            <h2>Who am I?</h2>
            <hr></hr>
       
            <br></br>
                <p>My name is Julian. I was born in a jungle in India. When I was just a boy my village was viciously attacked by a tiger and his hyena. On a quest to find my parents I got terribly lost and was taken into care by two wolves who are now like parents to me.
                <br/><br></br>Not really though. I’m actually just your average nerd, living in Bournemouth, with 2 cats and a lifelong passion for fixing things.</p>
            </div>
            <div>
                <img src={face} alt="Julian, owner of Bitguy"></img>
            </div>
        </div>
    </div>
)