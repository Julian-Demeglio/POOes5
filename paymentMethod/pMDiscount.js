var { PaymentMethod } = require ("./paymentMethod");

var PMDiscount = function (type, percent) {
    PaymentMethod.call(this, type);
    this._percent = percent;
}

PMDiscount.prototype = Object.create(PaymentMethod.prototype);

PMDiscount.prototype.getPercent = function() {
    return this._percent;
};

PMDiscount.prototype.setPercent = function(percent) {
    return this._percent = percent;
}

module.exports = {PMDiscount};