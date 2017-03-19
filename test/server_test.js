let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app.js');
let should = chai.should();
let expect = chai.expect;
let cheerio = require('cheerio');

chai.use(chaiHttp);

describe('Terminator', () => {
  it('should list ALL terminators on /terminators GET', function(done){
    chai.request(app)
      .get('/terminators')
      .end(function(err, res){
        var $ = cheerio.load(res.text);
        var $main = $('#main');

        res.should.have.status(200);
        res.should.be.html;
        ($main.find('h3').text()).should.equal('Terminator');
        ($main.find('li').eq(0).text()).should.equal('T1000');
        ($main.find('li').eq(1).text()).should.equal('Buzz Lightyear');
        ($main.find('li').eq(2).text()).should.equal('Magic Mike');
        ($main.find('.partial').text()).should.include('Dynamic partial success');
        done();
      });
  });

});
