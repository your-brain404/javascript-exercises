// https://edabit.com/challenge/67z9Tzvadgxb5pDmS

let Test = require("../Test.js");

function sumOfHoles(n) {
  let subject = "";
  for (let i = 1; i <= n; i++) subject += i;
  return (
    (subject.match(/[0469]/g)?.length ?? 0) +
    (subject.match(/8/g)?.length ?? 0) * 2
  );
}

Test.assertEquals(sumOfHoles(1), 0);
Test.assertEquals(sumOfHoles(4), 1);
Test.assertEquals(sumOfHoles(6), 2);
Test.assertEquals(sumOfHoles(8), 4);
Test.assertEquals(sumOfHoles(9), 5);
Test.assertEquals(sumOfHoles(10), 6);
Test.assertEquals(sumOfHoles(88), 90);
Test.assertEquals(sumOfHoles(10000), 22893);
Test.assertEquals(sumOfHoles(12345), 27991);
