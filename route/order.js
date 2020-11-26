const express = require('express')
const router = express.Router()

router.get("/od", (req, res) => {
    res.json({
        message: "order get"
    })
})

module.exports = router