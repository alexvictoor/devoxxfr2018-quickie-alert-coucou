import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading textColor="secondary" textFont="Times New Roman">III</Heading>
        <Text textColor="tertiary" margin="10px 0 0"  fit bold>
              Les bugs... on en est débarassé ?
          </Text>
        <Image src="assets/Beetle-Final.jpg" />
        <Notes>
            <p>le dernier sujet dont je voulais vous parler c'est la confiance 
                que l'on peut avoir dans les tests</p>
            <h4>on a fait du refactoring,, on reprend duc ode legacy</h4>
            <p>bug stryker cli sur du typescript, bug jest si pas de config, bug avec moment</p>
            <p>Never trust a test you haven’t personally seen fail</p>
        </Notes>
    </Slide>


);