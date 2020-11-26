const express = require('express')
const router = express.Router()

router.get("/pd", (req, res) => {
    res.json({
        message: "product msg"
    })
})

router.post("/", (req, res) =>{
    res.json({
        msg: "product 등록 API"
    })
})

router.patch("/", (req, res) => {
    res.json({
        msg: "product 수정 api"
    })
})

router.delete("/", (req, res) => {
    res.json({
        msg: "pro 삭제 api"
    })
})



module.exports = router