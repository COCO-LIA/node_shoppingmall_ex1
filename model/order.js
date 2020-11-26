const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: Number,
    category: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("order1", orderSchema)