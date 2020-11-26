


const express = require('express')

const app = express()

//req res test
app.use((req, res) => {
    res.json({
        message: "server start"
    })
})

const port = 5010

app.listen(port, console.log("Server started"))