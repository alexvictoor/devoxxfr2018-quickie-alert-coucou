import React from "react";
import { Text, Notes, Slide, Image } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Text margin="30px 0px" textColor="secondary" fit bold>
        HdrHistogram
        </Text>
        <Image src="assets/histogram-encoding2.png" />
    <Notes>
        <h4>A gauche un histogram - à droite du base64</h4>
    </Notes>
</Slide>


);