// https://edabit.com/challenge/y4K6Mi7XfaauvoT3u

let Test = require("../Test.js");

function removeEntry(obj, itemName) {
  delete obj[itemName];
  return obj;
}

const random = Math.random();
const obj = { piano: random, tv: 100 };
const obj2 = { piano: random, tv: 100, skate: 50 };
Test.assertObjects(removeEntry(obj, "tv"), { piano: random });
Test.assertObjects(removeEntry(obj2, "tv"), { piano: random, skate: 50 });
