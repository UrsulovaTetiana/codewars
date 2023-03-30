const year = require("../century_from_year");
const expect = require("chai").expect;

describe("get century function", function () {
  context("century is first two numbers of year", function () {
    it("returns first two numbers ", function () {
      expect(year(1900)).to.equal(19);
    });
  });

  context("to round up number", function () {
    it("round up a fractional number", function () {
      expect(year(1901)).to.equal(20);
    });
  });
});
