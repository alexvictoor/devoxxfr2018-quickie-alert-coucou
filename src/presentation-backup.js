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

let now = new Date();
let code2 = "debut";
setInterval(() => {
  now = new Date();
  code2 = `coucou ${now}
  sss
  s
  s
  s
  s
  s
  s
  s
  zzzzzzz`
}, 1000);

const CustomSlide = (

  <CodeSlide
    bgColor="secondary"
    transition={['fade']}
    lang="js"
    code={code2}
    ranges={[
      { loc: [0, 5], title: 'Stateless Components' },
      { loc: [3, 4], note: 'They are just functions that receive Props' },
      { loc: [7, 8], note: 'They are just functionsxxx that receive Props' }
    ]}
    showLineNumbers={false}
  />
);

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      code: "code from state"
    };
    setInterval(() => {
      now = new Date();
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
  }
  render() {
    return (
      <Deck
        progress="bar"
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >

         <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
              3 outils de tests JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
              pour dire adieu à alert('coucou');
          </Text>
          <Notes>
              <h4>But du talk vous faire dévouvrir 3 pratiques et 3 outils qui gagnent à être connus</h4>
              <h4> Programme va être dense, BDD, property based testing et du mutation testing </h4>
          </Notes>
        </Slide>

       <CustomSlide/>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading>DISCLAIMER</Heading>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={code2}
          ranges={[
            { loc: [0, 5], title: 'Stateless Components' },
            { loc: [3, 4], note: 'They are just functions that receive Props' },
            { loc: [7, 8], note: 'They are just functionsxxx that receive Props' }
          ]}
          showLineNumbers={false}
        />
 <Slide transition={['zoom']} bgColor="primary">
                    <Heading>MYSELF & FLUO</Heading>
                    <Notes>
                        <h4>Slide notes</h4>
                        <ol>
                            <li>TODO contenu fluo</li>
                        </ol>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>Todo WHY photo assurance pour les nuls</Heading>
                    <Notes>
                        <h4>métier compliqué - difficile de se comprendre</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>JSGiven</Heading>
                    <Notes>
                        <h4>logo</h4>
                        <h4> 3 amigos </h4>
                        <h4>photo fluo?</h4>
                        <p>http://www.methodsandtools.com/archive/collaborativespecifications.php</p>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>TODO exemple de code fluo</Heading>
                    <Notes>
                        <h4>différence avec cucumber-js</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>TODO screenshot report</Heading>
                    <Notes />
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>TODO recap jsGiven</Heading>
                    <Notes>
                        <h4>yarn install</h4>
                        <h4>@flornt</h4>
                        <h4>jGiven</h4>
                        <h4>Flow - bon support TS</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>TODO why - un exemple ce n'est pas toujours suffisant</Heading>
                    <Notes>
                        <h4>On enchaine sur le deuxième outil</h4>
                        <h4>comment être sur d'avoir traiter tous les cas possibles</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>exemple hdrhistogram base64 - image</Heading>
                    <Notes>
                        <h4>A gauche un histogram - à droite du base64</h4>
                        <h4>comment être sur d'avoir traiter tous les cas possibles</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>exemple de code du test</Heading>
                    <Notes>
                        <h4>A gauche un histogram - à droite du base64</h4>
                        <h4>comment être sur d'avoir traiter tous les cas possibles</h4>
                        <h4>ça serait vachement bien d'essayer avec plein de valeurs possibles</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>jsVerify</Heading>
                    <Notes>
                        <h4>Property based testing</h4>
                        <h4>QuickCheck en Haskhell</h4>
                        <h4>Dispo dans le monde js et pas ebsoin d'être un expert en prog fonctionnel</h4>
                    </Notes>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>exemple de code jsVerify</Heading>
                </Slide>

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>recap jsVerify</Heading>
                    <Notes>
                        <h4>marche plutot bien en TS</h4>
                        <h4>Plutôt rapide avec de vrais TU</h4>
                        <h4>exemple serialization mais aussi optim avec un nouveau algo</h4>
                    </Notes>
                </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={['fade']}
          lang="js"
          code={code}
          ranges={[
            { loc: [0, 5], title: 'Stateless Components' },
            { loc: [3, 4], note: 'They are just functions that receive Props' }
          ]}
          showLineNumbers={false}
        />
      </Deck>
    );
  }
}
