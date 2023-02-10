var { ProductAmount } = require ("../product/pruductAmount");
var { PaymentMethod } = require ("../paymentMethod/paymentMethod");
var { Product } = require ("../product/product");

var Sale = function (
    singleSale,
    paymentMethod,
    date
    ){
        this._allItems = singleSale;
        this._paymentMethod = paymentMethod;
        this._date = date;
}

Sale.prototype.getSingleSales = function() {
    return this._singleSales;
};
Sale.prototype.setSingleSales = function(singleSales) {
    return this._singleSales = singleSales;
}

Sale.prototype.getPaymentMethod = function() {
    return this._paymentMethod;
};
Sale.prototype.setPaymentMethod = function(paymentMethod) {
    return this._paymentMethod = paymentMethod;
}

Sale.prototype.getDate = function() {
    return this._date;
};
Sale.prototype.setDate = function(date) {
    return this._date = date;
}

function addSingleItem(prod) {
    for (var i=0; i< this._allItems.length; i++) {
        if (prod.id === this._allItems[i].id) {
            this._allItems[i].amount++;
        }
    }
}

module.exports = {Sale};