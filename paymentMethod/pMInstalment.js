var { PaymentMethod } = require ("./paymentMethod");

var PMInstalment = function (type, amount, interests) {
    PaymentMethod.call(this, type);
    this._amount = amount;
    this._interests = interests;
}

PMInstalment.prototype = Object.create(PaymentMethod.prototype);

PMInstalment.prototype.getAmount = function() {
    return this._amount;
};

PMInstalment.prototype.setAmount = function(amount) {
    return this._amount = amount;
}

PMInstalment.prototype.getInterests = function() {
    return this._interests;
};

PMInstalment.prototype.setInterests = function(interests) {
    return this._interests = interests;
}

module.exports = {PMInstalment};
