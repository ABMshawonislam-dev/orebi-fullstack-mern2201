const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello MERN')
})

app.listen(8000)