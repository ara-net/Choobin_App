const mongoose = require('../bootstrap/mongodb');
const { customerSchema } = require('./customer.model');

let itemsSchema = mongoose.Schema({
    name: { type: String },
    code: { type: String },
    netPrice: { type: Number, require: true },
    price: { type: Number, require: true },
    discount: { type: Number, require: true },
    discountType: { type: String, default: 'percent', enum: ['percent', 'price'] },
    grossPrice: { type: Number, require: true },
    totallDiscount: { type: Number, default: 0 },
    qty: { type: Number, default: 1 }
});

let invoiceSchema = mongoose.Schema({
    orderNumber: { type: String },
    items: [itemsSchema],
    customer: customerSchema,
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    totalQty: { type: Number },
    status: { type: String, default: 'pend', enum: ['pend', 'paid', 'sent'] },
    sendData: { type: {} }, //Date,TrackingCode,Price
    payment: { type: {} }, //Date, TrackingCode
    createDate: { type: Date, require: true, default: Date.now() },
    creator: { type: String, default: 'admin' }
});



let invoiceModel = mongoose.model('invoice', invoiceSchema);

module.exports = invoiceModel;