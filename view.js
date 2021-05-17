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
    const {counter, porcentage, tip, total} = model
    return [
        {'Bill Amount': counter},
        {'Tip (%)': porcentage},
        {'Tip': tip},
        {'Total': total}
    ]
}

function inputForm(model){
    const {input} = model
    const Bill = 'Bill Amount?'
    const Tip = 'Tip? (%)'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: Bill,
            default: input
        },
        {
            name: 'tip',
            type: 'input',
            message: Tip,
            default: input

        }
    ])
}

function listForm(model){
    const {input} = model
    const message = 'Increase or decrease?'
    const choices = ['+', '-']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
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
    inputForm,
    listForm
}