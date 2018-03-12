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
            <h4>TODO image d'un bug</h4>
            <h4>on a fait du refactoring,, on reprend duc ode legacy</h4>
        </Notes>
    </Slide>


);