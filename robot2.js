//https://edabit.com/challenge/jfpfpH6w42tZeRo2T

let Test = require("./Test.js");

function trackRobot(...steps) {
  let degrees = 0;
  let coordinates = [0, 0];
  for (let i = 0; i < steps.length; i++) {
    if (degrees === 0) coordinates[1] += steps[i];
    if (degrees === 90) coordinates[0] += steps[i];
    if (degrees === 180) coordinates[1] -= steps[i];
    if (degrees === 270) coordinates[0] -= steps[i];
    degrees += 90;
    if (degrees === 360) degrees = 0;
  }

  return coordinates;
}

Test.assertArrays(
  trackRobot(20, 30, 10, 40),
  [-10, 10],
  "1. trackRobot(20, 30, 10, 40) == [-10, 10]"
);
Test.assertArrays(
  trackRobot(10, -10, -10, 10),
  [-20, 20],
  "2. trackRobot(10, -10, -10, 10) == [-20, 20]"
);
Test.assertArrays(trackRobot(), [0, 0], "3. trackRobot() == [0, 0]");
Test.assertArrays(
  trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  [6, 5],
  "4. trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) == [6, 5]"
);
Test.assertArrays(
  trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0),
  [0, 3],
  "5. trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0) == [0, 3]"
);
Test.assertArrays(
  trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5),
  [3, 0],
  "6. trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5) == [3, 0]"
);
