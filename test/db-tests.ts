const { expect } = require("chai");
const db: any = require("../database/index.knex");

(function() {
  "use strict";
  describe("database communication: Typescript", (): void => {
    let id = 69;
    it("should return an object", function(done: Function): void {
      db("prices")
        .select()
        .where("id", `${id}`)
        .then(
          (data: Array<any>): void => {
            const isObj: boolean =
              typeof data[0] === "object" && Array.isArray(data[0]) === false;
            expect(isObj).to.equal(true);
            done();
          }
        )
        .catch(
          (): void => {
            expect(false).to.equal(true);
            done();
          }
        );
    });
    it("should return the the correct desired object", function(done: Function): void {
      db("prices")
        .select()
        .where("id", `${id}`)
        .then(
          (data: Array<any>): void => {
            expect(data[0].id).to.equal(69);
            expect(data[0].product_name).to.equal("Incredible Steel Salad");
            expect(data[0].price).to.be.equal("887.00");
            done();
          }
        )
        .catch(
          (): void => {
            expect(false).to.equal(true);
            done();
          }
        );
    });
    it("should add the specified item to the database", function(done: Function): void {
      const payload: object = {
        product_name: "A Real Product",
        price: "1234.56"
      };
      db("prices")
        .insert(payload)
        .returning(["id", "product_name", "price"])
        .then(
          (data: Array<any>): void => {
            expect(data[0].product_name).to.equal("A Real Product");
            expect(data[0].price).to.equal("1234.56");
            done();
          }
        )
        .catch(
          (): void => {
            expect(false).to.equal(true);
            done();
          }
        );
    });
    it("should return an error when an invalid ID is supplied", function(done: Function): void {
      db("prices")
        .select()
        .where("id", `${id}`)
        .then(
          (): void => {
            expect(false).to.equal(true);
            done();
          }
        )
        .catch(
          (): void => {
            expect(true).to.equal(true);
            done();
          }
        );
    });
  });
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

export {};
