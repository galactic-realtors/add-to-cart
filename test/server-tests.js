"use strict";
var expect = require("chai").expect;
var axios = require("axios");
var server = "http://localhost:3000";
describe("server communication: Typescript", function () {
    it("should return a 200 on successful message", function (done) {
        axios
            .get(server + "/api/product/69")
            .then(function (data) {
            expect(data.status).to.equal(200);
            done();
        })
            .catch(function () {
            expect(false).to.equal(true);
            done();
        });
    });
    it("should make a POST request to the database", function (done) {
        var payload = {
            product_name: "A Real Product",
            price: "1234.56"
        };
        axios
            .post(server + "/api/product/", payload)
            .then(function (data) {
            expect(data.data[0].id).to.be.an("number");
            expect(data.data[0].product_name).to.equal("A Real Product");
            expect(data.data[0].price).to.equal("1234.56");
            done();
        })
            .catch(function () {
            expect(false).to.equal(true);
            done();
        });
    });
    it("should respond to a bad route with an error", function (done) {
        axios
            .get(server + "/api/products")
            .then(function () {
            expect(false).to.equal(true);
            done();
        })
            .catch(function (res) {
            expect(res).to.be.an("error");
            done();
        });
    });
});
