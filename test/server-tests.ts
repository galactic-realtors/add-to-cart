const assert = require("assert");
const expect = require("chai").expect;
const axios = require("axios");

const server = "http://localhost:3000";

describe("server communication: Typescript", () => {
  it("should return a 200 on successful message", function(done) {
    axios
      .get(`${server}/api/getAll/69`)
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
  it("should respond to a bad route with an error", function(done) {
    axios
      .get(`${server}/api/getAll`)
      .then(
        (): void => {
          expect(false).to.equal(true);
          done();
        }
      )
      .catch(
        (res: Object | any): void => {
          expect(res).to.be.an("error");
          done();
        }
      );
  });
});
