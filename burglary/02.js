// https://edabit.com/challenge/yMEs8bXPyZenPEYLM

let Test = require("../Test.js");

function mostExpensiveItem(obj) {
  return Object.entries(obj).reduce(
    (total, arr) => (arr[1] > total[1] ? (total = arr) : total),
    ["prop", 0]
  )[0];
}

Test.assertEquals(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
  }),
  "stereo"
);

Test.assertSimilar(
  mostExpensiveItem({
    skate: 20,
  }),
  "skate"
);

Test.assertEquals(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
  }),
  "tv"
);
