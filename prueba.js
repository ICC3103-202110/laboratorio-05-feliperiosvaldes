const chalk = require("chalk");
const figlet = require("figlet")

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

module.exports{
    getTitle
}