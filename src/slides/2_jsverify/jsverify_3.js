import React from "react";
import { Heading, Notes, Slide, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        jsVerify
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Property Based Testing
          </Text>
      
          <Notes>
                        <h4>Property based testing</h4>
                        <h4>QuickCheck en Haskhell</h4>
                        <h4>Dispo dans le monde js et pas ebsoin d'être un expert en prog fonctionnel</h4>
                    </Notes>
                </Slide>


);