const assert = require('assert');
const expect = require('chai').expect;
const db = require('../database/index.knex.js');

(function() {
  'use strict';
  describe('database communication: Javascript', () => {
    let id = 69;
    it('should return an object with the correct items', function(done){
      db('prices')
      .select()
      .where('id', `${id}`)
      .then((data) => {
        const isObj = (typeof data[0] === 'object' && Array.isArray(data[0]) === false);
        expect(isObj).to.equal(true);
        done()
      })
      .catch((err) => {
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
        expect(data[0].product_name).to.an('string');
        expect(data[0].price).to.be.an('string');
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

//the following is for testing with plain PG

// const assert = require('assert');
// const expect = require('chai').expect;
// const db = require('../database/index');

// (function() {
//   'use strict';
//   describe('database communication', () => {
//     let id = 69;
//     it('should return an object', function(done){
//       console.time('start')
//       db.query(`SELECT * FROM prices WHERE id = ${id}`)
//       .then((data) => {
//         console.timeEnd('start');
//         console.log('data is ', typeof data.rows[0].price);
//         const isObj = (typeof data.rows[0] === 'object' && Array.isArray(data.rows[0]) === false);
//         expect(isObj).to.equal(true);
//         done()
//       })
//       .catch((err) => {
//         expect(false).to.equal(true);
//         done()
//       });
//     });
//     it('should return the the correct desired object', function(done){
//       console.time('start')
//       db.query(`SELECT * FROM prices WHERE id = ${id}`)
//       .then((data) => {
//         console.timeEnd('start');
//         expect(data.rows[0].id).to.equal(69);
//         expect(data.rows[0].product_name).to.an('string');
//         expect(data.rows[0].price).to.be.an('string');
//         done()
//       })
//       .catch((err) => {
//         expect(false).to.equal(true);
//         done()
//       });
//     });

//     it('should return an error when an invalid ID is supplied', function(done){
//       db.query(`SELECT * FROM prices WHERE id = abc`)
//       .then((data) => {
//         expect(false).to.equal(true);
//         done()
//       })
//       .catch((err) => {
//         expect(true).to.equal(true);
//         done()
//       });
//     });

//   })
// })();