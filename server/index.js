require("dotenv").config();

const express = require("express");
const app = express();
const dbConnection = require("./config/dbConfig.js");
const routes = require("./routes");
var cors = require("cors");

// Database Connection
dbConnection();

// middleware
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8000);
