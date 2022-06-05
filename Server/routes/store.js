const { storeModel } = require('../models/store.model')
const { Map } = require('../util/utility')
const express = require('express');
const router = express.Router();
const { Save, GetAll } = require('../util/GenericMethods')

router.route('/')
    .get(async (req, res) => {
        GetAll(storeModel, req, res)
    })
    .post(async (req, res) => {
        let good = storeModel();
        Map(req.body, good)
        console.log("good", good)
        console.log("req.body", req.body)
        good.byList = [
            {
                "ammount": good.ammount,
                "price": good.price
            }
        ]
        Save(good, req, res)
    })
    .put(async (req, res) => {
        let good = await storeModel.findById(req.body.id);
        Map(req.body, good)
        Save(good, req, res)
    })

router.put('/by', async (req, res) => {
    let id = req.body.id;
    let good = await storeModel.findOne({ _id: id });
    if (good.price < req.body.price)
        good.price += req.body.price;
    good.ammount = good.ammount + req.body.ammount;
    good.byList.push({
        ammount: req.body.ammount,
        price: req.body.price,
        date: req.body.date
    })
    Save(good, req, res)
})

module.exports = router;