// https://edabit.com/challenge/ttuBGpGu7w4Ec3spT

let Test = require("../Test.js");

function convertToNumber(obj) {
  return Object.entries(obj).reduce((total, pair) => {
    total[pair[0]] = parseInt(pair[1]);
    return total;
  }, {});
}

const res = convertToNumber({ piano: "200", tv: "100", stereo: "400" });
const control = () => {
  let isNum = true;
  for (let item in res) {
    if (typeof res[item] !== "number") return false;
    if (isNaN(res[item])) return false;
  }
  return isNum;
};
Test.assertEquals(control(), true);
Test.assertObjects(
  convertToNumber({ piano: "200", tv: "300", stereo: "400" }),
  { piano: 200, tv: 300, stereo: 400 }
);
Test.assertObjects(convertToNumber({ piano: "200", tv: "300" }), {
  piano: 200,
  tv: 300,
});
Test.assertObjects(convertToNumber({ piano: "200" }), { piano: 200 });
