import React from "react";
import { Heading, Notes, Slide, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} caps lineHeight={1} textColor="secondary">
              Stryker
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Mutation Testing
          </Text>
          <Notes>
            <h4>outil open source qui gère maintenant le typescript 
                qui s'intègre bien avec les tests runners et fwk de test. 
                Pas très compliqué à installer</h4>
        </Notes>
                </Slide>


);