const express = require('express')
const router = express.Router()

const productModel = require('../model/product')

router.get("/pd", (req, res) => {
    // res.json({
    //     message: "product msg"
    // })
    productModel
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
                            url: "http://localhosst:5010/pproduct/" + doc._id
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

router.get("/:productId", (req, res) => {
    productModel
        .findById(req.params.productId)
        .then(item => {
            res.json({
                msg: "get product data" + item._id,
                order: {
                    id: item._id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    reqest: {
                        type: 'GET',
                        url: "http://localhost:5010/pproduct/pd"
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

router.post("/", (req, res) =>{
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

    const productInfo = new productModel({
        name: req.body.productname,
        price: req.body.productprice,
        category: req.body.category
    })

    productInfo
        .save()
        .then(item => {
            res.json({
                msg: "saved",
                productInfo: {
                    id : item._id,
                    name : item.name,
                    price : item.price,
                    category: item.category,
                    request: {
                        type: 'GET',
                        url: "http://localhost:5010/pproduct/" + item._id
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

router.patch("/", (req, res) => {
    // res.json({
    //     msg: "product 수정 api"
    // })
    const updateOps = {}

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }

    productModel
        .findByIdAndUpdate(req.params.productId, { $set: updateOps })
        .then(() => {
            res.json({
                msg: "updated product" + req.params.productId,
                request: {
                    type: 'GET',
                    url: "http://localhost:5010/pproduct/" + req.params.productId
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })

})

router.delete("/", (req, res) => {
    // res.json({
    //     msg: "pro 삭제 api"
    // })

    productModelModel
        .deleteMany()
        .then(() => {
            res.json({
                msg: "deleted All",
                request: {
                    type: 'GET',
                    url: "http://localhost:5010/pproduct/pd"
                }
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })

})

router.delete("/:productId", (req, res) => {
    productModel
        .findByIdAndDelete(req.params.productId)
        .then(() => {
            res.json({
                msg: "deleted product",
                request:{
                    type: 'GET',
                    url: "http://localhost:5010/pproduct/pd"
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