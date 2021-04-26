//  https://edabit.com/challenge/cEbhy9eWeNudEuxut

let Test = require("../Test.js");

function makeCopy(obj) {
  return Object.assign(obj);
}

const obj = { piano: 100 };
const obj2 = { stereo: 200 };
const obj3 = { tv: Math.random() };

Test.assertObjects(makeCopy(obj), obj);
Test.assertObjects(makeCopy(obj2), obj2);
Test.assertObjects(makeCopy(obj3), obj3);
