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
              <h4> Programme va être dense, BDD, property based testing et du mutation testing </h4>
          </Notes>
        </Slide>
);
