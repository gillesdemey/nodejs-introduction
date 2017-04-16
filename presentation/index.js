import React, { Component } from 'react'
import Terminal from 'spectacle-terminal'
import CodeSlide from 'spectacle-code-slide'

import {
  Code,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  S,
  Slide,
  Text
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

class Presentation extends Component {
  render () {
    return (
      <Deck
        transition={'none'}
        transitionDuration={200}
        theme={theme}
        controls={false}
        progress='none'
      >

        <Slide bgColor='tertiary'
          notes='will not talk about JavaScript, assume you are familiar'
        >
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Node.js
          </Heading>
          <Text textColor='primary' fit bold>
            An introduction
          </Text>
        </Slide>

        <Slide notes='emphasis on small core and backwards compatibility'>
          <Heading fit>
            Who are we?
          </Heading>
          <Text lineHeight='1.2em' margin={20} bold textSize={42} textColor='secondary'>

          </Text>
        </Slide>


        <Slide notes='emphasis on small core and backwards compatibility'>
          <Heading fit>
            What is Node.js?
          </Heading>
          <Text lineHeight='1.2em' margin={20} bold textSize={42} textColor='secondary'>
            an asynchronous event driven JavaScript runtime
          </Text>
        </Slide>

        <Slide notes='easy to write, one command, no complicated setup / scaffolding'>
          <Heading size={1}>What's good?</Heading>
          <List>
            <ListItem>It's easy</ListItem>
            <ListItem>It's fast</ListItem>
            <ListItem>Vibrant ecosystem</ListItem>
          </List>
        </Slide>

        <Slide notes='especially for unexperienced / beginners'>
          <Heading size={1}>What's tricky?</Heading>
          <List>
            <ListItem>Taming Concurrency</ListItem>
            <ListItem>Error handling</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={1}>Caveats?</Heading>
          <List>
            <ListItem>
              Single threaded
                <List>
                  <ListItem>Cluster module</ListItem>
                  <ListItem>spawn_child</ListItem>
                </List>
            </ListItem>
            <ListItem>
              ~1.5GB of RAM
              <List>
                <ListItem>
                  Use <Code>--max_old_heap_space</Code>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Releases 🗓
          </Heading>
        </Slide>

        <Slide>
          <Image width='100%' src='https://github.com/nodejs/LTS/raw/master/schedule.png' />
          <List>
            <ListItem>LTS yearly release</ListItem>
            <ListItem>LTS is supported for 18 months</ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Governance 🏛
          </Heading>
          <Link textColor='secondary' bold href='https://nodejs.org/en/about/governance/'>
            https://nodejs.org/en/about/governance/
          </Link>
        </Slide>

        <Slide>
          <Heading margin={20} bold fit>
            <Link textColor='tertiary' href='https://nodejs.org/en/download/'>
              https://nodejs.org/en/download/
            </Link>
          </Heading>
          <Code style={{ display: 'block' }} textSize='2em'>
            $ brew install node
          </Code>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading textColor='primary'>REPL</Heading>
          <Terminal title='1. gilles:node ~(zsh)' output={[
            'node',
            '> 1 + 1',
            '2',
            '> [4, 9].map(Math.sqrt)',
            '[ 2, 3 ]',
            '> require(\'crypto\').randomBytes(24).toString(\'base64\')',
            '\'oVroG1HCaLIw2gv9yFHIOL9xUpHsN26v\''
          ]}
          />
        </Slide>

        <Slide>
          <Image width='100%' src='https://raw.githubusercontent.com/libuv/libuv/master/img/banner.png' />
          <Heading size={1} bold fit>
            <Link textColor='tertiary' href='https://github.com/libuv/libuv'>
              https://github.com/libuv/libuv
            </Link>
          </Heading>
        </Slide>

        <Slide>
          <Text lineHeight='1.2em' textSize='1.2em' textColor='secondary'>
            The <S textColor='tertiary' type='bold'>C library</S> that implements the Node.js <S textColor='tertiary' type='bold'>event loop</S>,
            its worker threads and all of the <S textColor='tertiary' type='bold'>asynchronous behaviors</S> of the platform.
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor='tertiary'>
            Implements
          </Heading>
          <List>
            <ListItem>Event loop</ListItem>
            <ListItem>Networking (TCP, UDP, DNS, etc.)</ListItem>
            <ListItem>Filesystem operations</ListItem>
            <ListItem>Child processes, threading, etc.</ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Event loop 🎢
          </Heading>
        </Slide>

        <Slide>
          <Image src='https://camo.githubusercontent.com/c52b058fddead54a1557e71a1a97852b3bdd1c76/68747470733a2f2f7363722e7361642e737570696e666f2e636f6d2f61727469636c65732f7265736f75726365732f3136343836322f323230342f312e706e67' />
        </Slide>

        <CodeSlide
          textSize='28px'
          transition={'none'}
          lang='js'
          code={require('./hello-world.txt')}
          ranges={[
            { loc: [0, 1], title: 'require fs module' },
            { loc: [1, 2], title: 'define stdout' },
            { loc: [3, 7], title: 'read file' },
            { loc: [8, 9], title: 'say hello' },
            { loc: [9, 10], note: '> hello, world!' }
          ]}
        />

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Concurrency 🍝
          </Heading>
        </Slide>

        <Slide notes='used in Node core, lots of libraries'>
          <Heading size={3}>
            Callbacks ↩️
          </Heading>
          <Heading size={5}>
            <Link textColor='tertiary' href='https://github.com/caolan/async'>
              caolan/async
            </Link>
          </Heading>
        </Slide>

        <CodeSlide
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./merge-callbacks.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [3, 7], title: 'read files' },
            { loc: [7, 8], title: 'first argument → error object' },
            { loc: [7, 8], title: 'second argument → response data' },
            { loc: [8, 9], title: 'handle error' },
            { loc: [9, 10], title: 'handle results' },
            { loc: [9, 10], note: `> foo & bar` }
          ]}
        />

        <Slide>
          <Heading size={3}>
            Promises 🤞
          </Heading>
          <Heading size={5}>
            <Link textColor='tertiary' href='https://github.com/petkaantonov/bluebird'>
              petkaantonov/bluebird
            </Link>
          </Heading>
          <Heading size={5}>
            <Link textColor='tertiary' href='https://github.com/sindresorhus/promise-fun'>
              sindresorhus/promise-fun
            </Link>
          </Heading>
        </Slide>

        <CodeSlide
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./merge-promise.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [2, 3], title: 'promisify function' },
            { loc: [4, 8], title: 'read files' },
            { loc: [8, 11], title: 'handle results' },
            { loc: [11, 14], title: 'handle errors' },
            { loc: [14, 15], note: `> foo & bar` }
          ]}
        />

        <Slide>
          <Heading size={3}>
            async/await ⏱
          </Heading>
          <Heading size={5} textColor='tertiary'>
            builds on Promises
          </Heading>
        </Slide>

        <CodeSlide
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./merge-async.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [2, 3], title: 'promisify function' },
            { loc: [4, 5], title: 'define async function' },
            { loc: [5, 7], title: 'read files' },
            { loc: [8, 9], title: 'handle results' },
            { loc: [11, 14], title: 'handle errors' },
            { loc: [14, 15], note: `> foo & bar` }
          ]}
        />

        <Slide bgColor='tertiary' notes='bread and butter of Node,
          usually small single concern. Like LEGO blocks.'
        >
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Packages 📦
          </Heading>
          <Text textColor='primary' fit bold>
            and modules
          </Text>
        </Slide>

        <Slide>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg' width='60%' />
        </Slide>

        <Slide>
          <Heading size={1} fit caps textColor='tertiary'>
            by the numbers (2016)
          </Heading>
          <List>
            <ListItem>~40,000 publishes/week</ListItem>
            <ListItem>102,460 publishers</ListItem>
            <ListItem>over 450.000 modules</ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading margin={20} size={3} textColor='primary'>
            Creating a package ✍️
          </Heading>
          <Terminal title='1. gilles:node ~(zsh)' output={[
            'npm init',
            `This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (my-module)`,
            'version: (1.0.0)',
            'description: my amazing module',
            'entry point: (index.js)',
            'test command:',
            'git repository:',
            'keywords:',
            'author: Gilles De Mey <gilles.de.mey@gmail.com>',
            'license: (ISC)',
            'About to write to /Users/gillesdemey/dev/preso-spectacle/my-module/package.json:',
            `
{
  "name": "my-module",
  "version": "1.0.0",
  "description": "my amazing module",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Gilles De Mey <gilles.de.mey@gmail.com>",
  "license": "ISC"
}


Is this ok? (yes)`
          ]}
          />
        </Slide>

      </Deck>
    )
  }
}

export default Presentation
