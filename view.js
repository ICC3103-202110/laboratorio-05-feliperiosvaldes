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
    const {BillAmount, percentage, tip, total} = model
    return [
        {
        'Bill Amount': BillAmount,
        'Tip (%)': percentage,
        'Tip': tip,
        'Total': total
      }
    ]
}

function inputForm(model){
    const {BillAmount} = model
    const {tipValue} = model
    const Bill = 'Bill Amount?'
    const Tip = 'Tip? (%)'
    return inquirer.prompt([
        {
            name: 'BillAmount',
            type: 'number',
            message: Bill,
            default: BillAmount
        },
        {
            name: 'percentage',
            type: 'number',
            message: Tip,
            default: tipValue

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