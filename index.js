const randomWords = require('random-words');

const RePasswordGeneratorTypes = {
  EASY_TO_SAY: 'EASY_TO_SAY',
  EASY_TO_READ: 'EASY_TO_READ',
  ALL_CHARS: 'ALL_CHARS',
  WORDS: 'WORDS'
};

const characterSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '~!@#$%&*?^',
};

class RePasswordGenerator {
  constructor(options) {
    this.options = options || {};
    this.words = this.options.words || 3; // optional
    this.passwordlength = this.options.passwordlength || 12; // default 12 char value
    this.separator = this.options.separator || '-';
    this.type = this.options.type || 'WORDS'; // words (random-words) , EASY_TO_SAY, easyEASY_TO_READtoread, ALL_CHARS
    this.case = this.options.case || 'lower'; // lower, camel
    this.addNumbers = this.options.addNumbers || false;
    this.addSymbols = this.options.addSymbols || false;
  }

  generate() {
    if (this.type == 'WORDS') {
      const words = randomWords({ exactly: this.words });
      return words.join(this.separator);
    }
    return this.generatePassword(this.passwordlength, this.type, (this.case == 'lower'), (this.case == 'upper'), this.addNumbers, this.addSymbols);
  }

  generatePassword(length, type, lower, upper, number, symbol) {
    let generatedPassword = '';
    if (!lower && !upper && !number && !symbol) {
      return '';
    }

    const charSets = [];
    if (lower) {
      charSets.push(characterSets.lowercase);
    }
    if (upper) {
      if (type === RePasswordGeneratorTypes.EASY_TO_READ) {
        charSets.push(characterSets.uppercase.replace(/I|O/g, ''));
      } else {
        charSets.push(characterSets.uppercase);
      }
    }
    if (number) {
      if (type === RePasswordGeneratorTypes.EASY_TO_READ) {
        charSets.push(characterSets.number.replace(/1|0/g, ''));
      } else {
        charSets.push(characterSets.number);
      }
    }
    if (symbol) {
      charSets.push(characterSets.symbol);
    }

    for (let i = 0; i < length; i++) {
      const charSetIndex = Math.floor(Math.random() * charSets.length);
      const chars = charSets[charSetIndex];
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(`test ${generatedPassword}`)
    return generatedPassword.slice(0, length);
  }

}
module.exports = {
  RePasswordGenerator,
  RePasswordGeneratorTypes
};