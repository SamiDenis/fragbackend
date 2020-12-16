const mongoose = require("../db/connections");

const Schema = mongoose.Schema;

const Cart = new Schema({
  "name": String,
  "price": String,
  "image_url": String,
});

module.exports = mongoose.model("Cart", Cart);