// https://edabit.com/challenge/bAqxpvYmDuuvz4LQz

let Test = require("../Test.js");

const REGEXP = /^$/;

const str = "";

const validate = (REGEXP) => {
  return function testReg(str) {
    return REGEXP.test(str);
  };
};

const testExp = validate(REGEXP);

Test.assertSimilar(testExp(str), true);
