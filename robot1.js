// https://edabit.com/challenge/t3iJRARc9K9x9AAdr

let Test = require("./Test.js");

function trackRobot(instructions) {
  let coordinates = [0, 0];

  instructions.forEach((info) => {
    let direction = info.split(" ")[0];
    let steps = Number(info.split(" ")[1]);

    if (direction === "right") coordinates[0] += steps;
    if (direction === "left") coordinates[0] -= steps;
    if (direction === "up") coordinates[1] += steps;
    if (direction === "down") coordinates[1] -= steps;
  });

  return coordinates;
}

Test.assertArrays(
  trackRobot(["right 10", "up 50", "left 30", "down 10"]),
  [-20, 40],
  '1. trackRobot(["right 10", "up 50", "left 30", "down 10"]) === [-20,40]'
);
Test.assertArrays(trackRobot([]), [0, 0], "2. trackRobot([]) === [0, 0]");
Test.assertArrays(
  trackRobot(["left 10", "left 100", "left 1000", "left 10000"]),
  [-11110, 0],
  '3. trackRobot(["left 10", "left 100", "left 1000", "left 10000"]) === [-11110, 0]'
);
Test.assertArrays(
  trackRobot(["right 100", "right 100", "up 500", "up 10000"]),
  [200, 10500],
  '4. trackRobot(["right 100", "right 100", "up 500", "up 10000"]) === [200, 10500]'
);
Test.assertArrays(
  trackRobot(["left 10", "right 10", "down 10", "up 10"]),
  [0, 0],
  '5. trackRobot(["left 10", "right 10", "down 10", "up 10"]) === [0, 0,]'
);
