import React from "react";
import { Heading, Text, Notes, Slide, Image } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading textColor="secondary" textFont="Times New Roman">II</Heading>
        <Text textColor="tertiary" fit bold>
        Un exemple c'est bien mais...
        </Text>
        <Image src="assets/ugly-duckling-690x300.jpg" />
    <Notes>
        <h4>photo un vilain petit canard</h4>
        <h4>A gauche un histogram - à droite du base64</h4>
        <h4>comment être sur d'avoir traiter tous les cas possibles</h4>
                   <p>Un exemple de test avec des magic numbers - pourquoi ces valeurs au fait</p>
                        <h4>On enchaine sur le deuxième outil</h4>
                        <h4>comment être sur d'avoir traiter tous les cas possibles</h4>
                    </Notes>
                </Slide>


);