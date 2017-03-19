let expect = require('chai').expect;
let should = require('chai').should();
import * as helpers from '../views/helpers.js';

describe('helpers', () => {
  describe('capitalize', () => {
    it('should be ok with single words', () => {
      expect(helpers.capitalize('john')).to.be.equal('John');
      expect(helpers.capitalize('billy')).to.be.equal('Billy');
      expect(helpers.capitalize('sal')).to.be.equal('Sal');
      expect(helpers.capitalize('God')).to.be.equal('God');
    });

    it('should be ok with multiple words', () => {
      (helpers.capitalize('john mclean')).should.equal('John Mclean');
      (helpers.capitalize('billy madison')).should.equal('Billy Madison');
    });
  })
});
