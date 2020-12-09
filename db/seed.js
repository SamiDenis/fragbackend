const Mens = require("../models/Mens");
const mensData = require("../db/mens.json");
const Womens = require("../models/Womens");
const womensData = require("../db/womens.json");
const Cart = require("../models/Cart")
const cartData = require("../db/cart.json")


Mens.deleteMany({}).then(() => {
    Mens.create(mensData).then(() => {
        Mens.find({})
            .then((data) =>
                console.log(data))
    })
        .catch((err) => {
            console.log(err)
        })
})


Womens.deleteMany({}).then(() => {
    Womens.create(womensData).then(() => {
        Womens.find({})
            .then((data) =>
                console.log(data))
    })
        .catch((err) => {
            console.log(err)
        })
})


Cart.deleteMany({}).then(() => {
    Cart.create(cartData).then(() => {
        Cart.find({})
            .then((data) =>
                console.log(data))
    })
        .catch((err) => {
            console.log(err)
        })
})