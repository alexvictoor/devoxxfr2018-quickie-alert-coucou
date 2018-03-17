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
            { loc: [13, 24] },
            { loc: [5, 24] },
            { loc: [0, 6] },
          ]}
          showLineNumbers={true}
        />



);