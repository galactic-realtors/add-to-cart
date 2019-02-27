const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const {getAllProducts} = require('../database/index');

(function() {
  'use strict';
  describe('database communication', () => {
    
    let id = 69;
    it('should return an object', function(done){
      getAllProducts(id, (err, data) => {
        const isObj = (typeof data === 'object' && Array.isArray(data) === false);
        expect(isObj).to.be.true;
        done();
      })
    });
    it('should return the the correct id obj', function(done){
      console.log('we here,', id);
      getAllProducts(id, (err, data) => {
        console.log('we got', data);
        const objID = data.id;
        console.log('we got here again', objID);
        expect(objID).to.equal(id);
        done();
      })
    });
    it('should contain the required fields (id, product_name, price)', function(done){
      getAllProducts(id, (err, data) => {
        expect(data.id).to.exist;
        expect(data.product_name).to.exist;
        expect(data.price).to.exist;
        done();
      })
    });
    it('should return an error when no id is supplied', function(done){
      getAllProducts(null, (err, data) => {
        expect(err).to.be.an('error');
        done();
      })
    });

  })
})();