const trim = require("../trim");
const expect = require("chai").expect;

describe("Triming function", function () {
  context("size arg is less then str length", function () {
    it("should return same str", function () {
      expect(trim("fuck", 4)).to.equal("fuck");
    });
  });

  context("size is greater than str length", function () {
    it("the length of returned string's size is size arg", function () {
      expect(trim("funk is good!", 7).length).to.equal(7);
    });

    it("returned trimmed string has last three chars as dots", function () {
      expect(trim("funk is good!", 7)).to.equal("funk...");
    });
  });
});
