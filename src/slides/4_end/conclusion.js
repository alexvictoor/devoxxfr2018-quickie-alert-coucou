import React from "react";
import { Heading, Notes, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
                     <Heading size={6} textColor="secondary" caps>
           Pour aller plus loin
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
          <Notes>
              j'espère qu'alert coucou c'est fini
              </Notes>
                </Slide>


);