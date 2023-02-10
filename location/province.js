var { City } = require ("./city");

var Province = function (name, cities) {
    this._name= name;
    this._cities= cities;
}

Province.prototype.getName = function() {
    return this._name;
};
Province.prototype.setName = function(name) {
    return this._name = name;
}

Province.prototype.getCities = function() {
    return this._cities;
};
Province.prototype.setCities = function(cities) {
    return this._cities = cities;
}

module.exports = {Province};