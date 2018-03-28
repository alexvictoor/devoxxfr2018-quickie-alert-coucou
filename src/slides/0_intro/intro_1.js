import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
              3 outils de tests JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
              pour dire adieu à alert('coucou');
          </Text>
          <Notes>
              <h4>But du talk vous faire dévouvrir 3 pratiques et 3 outils qui gagnent à être connus</h4>
              <h4>Un programme assez ambition car on va découvrir ensemble 3 outils, 3 pratiques de tests. Je risque d'aller assez vite;, mais bn'hésitez pas à me poser des questions</h4>
          </Notes>
        </Slide>
);
