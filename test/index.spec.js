const chai = require('chai');
const expect = chai.expect;
const { RePasswordGenerator, RePasswordGeneratorTypes } = require('../index');


describe('RePasswordGenerator', () => {
  describe('#generate', () => {
    it('should return an array of 3 words by default', () => {
      const rePasswordGenerator = new RePasswordGenerator();
      const passphrase = rePasswordGenerator.generate();
      expect(passphrase).to.be.an('string');
    });

    it('should return a string with "-" separator when called with default options', () => {
      const rePasswordGenerator = new RePasswordGenerator({ type: RePasswordGeneratorTypes.EASY_TO_READ });
      const passphrase = rePasswordGenerator.generate();
      expect(passphrase).to.be.a('string');
      expect(passphrase).to.length(12);
    });

    it('should return a string with "_" separator when called with custom separator', () => {
      const rePasswordGenerator = new RePasswordGenerator({ separator: '_', type: RePasswordGeneratorTypes.WORDS, words: 4 });
      const passphrase = rePasswordGenerator.generate();
      expect(passphrase).to.be.a('string');
      expect(passphrase).to.match(/[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+/);
    });
  });
});
