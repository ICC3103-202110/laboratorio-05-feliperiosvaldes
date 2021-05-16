const figlet = require('figlet')
const chalk = require('chalk')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Counter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}
module.exports = {
    getTitle
}