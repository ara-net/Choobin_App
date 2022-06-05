const mongoose = require('mongoose');


const storeSchema = mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String },
    unit: { type: String, enum: ['gr', 'm', 'item', 'sheet'] },
    ammount: { type: Number },
    orderPoint: { type: Number },
    price: { type: Number },
    byList: {
        type: [
            mongoose.Schema({
                date: { type: {} },
                ammount: { type: Number },
                price: { type: Number }
            })
        ]
    },
    isDeleted: { type: Boolean, default: false },
    exist: { type: Boolean, default: true }
});

const storeModel = mongoose.model('store', storeSchema);
module.exports = {
    storeModel: storeModel,
    storeSchema: storeSchema
};
