const express = require('express')
const router = express.Router()

router.get("/od", (req, res) => {
    res.json({
        message: "order get"
    })
})

router.post("/", (req, res) => {

    const orderInfo = {
        name: req.body.productname,
        price: req.body.productprice,
        category: req.body.category
    }


    res.json({
        msg: "order 등록 API",
        order: orderInfo
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