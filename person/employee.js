var { Person } = require ("./person");
var { Shift } = require ("../branch/shift");

var Employee = function (name, lastName, idn, phone, email, shift) {
    Person.call(this, name, lastName, idn, phone, email);
    this._shift = shift;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getShift = function() {
    return this._shift;
};

Employee.prototype.setShift = function(shift) {
    return this._shift = shift;
}

module.exports = {Employee};