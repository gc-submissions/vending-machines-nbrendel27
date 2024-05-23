const calculateChange = (total, payment) => {
    if(payment >= total) {
        return payment - total;
    }else {
        return `Insufficient funds: $${Math.abs(total-payment).toFixed(2)} due.`
    }
}

const isSufficientPayment = (total, payment) => {
    return total <= payment;
}

const calculateTotal = (items) => {
    return parseFloat(items.reduce((sum, item) => sum+=item.price, 0).toFixed(2));
}

const addItem = (itemsArray, name, price) => {
    const newItem = {name, price};
    itemsArray.push(newItem);
}

const removeItem = (itemsArray, index) => {
    itemsArray.splice(index, 1);
}


module.exports = { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem };