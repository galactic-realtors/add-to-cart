const assert = require('assert');
const expect = require('chai').expect;
const axios = require('axios');

const server = 'http://localhost:3000';

describe('server communication', () => {
  it('should return a 200 on successful message', function(done){
		axios.get(`${server}/api/getAll/69`)
			.then((data) => {
				expect(data.status).to.equal(200);
				done();
			})
			.catch((res) => {
				expect(false).to.equal(true);
				done();
			});
  });
  it('should respond to a bad route with an error', function(done){
		axios.get(`${server}/api/getAll`)
			.then((data) => {
				expect(false).to.equal(true);
				done();
			})
			.catch((res) => {
				expect(res).to.be.an('error');
				done();
			});
  });
})