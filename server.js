


const express = require('express')

const bodyParser = require('body-parser')
const app = express()

// //req res test
// app.use((req, res) => {
//     res.json({
//         message: "server start"
//     })
// })

const productRoute = require('./route/product')
const orderRoute = require('./route/order')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/pproduct", productRoute)
app.use("/oorder", orderRoute)

const port = 5010

app.listen(port, console.log("Server started"))