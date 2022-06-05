const mongoose = require('mongoose');
const { storeSchema } = require('./store.model')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, unique: true },
    category: { type: String },
    resinAmmount: { type: Number },
    hardness: { type: Number },
    materials: [storeSchema],
    isDeleted: { type: Boolean, default: false }
});

const productModel = mongoose.model('product', productSchema);
module.exports = {
    productModel: productModel,
    productSchema: productSchema
};
