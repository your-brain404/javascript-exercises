// https://edabit.com/challenge/3ZtykTsx3GSoPHyBb

let Test = require("./Test.js");

function towerHanoi(discs) {
  if (discs === 0) return 0;
  let towers = [[], [], []];
  let direction = discs % 2 === 0 ? 1 : -1;
  for (let i = discs - 1; i >= 0; i--) {
    towers[0].push(i);
  }
  let steps = 0;
  let smallestDiscTower = 0;
  let loop = true;

  while (loop) {
    let smallestDisc = towers[smallestDiscTower].pop();
    smallestDiscTower += direction;
    if (smallestDiscTower > towers.length - 1) smallestDiscTower = 0;
    else if (smallestDiscTower < 0) smallestDiscTower = 2;

    towers[smallestDiscTower].push(smallestDisc);
    steps++;

    if (towers[2].length === discs) break;

    let topDiscsValues = [];

    for (let i = 0; i < towers.length; i++) {
      let towerLength = towers[i].length;
      if (towerLength === 0 || towers[i][towerLength - 1] === 0)
        topDiscsValues.push(discs);
      else topDiscsValues.push(towers[i][towerLength - 1]);
    }
    let secondSmallestDiscTower = topDiscsValues.indexOf(
      Math.min(...topDiscsValues)
    );

    let disc = towers[secondSmallestDiscTower].pop();
    for (let i = 0; i < towers.length; i++) {
      if (i === smallestDiscTower || i === secondSmallestDiscTower) continue;
      else towers[i].push(disc);
    }
    steps++;
  }

  return steps;
}

Test.assertEquals(towerHanoi(3), 7, "towerHanoi(3) === 7");
Test.assertEquals(towerHanoi(5), 31, "towerHanoi(5) === 31");
Test.assertEquals(towerHanoi(8), 255, "towerHanoi(8) === 255");
Test.assertEquals(towerHanoi(19), 524287, "towerHanoi(19) === 524287");
Test.assertEquals(towerHanoi(9), 511, "towerHanoi(9) === 511");
Test.assertEquals(towerHanoi(13), 8191, "towerHanoi(13) === 8191");
Test.assertEquals(towerHanoi(0), 0, "towerHanoi(0) === 0");
