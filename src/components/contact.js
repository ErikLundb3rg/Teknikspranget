import React, { Component} from "react"
import Portrait from "./portrait.jpg"

function Contact () {
    return(
        <div className = "contact-body"> 
            <div className = "contact-container"> 
                <div className = "contact-left"> 
                    <h3> Erik Lundberg </h3>
                    <img
                            src = {Portrait}
                            alt = "avatar"
                            className ="contact-img"
                    />
                    <div className = "contact-text">
                    </div>
                </div>
                <div className = "contact-right"> 
                    <h3> Kontaktinformation </h3>
                    <div className = "contact-line"> </div>

                    <div class = "contact-info">
                        <span> <div class="material-icons"> mail </div> erik.lundberg32@gmail.com</span>
                        <span> <div class="material-icons"> call  </div> 070 388 48 73</span>
                        <span> <div class="material-icons"> home  </div> Rastavägen 10 | Lidingö</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;