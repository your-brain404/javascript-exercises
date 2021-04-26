// https://edabit.com/challenge/pLNavsePxJ87t9Nak

let Test = require("../Test.js");

function calculateLosses(obj) {
  return (
    Object.entries(obj).reduce((total, arr) => (total += arr[1]), 0) ||
    "Lucky you!"
  );
}

Test.assertEquals(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  }),
  100
);

Test.assertEquals(
  calculateLosses({
    ring: 30000,
    painting: 20000,
    bust: 1,
  }),
  50001
);

Test.assertEquals(
  calculateLosses({
    chair: 3500,
  }),
  3500
);

Test.assertEquals(calculateLosses({}), "Lucky you!");
