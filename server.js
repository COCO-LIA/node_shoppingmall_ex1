


const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

// //req res test
// app.use((req, res) => {
//     res.json({
//         message: "server start"
//     })
// })

//DB connect
const dbAddress = "mongodb+srv://admin:qwer@cluster0.huxry.mongodb.net/nodeshop1?retryWrites=true&w=majority"

mongoose
    .connect(dbAddress)
    .then(() => console.log("DB 연결 성공 "))
    .catch(err => console.log("+++++++++++++", err.message))


const productRoute = require('./route/product')
const orderRoute = require('./route/order')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/pproduct", productRoute)
app.use("/oorder", orderRoute)

const port = 5010

app.listen(port, console.log("Server started"))