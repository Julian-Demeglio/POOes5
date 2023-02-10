var { PaymentMethod } = require ("./paymentMethod/paymentMethod");
var { PMDiscount } = require ("./paymentMethod/pMDiscount");
var { PMInstalment } = require ("./paymentMethod/pMInstalment");

console.log(PaymentMethod())

var pm = new PaymentMethod("DEBITO");
console.log(pm)
var pmDiscount = new PMDiscount("EFECTIVO" , 15);
var pmInstalment = new PMInstalment("CREDITO", 9, 10);

console.log(
  "Metodo de pago: ",
  pm.getType,
);
console.log(
  "Metodo de pago con descuento: ",
  pmDiscount.getType,
  pmDiscount.getPercent,
);
console.log(
  "Metodo de pago en cuotas con intereses: ",
  pmInstalment.getType,
  pmInstalment.getAmount,
  pmDiscount.getInterests,
  );