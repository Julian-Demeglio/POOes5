var allPaymentMethods = [
  "EFECTIVO",
  "DEBITO",
  "CREDITO",
  "BILLETERA STA FE",
  "TRANSFERENCIA BANCARIA"
]


var PaymentMethod = function(type) {
  this._type = type;
}
PaymentMethod.prototype.getType = function() {
  return this._type;
};

PaymentMethods.prototype.setType = function (type) {
  for (var i = 0; i < allPaymentMethods.length; i++) {
    if (type === allPaymentMethods[i]) {
      return (this.type = type);
    }
  }
};

module.exports = {PaymentMethod};