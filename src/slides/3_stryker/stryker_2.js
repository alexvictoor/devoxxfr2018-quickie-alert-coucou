import React from "react";
import CodeSlide from 'spectacle-code-slide';
import example from './age.example'

export default (

    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="typescript"
          code={example}
 
          ranges={[
            { loc: [0, 4] },
            { loc: [0, 7] },
            { loc: [0, 9] },
            { loc: [0, 11] },
            { loc: [0, 19] },
            
          ]}
          showLineNumbers={true}
        />



);