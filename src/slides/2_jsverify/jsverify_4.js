import React from "react";
import CodeSlide from 'spectacle-code-slide';

export default (

    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code="Loading..."
          fit
          ranges={[
            { loc: [12, 21] },
            { loc: [6, 21] },
            { loc: [4, 21] },
            { loc: [3, 21] },
            { loc: [0, 18] },
          ]}
          showLineNumbers={true}
        />



);