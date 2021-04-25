// https://edabit.com/challenge/WRB33HsHBFDEfx4EA

let Test = require("./Test.js");

function trackRobot(steps) {
  let coordinates = [0, 0];
  let direction = 90;

  steps.split("").forEach((step) => {
    if (step === ".") {
      if (direction / 90 === 0) coordinates[1]++;
      else if (direction / 90 === 1 || direction / 90 === -3) coordinates[0]++;
      else if (direction / 90 === 2 || direction / 90 === -2) coordinates[1]--;
      else if (direction / 90 === 3 || direction / 90 === -1) coordinates[0]--;
    } else if (step === ">") direction += 90;
    else if (step === "<") direction -= 90;

    if (Math.abs(direction) === 360) direction = 0;
  });
  return coordinates;
}
Test.assertArrays(
  trackRobot("..<.<."),
  [1, 1],
  'trackRobot("..<.<.") === [ 1, 1 ]'
);
Test.assertArrays(
  trackRobot(".".repeat(100)),
  [100, 0],
  'trackRobot(".".repeat(100)) === [100,0]'
);
Test.assertArrays(
  trackRobot("<>>>><><<<><>>>><><<<><>>><>"),
  [0, 0],
  'trackRobot("<>>>><><<<><>>>><><<<><>>><>") === [ 0, 0 ]'
);
Test.assertArrays(
  trackRobot(".<..<...<....<.....<......"),
  [3, 4],
  'trackRobot(".<..<...<....<.....<......") === [ 3, 4 ]'
);
Test.assertArrays(
  trackRobot(">>.."),
  [-2, 0],
  'trackRobot(">>..") === [ -2, 0 ]'
);
Test.assertArrays(
  trackRobot("..<<..>>..<<..>>.."),
  [2, 0],
  'trackRobot("..<<..>>..<<..>>..") === [ 2, 0 ]'
);
Test.assertArrays(
  trackRobot(".>".repeat(5000)),
  [0, 0],
  'trackRobot(".>".repeat(5000)) === [ 0, 0 ]'
);
