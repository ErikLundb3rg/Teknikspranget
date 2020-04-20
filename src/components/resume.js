import React, { Component} from "react"
import { Grid, Cell } from "react-mdl" 
import Portrait from "./portrait.jpg"
import Education from "./education"
import Experience from "./experience"
import Meriter from "./meriter"

function Resume () {

    const studyBuddydescrip = `På Studybuddy hjälpte jag högstadieelever med matte. 
    Nivån kunde skilja sig mellan olika kunder, vilket gjorde att man behövde vara flexibel 
    och anpassa sig utefter deras behov. Dem egenskaper jag utvecklade här var att vara lugn, 
    tålmodig och hjälpsam. 
    `
    
    const pingisdescrip = `Här gällde det att kunna ta ansvar och hålla koll på barnen under träningen. 
    Sysslade även med lite bokföring. 
    `
    return(
        <div className = "resume-body"> 
            <Grid>
                <Cell col = {4} className = "resume-left-col">
                    <div style = {{textAlign: "center"}}>
                        <img
                            src = {Portrait}
                            alt = "avatar"
                            className = "resume-img"
                        />

                        <h2 style = {{padding: "0", margin: "10px 0"}}> Erik Lundberg </h2>
                        <h4 style = {{color: "#474747", margin: "0"}}> Kort om mig </h4>
                        <hr style = {{borderTop: "3px solid #833fb2", width: "60%"}}/>
                        <p style= {{fontSize: "18px"}}> 
                        Jag är en glad kille på 18 år som älskar att lära mig nya saker och utmana mig själv!
                        Nu söker jag till Tekniksprånget för att utforska ingensjörsvärlden och allt vad det innebär.
                        </p> 
                        <hr style = {{borderTop: "3px solid #833fb2", width: "60%"}}/>
                        
                        <div id = "resume-contact">
                            <span className = "resume-icon"> <div className="material-icons"> mail </div> erik.lundberg32@gmail.com</span>
                            <span className = "resume-icon"> <div className="material-icons"> call  </div> 070 388 48 73</span>
                            <span className = "resume-icon"> <div className="material-icons"> home  </div> Rastavägen 10 | Lidingö</span>
                        </div>
                        
                        <hr style = {{borderTop: "3px solid #833fb2", width: "60%"}}/>
                        <div style = {{textAlign: "center"}}>
                            <h3> Referens: </h3>
                            <span style = {{fontSize: "18px"}}> Rekryteringsavdelningen Studybuddy 08-40914500</span>
                        </div>
                            
                    </div>

                
                </Cell>
                <Cell col = {8} className = "resume-right-col">
                    <h3 className = "resume-header"> Utbildning </h3>
                    <Education
                    startYear = {2017}
                    endYear = {2020}
                    schoolName = {"Norra Reals gymnasium"}
                    schoolDescription = {"Naturvetenskap inr. natur"}
                    />

                    <hr style = {{borderTop: "3px solid #59C173"}}/>

                    <h3 className = "resume-header"> Jobberfarenhet </h3>
                    
                    <Experience 
                        startYear = {2019}
                        endYear = {2020}
                        jobName = "Studybuddy"
                        jobDescription = {studyBuddydescrip}
                    />

                    <Experience 
                        startYear = {2017}
                        endYear = {2018}
                        jobName = "Hjälptränare pingisklubb"
                        jobDescription = {pingisdescrip}
                    />

                    <hr style = {{borderTop: "3px solid #59C173"}}/>

                    <h3 className = "resume-header"> Andra meriter </h3>

                    <Meriter/>

                </Cell>
            </Grid> 

        </div>
    )
}

export default Resume;