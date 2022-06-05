const Category = require('../models/category.model')
const express = require('express');
const router = express.Router();
const { Map } = require('../util/utility')
const { Save } = require('../util/GenericMethods')
router.get('/', async (req, res) => {
    let categories = (await Category.find())
        .map(m => {
            return {
                name: m.name,
                code: m.code,
                id: m._id
            }
        });
    res.json(Object.assign(req.base, {
        data: categories
    }))
});
router.route('/')
    .post(async (req, res) => {
        let cat = Category();
        Map(req.body, cat);
        Save(cat, req, res)
    })
    .put(async (req, res) => {
        let category = await Category.findById(req.body.id);
        console.log("category", category)
        Map(req.body, category);
        Save(category, req, res)
    })

module.exports = router;