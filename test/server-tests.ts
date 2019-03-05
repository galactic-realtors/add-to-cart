const { expect } = require("chai");
const axios = require("axios");

const server = "http://localhost:3000";

describe("server communication: Typescript", (): void => {
  it("should return a 200 on successful message", function(done): void {
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
  it("should respond to a bad route with an error", function(done): void {
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
