const scanItem = (barcode, items) => {
    return items.find(item => {
       return item.barcode === barcode;
    });
}

const addItem = (item, basket) => {
    basket.push(item);
}

const totalPrice = (basket) => {
    return basket.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0);
}

const deleteItem = (barcode, basket) => {
    const index = basket.findIndex(item => item.barcode === barcode);
    if (index > -1) basket.splice(index, 1);
}

const barcode = {
    scanItem: scanItem
}

module.exports = { scanItem, addItem, totalPrice, deleteItem };