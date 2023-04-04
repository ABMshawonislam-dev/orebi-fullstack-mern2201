const mongoose = require('mongoose');

function dbConnection(){
    return mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Database Connected'));
}

module.exports = dbConnection