import React from "react";
import { Heading, Notes, Slide } from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import example from './eligibility.example'

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [34, 40] },
            { loc: [31, 40] },
            { loc: [29, 40] },
            { loc: [28, 40] },
            { loc: [26, 40] },
            { loc: [0, 22]},
          ]}
          showLineNumbers={true}
        />
);