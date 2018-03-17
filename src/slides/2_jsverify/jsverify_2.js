import React from "react";
import CodeSlide from 'spectacle-code-slide';
import example from './hdr.example'

let random1, random2, random3, random4 = 42;

export default (

    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code="Loading..."
          fit
          ranges={[
            { loc: [0, 5] },
            { loc: [5, 9] },
            { loc: [10, 16] },
            { loc: [19, 35] },
          ]}
          showLineNumbers={true}
        />



);