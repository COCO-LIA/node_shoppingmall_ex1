const express = require('express')
const router = express.Router()

const orderModel = require('../model/order')

//전체 데이터 GET
router.get("/", (req, res) => {
    res.json({
        message: "order get"
    })
})

//등록해주는 API
router.post("/", (req, res) => {
    // res.json({
    //     msg: "post"
    // })

    const orderInfo = new orderModel({
        product: req.body.productId,
        quantity: req.body.qty
    })

    orderInfo
        .save()
        .then(item => {
            res.json({
                msg: "장바구니 담기",
                orderInfo:item
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
    res.json({
        msg: "order 삭제 API"
    })

})


module.exports = router