// https://edabit.com/challenge/3hDDMWvmMQ6pFqqmg

let Test = require("../Test.js");

function thirdMostExpensive(obj) {
  let arr = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .find((item, i) => i === 2);
  return arr?.length > 0 ? arr[0] : false;
}

Test.assertEquals(thirdMostExpensive({}), false);
Test.assertEquals(thirdMostExpensive({ piano: 100 }), false);
Test.assertEquals(thirdMostExpensive({ piano: 100, stereo: 200 }), false);
Test.assertEquals(
  thirdMostExpensive({ piano: 100, stereo: 200, tv: 10 }),
  "tv"
);
Test.assertEquals(
  thirdMostExpensive({ piano: 100, stereo: 200, tv: 10, timmy: 500 }),
  "piano"
);
Test.assertEquals(
  thirdMostExpensive({
    computer: 1000,
    piano: 500,
    stereo: 200,
    tv: 10,
    timmy: 1,
  }),
  "stereo"
);
