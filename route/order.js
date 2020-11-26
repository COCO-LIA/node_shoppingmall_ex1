const express = require('express')
const router = express.Router()

const orderModel = require('../model/order')

router.get("/od", (req, res) => {
    // res.json({
    //     message: "order get"
    // })

    orderModel
        .find()
        .then(docs => {
            res.json({
                msg: "total get",
                count: docs.length,
                order: docs
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})

router.post("/", (req, res) => {
    //
    // const orderInfo = {
    //     name: req.body.productname,
    //     price: req.body.productprice,
    //     category: req.body.category
    // }
    //
    //
    // res.json({
    //     msg: "order 등록 API",
    //     order: orderInfo
    // })

    const orderInfo = new orderModel({
        name: req.body.ordername,
        price: req.body.orderprice,
        category: req.body.category
    })

    orderInfo
        .save()
        .then(item => {
            res.json({
                msg: "saved",
                orderInfo: item
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})

router.patch("/", (req, res) => {
    res.json({
        msg: "order 수정 API"
    })
})

router.delete("/", (req, res) =>{
    res.json({
        msg: "order 삭제 API"
    })
})

module.exports = router