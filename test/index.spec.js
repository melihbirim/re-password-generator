const chai = require('chai');
const expect = chai.expect;
const RePasswordGenerator = require('../index');

describe('RePasswordGenerator', () => {
  describe('#generate', () => {
    it('should return an array of 5 words by default', () => {
      const rePasswordGenerator = new RePasswordGenerator();
      const passphrase = rePasswordGenerator.generate();
      expect(passphrase).to.be.an('string');
      expect(passphrase.split("-")).to.have.lengthOf(5);
    });

    it('should return a string with "-" separator when called with default options', () => {
      const rePasswordGenerator = new RePasswordGenerator();
      const passphrase = rePasswordGenerator.generate();
      expect(passphrase).to.be.a('string');
      expect(passphrase).to.match(/[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+/);
    });

    it('should return a string with "_" separator when called with custom separator', () => {
      const rePasswordGenerator = new RePasswordGenerator({ separator: '_' });
      const passphrase = rePasswordGenerator.generate();
      expect(passphrase).to.be.a('string');
      expect(passphrase).to.match(/[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+/);
    });
  });
});
