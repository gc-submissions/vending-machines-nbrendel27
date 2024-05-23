

const formatCurrency = (amount) => {
    

    // amount = amount/100;

    if(amount >= 0) {
        amount = Math.ceil(amount*100)/100;
        return "$" + amount.toFixed(2);
    }else {
        amount = Math.floor(amount*100)/100;
        return "-$" + Math.abs(amount).toFixed(2);
    }
}

const getCoins = (cents) => {
    const ret = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
      }
    while(cents !== 0) {
        if(cents >= 25) {
            ret["quarters"]++;
            cents -= 25;
        } else if(cents >= 10) {
            ret["dimes"]++;
            cents -= 10;
        } else if(cents >= 5) {
            ret["nickels"]++;
            cents -= 5;
        } else {
            ret["pennies"]++;
            cents -= 1;
        }
    }
    return ret;
}

module.exports = { formatCurrency, getCoins }