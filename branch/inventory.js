var { ProductAmount } = require ("../product/pruductAmount");

var Inventory = function (stock){
    this._stock = stock;
}

Inventory.prototype.getStock = function() {
    return this._stock;
};
Inventory.prototype.setStock = function(stock) {
    return this._stock = stock;
}

module.exports = {Inventory};