const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const {getAllProducts} = require('../database/index');

describe('database communication', () => {
  it('should return an object', function(){
		getAllProducts(22, (data) => {
      const isObj = (typeof data === 'object' && Array.isArray(obj) === false);
      expect(isObj).to.be.true;
    })
  });
  it('should return the the correct id obj', function(){
    const id = (Math.floor(Math.random() * 99) + 1) //don't want value to be 0
		getAllProducts(id, (data) => {
      const objID = data.id;
      expect(objID).to.equal(id);
    })
  });
  it('should return an error when no id is given', function(){
		// const isValid = loginController.isValidUserId('abc1234')
		// //assert.equal(isValid, false);
		// isValid.should.equal(false);
  });
})