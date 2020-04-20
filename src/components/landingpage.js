import React, { Component} from "react"
import Portrait from "./portrait.jpg"

function Landing () {
    return(
            <div style = {{width: "100%", margin: "auto"}}> 
                <div className = "container">
                    <img
                        src = {Portrait}
                        alt = "avatar"
                        className = "avatar-img"
                    />

                    <div className = "banner-text">
                        <h3> Erik Lundberg </h3>
                        <div className = "descrip"> Ansökan tekniksprånget 2020 | Byggd med React JS </div>
                        
                    </div>
                </div>
                
            </div>    
    )
}

export default Landing;