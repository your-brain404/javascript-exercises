// https://edabit.com/challenge/hzxN9bAebBPNqdQto

let Test = require("./Test.js");

function redundant(str) {
  return () => str;
}

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

Test.assertEquals(f1(), "apple");
Test.assertEquals(f2(), "pear");
Test.assertEquals(f3(), "");
