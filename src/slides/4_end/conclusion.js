import React from "react";
import { Heading, Notes, Slide, List, ListItem, Link, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} textFont="secondary">
                     <Heading size={2} caps>
           THE END
          </Heading>
          <List >
            <ListItem margin="30px">jsGiven : <Link textColor="tertiary">https://jsgiven.org</Link></ListItem>
            <ListItem margin="30px">jsVerify : <Link textColor="tertiary">https://jsverify.github.io</Link></ListItem>
            <ListItem margin="30px">Stryker : <Link textColor="tertiary">https://stryker-mutator.io</Link></ListItem>
            <ListItem margin="30px">Les 'slides' : <Link textColor="tertiary">https://bit.ly/2uBGJxs</Link></ListItem>
          </List>
          <Text bold textColor="tertiary">@Alex_Victoor</Text>
        
          <Notes>
              j'espère qu'alert coucou c'est fini
              </Notes>
                </Slide>


);