var args = process.argv;

var operation = args[2];
var num1 = Number(args[3]);
var num2 = Number(args[4]);

var result;
 
if (operation === "add") {
  result = num1 + num2;
} else if (operation === "sub") {
  result = num1 - num2;
} else if (operation === "mul") {
  result = num1 * num2;
} else if (operation === "div") {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero");
    result = undefined;
  } else {
    result = num1 / num2;
  }
} else {
  console.log("Invalid operation! Use add, sub, mul or div");
  result = undefined;
}
if (result !== undefined) {
  console.log("Result:", result);
}