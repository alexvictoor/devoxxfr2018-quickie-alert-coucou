import React from "react";
import { Slide, BlockQuote, Quote, Cite } from "spectacle";

export default (
    <Slide bgColor="secondary" transition={['fade']}>
        <BlockQuote>
            <Quote textSize={52}>Testing shows the presence, not the absence of bugs.</Quote>
            <Cite>Edsger W. Dijkstra</Cite>
        </BlockQuote>
    </Slide>


);