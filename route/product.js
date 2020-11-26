const express = require('express')
const router = express.Router()

router.get("/pd", (req, res) => {
    res.json({
        message: "product msg"
    })
})

module.exports = router