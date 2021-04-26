// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

let Test = require("../Test.js");

function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}

Test.assertObjects(addName({}, "Brutus", 300), { Brutus: 300 });
Test.assertObjects(addName({ piano: 500 }, "Brutus", 400), {
  piano: 500,
  Brutus: 400,
});
Test.assertObjects(addName({ piano: 500, stereo: 300 }, "Caligula", 440), {
  piano: 500,
  stereo: 300,
  Caligula: 440,
});
