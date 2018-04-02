import React from "react";
import { Heading, Notes, Slide, Image } from "spectacle";
// <img src="assets/stryker-report.png" style={{ margin: "-400px" }} />
 
export default (
    <Slide transition={['zoom']} bgColor="primary">
         <iframe 
            title="TypeScript FTW"
            src="https://codesandbox.io/embed/k5w5qn94z7?fontsize=28&view=editor&expanddevtools=1" 
            style={ {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                height: "900px",
                width: "150%",
                marginTop: "-40%",
                marginBottom: "-30%",
                marginLeft: "-25%",
               
            } } 
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
          </iframe>
    </Slide>


);