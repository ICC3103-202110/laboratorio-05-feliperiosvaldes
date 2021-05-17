const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {BillAmount, percentage, tipValue, total} = model
    return [
        {
        'Bill Amount': BillAmount,
        'Tip (%)': percentage,
        'Tip': tipValue,
        'Total': total
      }
    ]
}
function inputForm(model){
    const {BillAmount} = model
    const {percentage} = model
    const Bill = 'Bill Amount?'
    const Tip = 'Tip? (%)'
    return inquirer.prompt([
        {
            name: 'BillAmount',
            type: 'number',
            message: Bill,
            default: BillAmount,
            validate: function(value){
              if (value >= 0){
                return true
              }
              else{
                return 'enter a positive number'
              }
            }
        },
        {
            name: 'percentage',
            type: 'number',
            message: Tip,
            default: percentage,
            validate: function(value){
              if (value >= 0){
                return true
              }
              else{
                return 'enter a positive number'
              }
            }
        }
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
  
}