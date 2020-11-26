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
                order: docs.map(doc => {
                    return {
                        id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        category: doc.category,
                        request: {
                            type: 'GET',
                            url: "http://localhosst:5010/oorder/" + doc._id
                        }
                    }
                })
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
                order: {
                    id: item._id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    reqest: {
                        type: 'GET',
                        url: "http://localhost:5010/oorder/od"
                    }
                }
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
                orderInfo: {
                    id : item._id,
                    name : item.name,
                    price : item.price,
                    category: item.category,
                    request: {
                        type: 'GET',
                        url: "http://localhost:5010/oorder/" + item._id
                    }
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})

router.patch("/:orderId", (req, res) => {
    // res.json({
    //     msg: "order 수정 API"
    // })
    const updateOps = {}

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }

    orderModel
        .findByIdAndUpdate(req.params.orderId, { $set: updateOps })
        .then(() => {
            res.json({
                msg: "updated order" + req.params.orderId,
                request: {
                    type: 'GET',
                    url: "http://localhost:5010/oorder/" + req.params.orderId
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
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
                msg: "deleted All",
                request: {
                    type: 'GET',
                    url: "http://localhost:5010/oorder/od"
                }
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
                msg: "deleted order",
                request:{
                    type: 'GET',
                    url: "http://localhost:5010/oorder/od"
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })
})


module.exports = router