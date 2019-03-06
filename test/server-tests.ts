const { expect } = require("chai");
const axios = require("axios");

const server = "http://localhost:3000";

describe("server communication: Typescript", (): void => {
  it("should return a 200 on successful message", function(done: Function): void {
    axios
      .get(`${server}/api/product/69`)
      .then(
        (data: object | any): void => {
          expect(data.status).to.equal(200);
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
  it("should make a POST request to the database", function(done: Function): void {
    const payload: object = {
      product_name: "A Real Product",
      price: "1234.56"
    };
    axios
      .post(`${server}/api/product/`, payload)
      .then(
        (data: object | any): void => {
          expect(data.data[0].id).to.be.an("number");
          expect(data.data[0].product_name).to.equal("A Real Product");
          expect(data.data[0].price).to.equal("1234.56");
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
  it("should respond to a bad route with an error", function(done: Function): void {
    axios
      .get(`${server}/api/products`)
      .then(
        (): void => {
          expect(false).to.equal(true);
          done();
        }
      )
      .catch(
        (res: object | any): void => {
          expect(res).to.be.an("error");
          done();
        }
      );
  });
});
