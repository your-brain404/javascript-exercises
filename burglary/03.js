// https://edabit.com/challenge/FBj5P49wwFzj2Jnfr

let Test = require("../Test.js");

function findIt(obj, name) {
  return `${name.charAt(0).toUpperCase() + name.slice(1)} ${
    obj[name] ? "is gone..." : "is here!"
  }`;
}

Test.assertEquals(findIt({}, "rambo"), "Rambo is here!");
Test.assertEquals(findIt({}, "heman"), "Heman is here!");

Test.assertEquals(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    "rocky"
  ),
  "Rocky is here!"
);

Test.assertEquals(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    "spiderman"
  ),
  "Spiderman is here!"
);

Test.assertEquals(
  findIt(
    {
      tv: 30,
      stereo: 50,
      julius: 100,
    },
    "julius"
  ),
  "Julius is gone..."
);

Test.assertEquals(
  findIt(
    {
      tv: 30,
      stereo: 50,
      batman: 200,
    },
    "batman"
  ),
  "Batman is gone..."
);
