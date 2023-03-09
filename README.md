# RePasswordGenerator

The RePasswordGenerator library is a Node.js package that generates secure and random passwords. It provides a simple and easy-to-use interface for generating passwords that can be used for a variety of purposes, including securing user accounts, generating encryption keys, and more.

## Installation

To install the RePasswordGenerator library, use npm:

```sh
npm install repassword-generator
```

## Usage

``` js
const RePasswordGenerator = require('re-password-generator');

// Generate a password with default options
const password = RePasswordGenerator.generate();

console.log(password)

```

## API

PassphraseGenerator.generate([options])
Generates a random passphrase.

### options

Type: object

*words*
Type: number
Default: 3

The number of words in the generated passphrase.

*separator*
Type: string
Default: '-'

*type*
Values: WORDS, EASY_TO_READ, EASY_TO_SAY, ALL_CHARS
Type: string
Default: WORDS

*case*
Values: lower, uppper
Type: string
Default: lower

*addNumbers*
Adds numbers to password
Values: true/false
Type: boolean
Default: false

*addSymbols*
Adds symbols to password
Values: true/false
Type: boolean
Default: false

The separator used to separate the words in the generated passphrase.

## License

MIT