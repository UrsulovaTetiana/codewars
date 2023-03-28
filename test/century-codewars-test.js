const Test = require("@codewars/test-compat");
const century = require("../century_from_year");

describe("Basic Tests", function () {
  it("Sample Tests", function () {
    Test.assertEquals(century(1705), 18, "Testing for year 1705");
    Test.assertEquals(century(1900), 19, "Testing for year 1900");
    Test.assertEquals(century(1601), 17, "Testing for year 1601");
    Test.assertEquals(century(2000), 20, "Testing for year 2000");
    Test.assertEquals(century(89), 1, "Testing for year 89");
  });

  it("Random Tests", function () {
    function gC(y) {
      return Math.ceil(y / 100);
    }

    for (let i = 0; i < 200; i++) {
      let year = Math.ceil(Math.random() * 999999);
      Test.assertEquals(century(year), gC(year), "Testing for year " + year);
    }
  });
});
