const assert = require('assert');
const expect = require('chai').expect;
const { getAllProducts } = require('../database/index');

(function() { //testing travis
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
    it('should return the the correct desired object', function(done){
      getAllProducts(id, (err, data) => {
        expect(data.id).to.equal(69);
        expect(data.product_name).to.equal('Chicken - Whole');
        expect(data.price).to.equal('$5352.52');
        done();
      })
    });

    it('should return an error when an invalid ID is supplied', function(done){
      getAllProducts('abc', (err, data) => {
        expect(err).to.be.an('error');
        done();
      })
    });

  })
})();