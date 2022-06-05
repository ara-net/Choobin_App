const Category = require('../models/category.model');
const { productModel } = require('../models/product.model');
const { storeModel } = require('../models/store.model')
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')
const { Save, GetAll } = require('../util/GenericMethods')

router.get('/:category?', async (req, res) => {
    let condition = req.params.category? JSON.parse(req.params.category):{};
    console.log("cat", condition)
    let resin = await storeModel.findOne({ 'code': 'RESIN_WATERY' })
    let products = (await productModel.find(condition))
        .map(p => {
            return {
                id: p._id,
                name: p.name,
                code: p.code,
                category: p.category,
                resinAmmount: p.resinAmmount,
                hardness: p.hardness,
                price: (p.resinAmmount * resin.price) * p.hardness
            }
        })

    res.json(Object.assign(req.base, {
        result: products.length > 0,
        data: products
    }))
});
router.route('/')
    .post(async (req, res) => {
        let cat = await Category.findOne({ 'name': req.body.category })
        var regexp = new RegExp("^" + cat.code);
        let lastCode = (await productModel
            .findOne({ 'category': req.body.category, code: regexp })
            .sort({ '_id': -1 }));

        let prod = productModel();
        Map(req.body, prod);
        if (!prod.code)
            prod.code = lastCode ? parseInt(lastCode.code) + 1 : cat.code + '00';
        Save(prod, req, res)
    })
    .put(async (req, res) => {
        let product = await productModel.findById(req.body.id);
        Map(req.body, product)
        Save(product, req, res);
    })

module.exports = router;