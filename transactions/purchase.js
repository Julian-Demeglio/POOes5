var { ProductAmount } = require ("../product/pruductAmount");
var { Supplier } = require ("../person/supplier");
var { PaymentMethod } = require ("../paymentMethod/paymentMethod");
var { Product } = require ("../product/product");

var Purchase = function (
    singlePurchases,
    supplier,
    paymentMethod,
    date
    ){
    this._singlePurchases = singlePurchases;
    this._supplier = supplier
    this._paymentMethod = paymentMethod;
    this._date = date;
}

Purchase.prototype.getSinglePurchases = function() {
    return this._singlePurchases;
};
Purchase.prototype.setSinglePurchases = function(singlePurchases) {
    return this._singlePurchases = singlePurchases;
}

Purchase.prototype.getSupplier = function() {
    return this._supplier;
};
Purchase.prototype.setSupplier = function(supplier) {
    return this._supplier = supplier;
}

Purchase.prototype.getPaymentMethod = function() {
    return this._paymentMethod;
};
Purchase.prototype.setPaymentMethod = function(paymentMethod) {
    return this._paymentMethod = paymentMethod;
}

Purchase.prototype.getDate = function() {
    return this._date;
};
Purchase.prototype.setDate = function(date) {
    return this._date = date;
}

module.exports = {Purchase};