var isEven = require("./modules/isEven");
var logger = require("./modules/logger");
 
logger("Starting app.js");
 
for (var i = 1; i <= 5; i++) {
  if (isEven(i)) {
    console.log(i + " is Even");
  } else {
    console.log(i + " is Odd");
  }
}
 
logger("Finished checking numbers");
 