// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

import code9 from './slides/2_jsverify/hdr.example'
import code11 from './slides/2_jsverify/hdr.example.jsc'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import code from 'raw-loader!../public/assets/code.js';



// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);


const slidesImports = [
  import("./slides/0_intro/intro_1"),
  import("./slides/0_intro/intro_2"),
  import("./slides/0_intro/intro_3"),
  
  import("./slides/1_jsgiven/jsgiven_1"),
  import("./slides/1_jsgiven/jsgiven_2"),

  import("./slides/1_jsgiven/jsgiven_3"),
  
  import("./slides/1_jsgiven/jsgiven_4"),


  import("./slides/2_jsverify/jsverify_1a"),
  import("./slides/2_jsverify/jsverify_1b"),
  import("./slides/2_jsverify/jsverify_2"),
  import("./slides/2_jsverify/jsverify_3"),
  import("./slides/2_jsverify/jsverify_4"),
  import("./slides/2_jsverify/jsverify_5"),
  import("./slides/3_stryker/stryker_1"),
  import("./slides/3_stryker/stryker_1b"),
  import("./slides/3_stryker/stryker_2"),
  import("./slides/3_stryker/stryker_3"),
  import("./slides/3_stryker/stryker_4a"),
  import("./slides/3_stryker/stryker_4b"),
  import("./slides/3_stryker/stryker_4c"),
  import("./slides/3_stryker/stryker_4d"),
  import("./slides/3_stryker/stryker_5"),
  import("./slides/4_end/conclusion"),
];

const codeSamples = {
  9: code9,
  11: code11,
}

localStorage.clear();

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.startTicker = this.startTicker.bind(this);
    this.stopTicker = this.stopTicker.bind(this);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
      
    });
  }

  startTicker() {
    if (!this.ticker) {
      this.ticker = setInterval(() => {
        const now = new Date();
        console.log("tick tick");
        this.setState({tick: now});
      }, 300);
    }
  }

  stopTicker() {
    if (this.ticker) {
      clearInterval(this.ticker);
      this.ticker = undefined;
    }
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {

            if (codeSamples[index]) {
              return React.cloneElement(slide, {key: index, code: codeSamples[index](), onActive: this.startTicker});
            }
            
            return React.cloneElement(slide, {key: index, onActive: this.stopTicker });
          })
        }
      </Deck>
    );
  }
}
