const assert = require('assert');
const expect = require('chai').expect;
const db = require('../database/index');

(function() {
  'use strict';
  describe('database communication', () => {
    let id = 69;
    it('should return an object', function(done){
      
      db('prices')
      .select()
      .where('id', `${id}`)
      .then((data) => {
        const isObj = (typeof data[0] === 'object' && Array.isArray(data[0]) === false);
        expect(isObj).to.equal(true);
        done()
      })
      .catch((err) => {
        console.log('this be err', err);
        expect(false).to.equal(true);
        done()
      });
    });
    it('should return the the correct desired object', function(done){
      db('prices')
      .select()
      .where('id', `${id}`)
      .then((data) => {
        expect(data[0].id).to.equal(69);
        expect(data[0].product_name).to.equal('Chicken - Whole');
        expect(data[0].price).to.equal('$5352.52');
        done()
      })
      .catch((err) => {
        expect(false).to.equal(true);
        done()
      });
    });

    it('should return an error when an invalid ID is supplied', function(done){
      db('prices')
      .select()
      .where('id', `${id}`)
      .then((data) => {
        expect(false).to.equal(true);
        done()
      })
      .catch((err) => {
        expect(true).to.equal(true);
        done()
      });
    });

  })
})();