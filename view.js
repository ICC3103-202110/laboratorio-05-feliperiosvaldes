const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('./inquirer')

function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Counter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
        const {BillAmount, porcentage, tip, total} = model
        return [
          {'Bill Amount' : BillAmount},
          {'Tip%': porcentage},
          {'Tip': tip}, 
          {"total": total}
        ]

function inputForm(model){
    const {input} = model
    const message = 'Bill Amount?'
    const message_tip = 'Tip'
    return inquirer.prompt([{
      name: 'BillAmount',
      type: 'input',
      message: message,
      default: input
    }, {
      name: 'tip',
      type: 'input',
      message: message_tip,
      default: input

    }
  ])
  }


function view(model){
  return {
    title: getTitle(),
    table: getTable(model)
  }
}

module.exports = {
  view,
  inputForm,
  listForm
}








