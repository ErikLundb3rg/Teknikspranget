import React, { Component} from "react"
import Erik  from "./erik.jpg"

function About () {
    return(
        <div style = {{background: "white", height: "100%"}}> 
            <div className = "about-container">
            <img
                src = {Erik}
                alt = "avatar"
                className = "about-erik"
                style = {{display: "none"}}
            />
            <h2> Om mig </h2>
            
            <hr style = {{borderTop: "3px solid #59C173"}}/>

            <div className = "about-text">
                <p> 
                    Hej! Jag heter Erik, är 18 år och ska nu ta studenten från naturprogrammet på Norra Real. 
                    Nu söker jag till Tekniksprånget, eftersom det verkar spännande!
                    Det är därför jag har byggt denna hemsida, för att göra min ansökan till något extra och visa att detta är något jag verkligen vill göra.
                </p>
                
                <p>
                    På fritiden när jag inte pluggar är jag antingen på gymmet, framför datorn och programmerar eller är med vänner. 
                    Tidigare har jag tävlat i fotboll och pingis. 
                </p>
                
                <p>
                    Gällande arbetslivserfarenhet har jag tidigare jobbat som hjälptränare på Lidingö pingisklubb, där jag lärde mig ta ansvar och även sysslade med bokföring. 
                    Därutöver har jag jobbat på StuddyBuddy med läxhjälp, och blev duktig på att vara tålmodig och hjälpsam då nivån kunde skilja 
                    sig mycket mellan elever. Sist har jag lärt mig att vara arbetsam och strukturerad efter min studietid på Norra Real, som ofta anses som ett 
                    av dem mer tuffa gymnasium. 
                </p>
                <p>
                    Tekniksprånget är något som verkar roligt och lärorikt och jag vill riktigt gärna göra det. Jag har programmeringskunskap, framförallt javascript,
                    och hoppas att lära mig nya spännande saker och utvecklas med Tekniksprånget. Självklart vill jag även vad det innebär att vara ingenjör.
                </p>
                <p>
                    Hoppas att denna korta introduktion väcker ert intresse, och kontakta mig om ni har några funderingar!
                </p>
            </div>
            
        </div>
        </div>
    )
}

export default About;