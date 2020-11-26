const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : String,
    price : Number,
    category: String
})

module.exports = mongoose.model("product1", productSchema)