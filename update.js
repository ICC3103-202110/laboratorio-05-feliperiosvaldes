var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Bill Amount ", function(answer) {
  console.log("Thank you for your valuable feedback:", answer);
});

bill_amount = 273
tip = 15
tip2 = bill_amount*tip/100
console.log(tip2)

