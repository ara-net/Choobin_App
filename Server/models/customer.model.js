const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'] },
    address: { type: String },
    postalCode: { type: String },
    phone: { type: String },
    mobile: { type: String }
});
customerSchema.path('postalCode').validate(function (code) {
    return code && code.length === 10;
}, 'Postal code must be 10 characters');

const customerModel = mongoose.model('customer', customerSchema);
module.exports = {
    customerModel: customerModel,
    customerSchema: customerSchema
}

