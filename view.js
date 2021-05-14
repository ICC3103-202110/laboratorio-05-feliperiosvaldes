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







