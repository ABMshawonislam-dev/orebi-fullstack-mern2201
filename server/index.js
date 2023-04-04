require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection = require("./config/dbConfig.js")
const routes = require("./routes")


// Database Connection
dbConnection()

// middleware
app.use(express.json())
app.use(routes)

app.listen(8000)