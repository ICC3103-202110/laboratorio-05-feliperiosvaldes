function newTip(counter, porcentage){
    tip = counter, porcentage / 100
    return tip
}

function newTotal(counter, tip){
    total = counter + tip
    return total
}


function update(input, model){
    const {tip} = model 
    const {porcentage} = model
    const {total} = model
    const newTotal = newTotal()
    const newTip = newTip()
    return {
        ...model,
        total: newTotal,
        tip: newTip,
        input: input
    }
}

module.exports = {
    update
}