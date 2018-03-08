import * as React from 'react'

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from 'spectacle'
const { Notes, CodePane } = require('spectacle')
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
    // city: require('../assets/city.jpg'),
}

preloader(images)

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
)

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
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

                <Slide transition={['zoom']} bgColor="primary">
                    <Heading>DISCLAIMER</Heading>
                </Slide>
                <Slide>
                    <CodePane
                        lang="javascript"
                        source={require('raw-loader!./App.tsx')}
                        margin="20px auto"
                        theme="dark"
                        overflow="overflow"
                    />
                </Slide>

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

                <Slide transition={['fade']} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>
                        Typography
                    </Heading>
                    <Heading size={1} textColor="secondary">
                        Heading 1
                    </Heading>
                    <Heading size={2} textColor="secondary">
                        Heading 2
                    </Heading>
                    <Heading size={3} textColor="secondary">
                        Heading 3
                    </Heading>
                    <Heading size={4} textColor="secondary">
                        Heading 4
                    </Heading>
                    <Heading size={5} textColor="secondary">
                        Heading 5
                    </Heading>
                    <Text textColor="secondary">Standard text</Text>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>
                        Standard List
                    </Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        )
    }
}
