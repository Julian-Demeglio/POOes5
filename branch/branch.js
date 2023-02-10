var { City } = require ("../location/city");
var { Employee } = require ("../person/employee");
var { Person } = require ("../person/person");
var { Supplier } = require ("../person/supplier");
var { Product } = require ("../product/product");
var { ProductAmount } = require ("../product/pruductAmount");
var { Purchase } = require ("../transactions/purchase");
var { Sale } = require ("../transactions/sale");
var { Inventory } = require ("./inventory");

var shift = ["MAÑANA", "TARDE", "NOCHE"];

var Branch = function (
    address,
    owner,
    employee,
    stock,
    city,
    supplier,
    purchase,
    sale,
    ){
    this._address = address,
    this._owner = owner,
    this._employee = employee,
    this._stock = stock;
    this._city = city;
    this._suppliers = supplier;
    this._purchase = purchase;
    this._sale = sale;
}

Branch.prototype.getAddress = function() {
    return this._address;
};
Branch.prototype.setAddress = function(address) {
    return this._address = address;
}

Branch.prototype.getOwner = function() {
    return this._owner;
};
Branch.prototype.setOwner = function(owner) {
    return this._owner = owner;
}

Branch.prototype.getEmployee = function() {
    return this._employee;
};
Branch.prototype.setEmployee = function(employee) {
    return this._employee = employee;
}

Branch.prototype.getStock = function() {
    return this._stock;
};
Branch.prototype.setStock = function(stock) {
    return this._stock = stock;
}

Branch.prototype.getDate = function() {
    return this._date;
};
Branch.prototype.setCity = function(city) {
    return this._city = city;
}

Branch.prototype.getSupplier = function() {
    return this._suppliers;
};
Branch.prototype.setSupplier = function(supplier) {
    return this._suppliers = supplier;
}

Branch.prototype.getPurchase = function() {
    return this._purchase;
};
Branch.prototype.setPurchase = function(purchase) {
    return this._purchase = purchase;
}

Branch.prototype.getPurchase = function() {
    return this._sale;
};
Branch.prototype.setPurchase = function(sale) {
    return this._sale = sale;
}

module.exports = {Branch};