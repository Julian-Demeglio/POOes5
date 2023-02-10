var { Product } = require ("./product");

var ProductAmount = function (
    id,
    name,
    category,
    brand,
    presentation,
    price,
    notes,
    amount) {
    Product.call(
        this,
        id,
        name,
        category,
        brand,
        presentation,
        price,
        notes);
    this._amount = amount;
}

ProductAmount.prototype = Object.create(Product.prototype);

ProductAmount.prototype.getAmount = function() {
    return this._amount;
};

ProductAmount.prototype.setAmount = function(amount) {
    return this._amount = amount;
}

module.exports = {ProductAmount};