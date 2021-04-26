// https://edabit.com/challenge/Bxp6uGjgmf8TuG8Fe

let Test = require("./Test.js");

function derivative(b, m) {
  return b * Math.pow(m, b - 1);
}

Test.assertEquals(derivative(1, 4), 1, "derivative(1, 4), 1");
Test.assertEquals(derivative(3, -2), 12, "derivative(3, -2), 12");
Test.assertEquals(derivative(4, -3), -108, "derivative(4, -3), -108");
Test.assertEquals(derivative(9, -5), 3515625, "derivative(9, -5), 3515625");
Test.assertEquals(derivative(1254, 0), 0, "derivative(1254, 0), 0");
Test.assertEquals(derivative(-2, 10), -0.002, "derivative(-2, 10), -0.002");
