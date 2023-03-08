const randomWords = require('random-words');

class RePasswordGenerator {
  constructor(options) {
    this.options = options || {};
    this.words = this.options.words || 5;
    this.separator = this.options.separator || '-';
  }

  generate() {
    const words = randomWords({ exactly: this.words, join: this.separator });
    return this.capitalize ? this.capitalizeWords(words) : words;
  }

}

module.exports = RePasswordGenerator;
