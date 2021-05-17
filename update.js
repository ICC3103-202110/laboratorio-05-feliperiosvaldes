


function update(input, model){
    const {BillAmount} = input
    const {percentage} = input
    const newTip = BillAmount * percentage / 100
    const newTotal = BillAmount + newTip
    return {
        ...model,
        BillAmount: '$' + BillAmount,
        percentage: percentage + '%',
        total: '$' + newTotal,
        tipValue: '$' + newTip,
    }
}

module.exports = {
    update
}
