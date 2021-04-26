// https://edabit.com/challenge/NHfYRHg2tDtcZyykB

let Test = require("./Test.js");

function possibleBonus(a, b) {
  return a < b && b - a <= 6;
}

Test.assertEquals(possibleBonus(3, 7), true, "possibleBonus(3, 7), true");
Test.assertEquals(possibleBonus(0, 6), true, "possibleBonus(0, 6), true");
Test.assertEquals(possibleBonus(1, 6), true, "possibleBonus(1, 6), true");
Test.assertEquals(possibleBonus(2, 6), true, "possibleBonus(2, 6), true");
Test.assertEquals(possibleBonus(3, 6), true, "possibleBonus(3, 6), true");
Test.assertEquals(possibleBonus(4, 6), true, "possibleBonus(4, 6), true");
Test.assertEquals(possibleBonus(5, 6), true, "possibleBonus(5, 6), true");
Test.assertEquals(possibleBonus(6, 6), false, "possibleBonus(6, 6), false");
Test.assertEquals(possibleBonus(7, 6), false, "possibleBonus(7, 6), false");
Test.assertEquals(possibleBonus(23, 27), true, "possibleBonus(23, 27), true");
Test.assertEquals(possibleBonus(1, 9), false, "possibleBonus(1, 9), false");
Test.assertEquals(possibleBonus(5, 3), false, "possibleBonus(5, 3), false");
