// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

let Test = require("./Test.js");

function countTrue(arr) {
  return arr.reduce((total, boolean) => (boolean ? ++total : total), 0);
}

Test.assertEquals(
  countTrue([true, false, false, true, false]),
  2,
  "countTrue([true, false, false, true, false]), 2"
);
Test.assertEquals(
  countTrue([false, false, false, false]),
  0,
  "countTrue([false, false, false, false]), 0"
);
Test.assertEquals(countTrue([]), 0, "countTrue([]), 0");
Test.assertEquals(
  countTrue([
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
  ]),
  8,
  "countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8"
);
Test.assertEquals(
  countTrue([true, false, true, true, false, false, false, false, false]),
  3,
  "countTrue([true, false, true, true, false, false, false, false, false]), 3"
);
Test.assertEquals(
  countTrue([
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  8,
  "countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8"
);
Test.assertEquals(
  countTrue([true, false, true, true, true, false, true, true, false, false]),
  6,
  "countTrue([true, false, true, true, true, false, true, true, false, false]), 6"
);
Test.assertEquals(
  countTrue([
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
  ]),
  3,
  "countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3"
);
Test.assertEquals(
  countTrue([
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
  ]),
  3,
  "countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3"
);
Test.assertEquals(
  countTrue([true, true, false, true, false, false, false, false, true, false]),
  4,
  "countTrue([true, true, false, true, false, false, false, false, true, false]), 4"
);
Test.assertEquals(
  countTrue([
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  9,
  "countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9"
);
Test.assertEquals(
  countTrue([
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
  ]),
  8,
  "countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8"
);
Test.assertEquals(
  countTrue([
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
  ]),
  6,
  "countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6"
);
