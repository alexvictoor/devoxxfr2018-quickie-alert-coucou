import React from "react";
import { Heading, Notes, Slide, List, ListItem, Link } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
                     <Heading size={6} textColor="secondary" caps>
           Pour aller plus loin
          </Heading>
          <List>
            <ListItem>Cette présentation : <Link></Link></ListItem>
            <ListItem>jsGiven : <Link>https://jsgiven.org</Link></ListItem>
            <ListItem>jsVerify : <Link>https://jsverify.github.io</Link></ListItem>
            <ListItem>Stryker : <Link>https://stryker-mutator.io</Link></ListItem>
          </List>
          <Notes>
              j'espère qu'alert coucou c'est fini
              </Notes>
                </Slide>


);