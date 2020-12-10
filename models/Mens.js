const mongoose = require('../db/connections')

const Schema = mongoose.Schema

const Mens = new Schema({
    "name": String,
    "brand": String,
    "type": String,
    "price": Number,
    "family": String,
    "notes": [String],
    "image_url": String
})

module.exports = mongoose.model('Mens', Mens)