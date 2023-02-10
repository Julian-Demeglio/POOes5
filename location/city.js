var City = function (name, postalCode) {
    this._name= name;
    this._postalCode= postalCode;
}

City.prototype.getName = function() {
    return this._name;
};
City.prototype.setName = function(name) {
    return this._name = name;
}

City.prototype.getLastName = function() {
    return this._postalCode;
};
City.prototype.setLastName = function(postalCode) {
    return this._postalCode = postalCode;
}

module.exports = {City};