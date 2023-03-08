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