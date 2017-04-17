import React, { Component } from 'react'
import Terminal from 'spectacle-terminal'
import CodeSlide from 'spectacle-code-slide'
import Icon from 'react-fontawesome'
import Gravatar from 'react-gravatar'

import {
  BlockQuote,
  Quote,
  Cite,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  S,
  Slide,
  Text
} from 'spectacle'

import Preload from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

Preload([
  'https://softwareengineeringdaily.com/wp-content/uploads/2015/07/event-loop.jpg',
  'https://github.com/nodejs/LTS/raw/master/schedule.png',
  'https://raw.githubusercontent.com/libuv/libuv/master/img/banner.png'
])

require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('./styles/index.css')

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

        <Slide>
          <Heading fit margin='50px 0'>
            Who are we?
          </Heading>
          <Layout>
            <Fill align='left'>
              <Text bold>Gilles De Mey</Text>
              <Gravatar size={200} email='gilles.de.mey@gmail.com' />
              <Text>
                <Icon name='github' /> gillesdemey
              </Text>
              <Text>
                <Icon name='twitter' /> gdemey
              </Text>
            </Fill>
            <Fill align='right'>
              <Text bold>Michiel De Mey</Text>
              <Gravatar size={200} email='de.mey.michiel@gmail.com' />
              <Text>
                <Icon name='github' /> michieldemey
              </Text>
              <Text>
                <Icon name='twitter' /> michieldemey
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide notes='emphasis on small core and backwards compatibility'>
          <Heading fit>
            What is Node.js?
          </Heading>
          <Text lineHeight='1.2em' margin={20} bold textSize={42} textColor='secondary'>
            an asynchronous event driven JavaScript runtime
          </Text>
        </Slide>

        <Slide notes={`easy to write, one command,
          no complicated setup / scaffolding,
          fast development and runtime
        `}>
          <Heading size={1}>What's good?</Heading>
          <List>
            <ListItem>It's simple</ListItem>
            <ListItem>It's fast</ListItem>
            <ListItem>Vibrant ecosystem</ListItem>
          </List>
        </Slide>

        <Slide notes='especially for unexperienced / beginners'>
          <Heading size={1}>What's tricky?</Heading>
          <List>
            <ListItem>Taming concurrency</ListItem>
            <ListItem>Error handling</ListItem>
            <ListItem>JavaScript has bad parts</ListItem>
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
            '\'oVroG1HCaLIw2gv9yFHIOL9xUpHsN26v\'',
            '> require(\'lodash\').uniq([1, 2, 1])',
            '[ 1, 2 ]'
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

        <Slide bgColor='#50534B'>
          <Image width='100%' src='https://softwareengineeringdaily.com/wp-content/uploads/2015/07/event-loop.jpg' />
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
            { loc: [7, 8], title: 'second → response data' },
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

        <Slide notes='since Node v7.5'>
          <Heading size={3}>
            async/await ⏱
          </Heading>
          <Heading size={5} textColor='tertiary'>
            builds on Promises
          </Heading>
        </Slide>

        <CodeSlide notes='generators honorable mention'
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

        <Slide bgColor='tertiary' notes='just a few'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            APIs 🔧
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>
            Streams 🚰
          </Heading>
          <BlockQuote>
            <Quote style={{ lineHeight: '1.2em' }} bold={false} textSize={24} textColor='tertiary'>
            "We should have some ways of connecting programs like a garden hose &mdash; screw in
            another segment when it becomes necessary to massage data in
            another way."
            </Quote>
            <Cite textSize={21}>Doug McIlroy. October 11, 1964</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          notes='Practical example (accounting): Database documents -> PDF Stream -> Zip -> Express output'
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./streams.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [3, 4], title: 'Create readable stream' },
            { loc: [4, 7], title: 'Pipe to another stream' },
            { loc: [7, 8], title: 'Pipe to stdout', note: 'vRU3ZWmTqV+si8n6klFsZ0tf1OpPCPFCsTWMKsftpmKQR7RP4Jr73AG2Sk…' }
          ]}
        />

        <Slide>
          <Heading size={3}>
            Crypto 🗝
          </Heading>
          <Heading size={5}>
            <Link textColor='tertiary' href='https://nodejs.org/api/crypto.html'>
              https://nodejs.org/api/crypto.html
            </Link>
          </Heading>
        </Slide>

        <CodeSlide
          notes='simple HMAC example; cat crypto-hmac.txt | openssl dgst -sha256 -hmac "foobar"'
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./crypto-hmac.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [3, 5], title: 'define parameters' },
            { loc: [6, 7], title: 'Create writable stream' },
            { loc: [7, 8], title: 'set encoding' },
            { loc: [9, 10], title: 'Create readable stream' },
            { loc: [10, 11], title: 'Pipe to hmac' },
            { loc: [11, 12], title: 'Pipe to stdout', note: '5852206920a77d14a18259faf609e4ac30a7e68afd2c4d6899a08bfe89de95df' },
            { loc: [11, 12], title: 'verify', note: 'cat crypto-hmac.txt | openssl dgst -sha256 -hmac "foobar"' }
          ]}
        />

        <Slide>
          <Heading size={3}>
            Events 🚦
          </Heading>
          <Heading size={5}>
            <Link textColor='tertiary' href='https://nodejs.org/api/events.html'>
              https://nodejs.org/api/events.html
            </Link>
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>
            Cluster 👯‍♂️
          </Heading>
          <Heading size={5}>
            <Link textColor='tertiary' href='https://nodejs.org/api/cluster.html'>
              https://nodejs.org/api/cluster.html
            </Link>
          </Heading>
        </Slide>

        <CodeSlide
          notes='Do a curl command at the end to showcase "curl -X GET http://localhost:8000"'
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./cluster.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [2, 3], title: 'get number of CPU cores' },
            { loc: [10, 22], title: 'Master code' },
            { loc: [13, 16], title: 'Create workers' },
            { loc: [17, 21], title: 'Listen for events' },
            { loc: [23, 31], title: 'Worker code', note: `  Workers can share any TCP connection
  In this case it is an HTTP server`
            },
            { loc: [31, 32], note: `> Master 5095 is running
Worker 5097 started
Worker 5096 started
Worker 5098 started
Worker 5099 started` }
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

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Debugging 🐞
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor='tertiary'>
            Options
          </Heading>
          <List>
            <ListItem>
              <Code>node debug</Code> (deprecated)
            </ListItem>
            <ListItem>
              <Code>node --inspect</Code>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/jaridmargolin/inspect-process'>
                inspect-process
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary' notes='separate presentation'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Testing 🙏
          </Heading>
          <Text textColor='primary' fit bold>
            Hoping it keeps working
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor='tertiary'>
            Options
          </Heading>
          <List>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/avajs/ava'>
                ava
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/tapjs/node-tap'>
                tap
              </Link>
              &nbsp;and&nbsp;
              <Link textColor='tertiary' href='https://github.com/substack/tape'>
                tape
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://mochajs.org/'>
                mocha
              </Link>
            </ListItem>
            <ListItem>
              …
            </ListItem>
          </List>
        </Slide>

        <CodeSlide
          notes="We'll use tap"
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./is-palindrome/is-palindrome.test.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [3, 9], title: 'ascii' },
            { loc: [10, 16], title: 'mixed case' },
            { loc: [17, 23], title: 'unicode' },
            { loc: [22, 23], note: `TAP version 13
# Subtest: English palindrome
    1..1
    ok 1 - expect truthy value
ok 1 - English palindrome # time=5.441ms

# Subtest: mixed case characters
    1..1
    ok 1 - expect truthy value
ok 2 - mixed case characters # time=0.858ms

# Subtest: UTF-8 palindrome
    1..1
    ok 1 - expect truthy value
ok 3 - UTF-8 palindrome # time=0.83ms

1..3
# time=21.969ms` }
          ]}
        />

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Benching 🏋️
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor='tertiary'>
            Options
          </Heading>
          <List>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/mcollina/autocannon'>
                autocannon
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/mafintosh/nanobench'>
                nanobench
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/mcollina/fastbench'>
                fastbench
              </Link>
            </ListItem>
            <ListItem>
              …
            </ListItem>
          </List>
        </Slide>

        <CodeSlide
          notes='We use nanobench here'
          textSize='24px'
          transition={'none'}
          lang='js'
          code={require('./bench.txt')}
          ranges={[
            { loc: [0, 2], title: 'require modules' },
            { loc: [3, 12], title: 'small palindrome' },
            { loc: [13, 22], title: 'large palindrome' },
            { loc: [22, 23], note: `> node presentation/bench.txt

# small palindrome 1.000.000 times
ok ~795 ms (0 s + 795139674 ns)

# large palindrome 1.000.000 times
ok ~2.89 s (2 s + 892704012 ns)

all benchmarks completed
ok ~3.69 s (3 s + 687843686 ns)` }
          ]}
        />

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Security 🔒
          </Heading>
          <Text textColor='primary' fit bold>
            Hoping you don't get hacked
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor='tertiary'>
            Options
          </Heading>
          <List>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/nodesecurity/nsp'>
                nsp (Node Security Platform)
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/snyk/snyk'>
                snyk
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Mad Science ⚗️
          </Heading>
        </Slide>

        <Slide>
          <List>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/feross/webtorrent'>
                ⚡️ WebTorrent
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='http://loopjs.com/'>
                🎹 LoopJS
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/ipfs/js-ipfs'>
                📡 IPFS
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/evancohen/sonus'>
                💬 Sonus
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            Learning 🎓
          </Heading>
        </Slide>

        <Slide>
          <List>
            <ListItem>
              <Link textColor='tertiary' href='https://nodeschool.io/#workshoppers'>
                NodeSchool workshops
              </Link>
            </ListItem>
            <ListItem>
              <Link textColor='tertiary' href='https://github.com/maxogden/art-of-node'>
                The Art of Node
              </Link>
            </ListItem>
          </List>
        </Slide>

      </Deck>
    )
  }
}

export default Presentation
