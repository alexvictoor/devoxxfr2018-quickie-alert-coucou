import React from "react";
import CodeSlide from 'spectacle-code-slide';
import { Notes  } from "spectacle";
import example from './fluo.example.jsc'

export default (
    <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={example}
          fit
          ranges={[
            { loc: [0, 6] },
            { loc: [6, 13] },
          ]}
          showLineNumbers={true}
        >

                    <Notes>
                        <h4>marche plutot bien en TS</h4>
                        <h4>Plutôt rapide avec de vrais TU</h4>
                        <h4>exemple serialization mais aussi optim avec un nouveau algo</h4>
                    </Notes>
                </CodeSlide>
);