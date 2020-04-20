import React, { Component} from "react"

import Template from "./template-project.js"
import "./projects.css"
import Phone from "./cosupic.jpg"

  
export default function Projects() {  
    return (
        <div style = {{background: "white", height: "100%", width: "100%"}}  className = "project-container">

                <h3 style = {{color: "rgba(0, 0, 0, 0.87)", textDecoration: "none", margin: "0", padding: "30px", fontSize: "50px"}}> Projekt </h3>
                <hr style = {{borderTop: "3px solid #a17fe0", width: "20%", margin: "0 auto", marginBottom: "20px"}}/>
                <p style = {{color: "rgba(0, 0, 0, 0.87)", fontSize: "26px", fontWeight: "300"}}> 
                Här är tre olika projekt för att visa att jag kan något
                </p>
                
            <div>
                
                <Template
                    picture = {Phone}
                    title = "Cosu.se"
                    description = "Här är en hemsida jag byggde för mitt och mina kompisars UF - företag"
                    websitelink = "http://cosu.se/"
                    githublink = "https://github.com/ErikLundb3rg/Hemsida-UF"
                />
                <Template
                    picture = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    title = "Gymnasiearbete"
                    description = " Gymnasiearbete där jag och en kompis byggde en självkörande bil "
                    linkdisplay = "none"
                    githublink = "https://github.com/Lucketyp/gymnasiearbete"
                />
                <Template
                    picture = "https://www.folkhalsomyndigheten.se/globalassets/block-start-landning/start/covid-19-23311-cdc-1.jpg?width=600&height=400&mode=crop"
                    title = "Corona statistik (ej färdig)"
                    description = " Hemsida för Coronavirus statistik som hämtas via APIs"
                    linkdisplay = "none"
                    githublink = "https://github.com/ErikLundb3rg/Coronastatistik"
                />
            </div>
        </div>
      
    );
  }