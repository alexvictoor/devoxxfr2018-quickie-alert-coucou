import React from "react";
import { Heading, Notes, Slide, Text, Appear } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        jsgiven
        </Heading>
        <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Behavior Driven Development
            </Text>
        </Appear>
        <Notes>
            <h4>alternative à cucumber pour ecrire des tests compréhensibles par des experts métiers</h4>
            <h4>port de l'outil java jgiven</h4>
            <h4>Bon support TS et Flow</h4>
            <h4>Compatible avec Jest et Mocha</h4>
        </Notes>
        
</Slide>

);