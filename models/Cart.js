const mongoose = require("../db/connections");

const Schema = mongoose.Schema;

const Cart = new Schema({
  "perfume": String,
  "status": Boolean,
});

module.exports = mongoose.model("Cart", Cart);