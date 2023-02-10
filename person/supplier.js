var { Person } = require ("./person");
var { Shift } = require ("../branch/shift");

var Employee = function (
    name,
    lastName,
    idn,
    phone,
    email,
    bussinessName,
    bussinessEmail,
    products,
    city
    ){
    Person.call(this, name, lastName, idn, phone, email);
    this._bussinessName = bussinessName,
    this._bussinessEmail = bussinessEmail,
    this._products = products,
    this._city = city
}

Supplier.prototype = Object.create(Person.prototype);

Supplier.prototype.getShift = function() {
    return this._bussinessName;
};
Supplier.prototype.setShift = function(bussinessName) {
    return this._bussinessName = bussinessName;
}

Supplier.prototype.getShift = function() {
    return this._bussinessEmail;
};
Supplier.prototype.setShift = function(bussinessEmail) {
    return this._bussinessEmail = bussinessEmail;
}

Supplier.prototype.getShift = function() {
    return this._products;
};
Supplier.prototype.setShift = function(products) {
    return this._products = products;
}

Supplier.prototype.getShift = function() {
    return this._city;
};
Supplier.prototype.setShift = function(city) {
    return this._city = city;
}

module.exports = {Supplier};