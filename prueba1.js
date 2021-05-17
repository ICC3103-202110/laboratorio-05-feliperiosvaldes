var figlet = require('figlet');
const chalk = require('chalk');

figlet('TIP  CALCULATOR  APP', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

const { Table } = require('console-table-printer');
//Create a table
const p = new Table();

p.addRows([
  { "Bill Amount": 3, "Tip(%)": 'gelb bananen bitte', Tip: 100, Total: 100 }
]);
p.printTable();

---------------------------------

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





