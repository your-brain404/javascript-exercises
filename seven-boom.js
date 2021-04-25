// https://edabit.com/challenge/6R6gReGTGwzpwuffD

let Test = require("./Test.js");

function sevenBoom(arr) {
  return arr.some((num) => num.toString().includes("7"))
    ? "Boom!"
    : "there is no 7 in the array";
}

Test.assertEquals(
  sevenBoom([2, 6, 7, 9, 3]),
  "Boom!",
  'sevenBoom([2, 6, 7, 9, 3]) === "Boom!"'
);
Test.assertEquals(
  sevenBoom([33, 68, 400, 5]),
  "there is no 7 in the array",
  'sevenBoom([33, 68, 400, 5]) === "there is no 7 in the array"'
);
Test.assertEquals(
  sevenBoom([86, 48, 100, 66]),
  "there is no 7 in the array",
  'sevenBoom([86, 48, 100, 66]) === "there is no 7 in the array"'
);
Test.assertEquals(
  sevenBoom([76, 55, 44, 32]),
  "Boom!",
  'sevenBoom([76, 55, 44, 32]) === "Boom!"'
);
Test.assertEquals(
  sevenBoom([35, 4, 9, 37]),
  "Boom!",
  'sevenBoom([35, 4, 9, 37]) === "Boom!"'
);
