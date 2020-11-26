const express = require('express')
const router = express.Router()

const orderModel = require('../model/order')

//전체 데이터 GET
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

//상세 데이터 GET
router.get("/:orderId", (req, res) => {
    orderModel
        .findById(req.params.orderId)
        .then(item => {
            res.json({
                msg: "get order data" + item._id,
                order: item
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

//전체 삭제
router.delete("/", (req, res) =>{
    // res.json({
    //     msg: "order 삭제 API"
    // })

    orderModel
        .deleteMany()
        .then(() => {
            res.json({
                msg: "deleted All"
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})

//부분 삭제
router.delete("/:orderId", (req, res) => {
    orderModel
        .findByIdAndDelete(req.params.orderId)
        .then(() => {
            res.json({
                msg: "deleted order"
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})


module.exports = router