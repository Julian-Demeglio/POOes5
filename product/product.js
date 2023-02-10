var category = [
"GOLOSINAS",
"GASEOSAS",
"BENIDAS ALCOHOLICAS",
"LIMPIEZA",
"CIGARRILLOS",
"COMESTIBLES",
]

var Product = function (
    id,
    name,
    category,
    brand,
    presentation,
    price,
    notes,
    ){
        this._id = id;
        this._name = name;
        this._category = category;
        this._brand = brand;
        this._presentation = presentation;
        this._price = price;
        this._notes = notes;
}

Product.prototype.getId = function() {
    return this._id;
};

Product.prototype.getSupplier = function() {
    return this._name;
};
Product.prototype.setSupplier = function(name) {
    return this._name = name;
}

Product.prototype.getPaymentMethod = function() {
    return this._category;
};
Product.prototype.setPaymentMethod = function(category) {
    return this._category = category;
}

Product.prototype.getDate = function() {
    return this._brand;
};
Product.prototype.setDate = function(brand) {
    return this._brand = brand;
}

Product.prototype.getDate = function() {
    return this._presentation;
};
Product.prototype.setDate = function(presentation) {
    return this._presentation = presentation;
}

Product.prototype.getDate = function() {
    return this._price;
};
Product.prototype.setDate = function(price) {
    return this._price = price;
}

Product.prototype.getDate = function() {
    return this._notes;
};
Product.prototype.setDate = function(notes) {
    return this._notes = notes;
}

module.exports = {Product};