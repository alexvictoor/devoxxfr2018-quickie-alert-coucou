import React from "react";
import CodeSlide from 'spectacle-code-slide';
import example from './hdr.example.jsc'

let random1, random2, random3, random4 = 42;

export default (

    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example(random1, random2, random3, random4)}
          fit
          ranges={[
            { loc: [5, 24] },
            { loc: [0, 6] },
          ]}
          showLineNumbers={true}
        />



);