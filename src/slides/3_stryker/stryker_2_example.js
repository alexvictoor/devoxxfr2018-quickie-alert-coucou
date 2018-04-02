import React from "react";
import CodeSlide from 'spectacle-code-slide';
import { Heading, Notes, Slide, Image, Appear } from "spectacle";

export default (

    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="typescript"
          code="Loading..."
 
          ranges={[
            { loc: [0, 4] },
            { loc: [0, 7] },
            { loc: [0, 9] },
            { loc: [0, 11] },
            { loc: [0, 19] },
            
          ]}
          showLineNumbers={true}
    >
          <Notes>
            <p>l'utilisateur né en 1990 aura-t-il moins de 40 ans en 2025</p>
          </Notes>
    </CodeSlide>



);