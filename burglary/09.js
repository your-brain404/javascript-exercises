//  https://edabit.com/challenge/Cve45maGdj5XtQXgo

let Test = require("../Test.js");

function filterValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter((item) => item[1] >= 5000)
  );
}

const random = Math.random() * 10000,
  random2 = Math.random() * 100;
const obj = {
  piano: 4999,
  skate: 5000,
  stereo: random,
  "rubber duck": random2,
};
let obj2 = Object.entries(obj).filter((item) => item[1] >= 5000);
obj2 = Object.fromEntries(obj2);
const check = Object.is(filterValues(obj), obj);

Test.assertEquals(check, false);
Test.assertObjects(filterValues(obj), obj2);
Test.assertObjects(filterValues({}), {});
Test.assertObjects(filterValues({ piano: 300 }), {});
Test.assertObjects(filterValues({ tv: 4999, guitar: 5000, fork: 5001 }), {
  guitar: 5000,
  fork: 5001,
});
