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
  import("./slides/1"),
  import("./slides/2"),
  import("./slides/3"),
  import("./slides/4")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "code from state",
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
      setInterval(() => {
        const now = new Date();
        this.setState({code: `coucou ${now}
        sss
        s
        s
        s
        s
        s
        s
        s
        zzzzzzz`});
      }, 1000);
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, {key: index, code: this.state.code});
          })
        }
      </Deck>
    );
  }
}
