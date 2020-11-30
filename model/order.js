const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    product: {
        type:mongoose.Schema.Types.ObjectID,
        ref: 'product',
        required: true
    },
    quantity:{
        type:Number,
        default: 1
    }

})

module.exports = mongoose.model("order1", orderSchema)