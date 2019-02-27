const assert = require('assert');
const expect = require('chai').expect;
const axios = require('axios');

const server = 'http://localhost:3000';

describe('server communication', (done) => {
  it('should return a 200 on successful message', function(){
		axios.get(`${server}/`)
			.then((data) => {
				console.log('this is datafdsgjhkhnlaopqwfjinib ifjhnvwinrwirwnirnrweirnwigvnwre,', data);
			})
			.catch((res) => {
				console.log('this is datafdsgjhkhnlaopqwfjinib ifjhnvwinrwirwnirnrweirnwigvnwre,', res);
			});
		
		// expect(isValid).to.be.true;
  });
  it('should respond to a bad route with an error', function(done){
		axios.get(`${server}/`)
			.then((data) => {
				expect(false).to.equal(true);
			})
			.catch((res) => {
				expect(res).to.be.an('error');
				done()
			});
  });
})