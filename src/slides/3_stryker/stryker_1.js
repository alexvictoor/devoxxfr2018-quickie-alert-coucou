import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading size={3} caps lineHeight={1} textColor="secondary">Bugs</Heading>
        <Text margin="10px 0 0" textColor="tertiary" fit bold>
              On en est débarassé ?
          </Text>
        <Image src="assets/Beetle-Final.jpg" />
        <Notes>
            <h4>on a fait du refactoring,, on reprend duc ode legacy</h4>
            <p>bug stryker cli sur du typescript, bug jest si pas de config, bug avec moment</p>
            <p>Never trust a test you haven’t personally seen fail</p>
        </Notes>
    </Slide>


);