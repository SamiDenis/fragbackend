const mongoose = require('../db/connections')

const Schema = mongoose.Schema

const Womens = new Schema({
    "name": String,
    "brand": String,
    "type": String,
    "price": Number,
    "family": String,
    "notes": [String]
})

module.exports = mongoose.model('Womens', Womens)