const chai = require("chai");
const trim = require("../trim");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it("Should pass fixed tests", () => {
    assert.strictEqual(trim("Creating kata is fun", 14), "Creating ka...");
    assert.strictEqual(trim("He", 1), "H...");
    assert.strictEqual(trim("Hey", 2), "He...");
    assert.strictEqual(trim("Hey", 3), "Hey");
    assert.strictEqual(trim("Creating kata is fun", 2), "Cr...");
    assert.strictEqual(trim("Code Wars is pretty rad", 3), "Cod...");
    assert.strictEqual(
      trim("Coding rocks", "Coding rocks".length),
      "Coding rocks"
    );
    assert.strictEqual(
      trim("Code Wars is pretty rad", 50),
      "Code Wars is pretty rad"
    );
    assert.strictEqual(trim("London is freezing", 18), "London is freezing");
  });
});

describe("Random Tests", () => {
  function generateRandomWord(n) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
      randomString = "";

    for (let i = 0; i < n; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomString += chars.substring(rnum, rnum + 1);
    }
    return randomString;
  }

  function generateRandomPhrase(wordCount) {
    let arr = [];
    for (let i = 0; i < wordCount; i++)
      arr.push(generateRandomWord(Math.floor(Math.random() * 4 + 2)));
    return arr.join(" ");
  }

  function trimSol(str, size) {
    if (str.length <= size) return str;

    if (size <= 3) return str.substr(0, size) + "...";

    return str.substr(0, size - 3) + "...";
  }

  for (let i = 0; i < 100; i++) {
    let s = generateRandomPhrase(Math.floor(Math.random() * 4 + 1)),
      n = Math.floor(Math.random() * s.length * 2 + 1);
    it(`Testing with str = "${s}" and size = ${n}`, () => {
      assert.strictEqual(trim(s, n), trimSol(s, n));
    });
  }
});
