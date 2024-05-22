
const mongoose = require('mongoose');
require('dotenv').config()

const URI = process.env.URI;

const dbConnection = async () => {
    await mongoose.connect(URI);
}

module.exports = dbConnection;