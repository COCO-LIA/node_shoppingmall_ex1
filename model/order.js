const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name : String,
    price: Number,
    category: String
})

module.exports = mongoose.model("order1", orderSchema)