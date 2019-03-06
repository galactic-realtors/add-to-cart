"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require("chai").expect;
var db = require("../database/index.knex");
(function () {
    "use strict";
    describe("database communication: Typescript", function () {
        var id = 69;
        it("should return an object", function (done) {
            db("prices")
                .select()
                .where("id", "" + id)
                .then(function (data) {
                var isObj = typeof data[0] === "object" && Array.isArray(data[0]) === false;
                expect(isObj).to.equal(true);
                done();
            })
                .catch(function () {
                expect(false).to.equal(true);
                done();
            });
        });
        it("should return the the correct desired object", function (done) {
            db("prices")
                .select()
                .where("id", "" + id)
                .then(function (data) {
                expect(data[0].id).to.equal(69);
                expect(data[0].product_name).to.equal("Incredible Steel Salad");
                expect(data[0].price).to.be.equal("887.00");
                done();
            })
                .catch(function () {
                expect(false).to.equal(true);
                done();
            });
        });
        it("should add the specified item to the database", function (done) {
            var payload = {
                product_name: "A Real Product",
                price: "1234.56"
            };
            db("prices")
                .insert(payload)
                .returning(["id", "product_name", "price"])
                .then(function (data) {
                expect(data[0].product_name).to.equal("A Real Product");
                expect(data[0].price).to.equal("1234.56");
                done();
            })
                .catch(function () {
                expect(false).to.equal(true);
                done();
            });
        });
        it("should return an error when an invalid ID is supplied", function (done) {
            db("prices")
                .select()
                .where("id", "" + id)
                .then(function () {
                expect(false).to.equal(true);
                done();
            })
                .catch(function () {
                expect(true).to.equal(true);
                done();
            });
        });
    });
})();
