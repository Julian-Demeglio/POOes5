var Person = function(name, lastName, idn, phone, email) {
    this._name = name;
    this._lastName = lastName;
    this._idn = idn;
    this._phone = phone;
    this._email = email;
  }

  Person.prototype.getName = function() {
    return this._name;
  };
  Person.prototype.setName = function(name) {
    return this._name = name;
  }

  Person.prototype.getLastName = function() {
    return this._lastName;
  };
  Person.prototype.setLastName = function(lastName) {
    return this._lastName = lastName;
  }

  Person.prototype.getIdn = function() {
    return this._idn;
  };
  Person.prototype.setIdn = function(idn) {
    return this._idn = idn;
  }

  Person.prototype.getIdn = function() {
    return this._idn;
  };
  Person.prototype.setIdn = function(idn) {
    return this._idn = idn;
  }

  Person.prototype.getEmail = function() {
    return this._email;
  };
  Person.prototype.setEmail = function(email) {
    return this._email = email;
  }

  module.exports = {Person};