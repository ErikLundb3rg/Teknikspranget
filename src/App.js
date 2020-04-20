import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";
import './App.css';




function App() {
  return (
  <div style={{height: '100vh', position: 'relative'}}>
      <Layout fixedHeader style = {{
        background: "#59C173",  
        background: "-webkit-linear-gradient(to right, #5D26C1, #a17fe0, #59C173)",
        background: "linear-gradient(to right, #5D26C1, #a17fe0, #59C173)"
      }}>
        <Header transparent title="Erik Lundberg" style={{color: 'white'}}>
              <Navigation>
                  <Link to="/resume"> CV </Link>
                  <Link to="/projects"> Projekt </Link>
                  <Link to="/aboutme"> Om mig</Link>
                  
              </Navigation>
          </Header>
          <Drawer title= "Ansökan T.S">
              <Navigation>
                <Link to="/Resume"> CV </Link>
                <Link to="/projects"> Projekt </Link>
                  <Link to="/aboutme"> Om mig</Link>
              </Navigation>
          </Drawer>
         
          <Content className = "content-bgrnd"> 
            <div className = "page-content" />
            <Main/>
          </Content>
      </Layout>
  </div>

  )
}

export default App;
