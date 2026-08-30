var crypto = require("crypto");
function rollDice() {
  // crypto.randomInt(min, max) gives a random number, max is not included
  var value = crypto.randomInt(1, 7);
  return value;
}

// Roll the dice 5 times
for (var i = 1; i <= 5; i++) {
  var result = rollDice();
  console.log("Roll " + i + " - Dice Rolled: " + result);
}