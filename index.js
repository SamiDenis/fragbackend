const express = require("express");
const router = express();
const Mens = require("./models/Mens");
const Womens = require("./models/Womens");
const Cart = require("./models/Cart");

const body = require("body-parser");
const cors = require("cors");




router.use(body.json());

router.use(cors());


router.get("/Mens", (req, res) =>{
    Mens.find({}).then(data => {
        res.json(data)
    })
})

router.get("/Womens", (req, res) =>{
    Womens.find({}).then(data => {
        res.json(data)
    })
})

router.get("/Mens/Womens", (req, res) =>{
    Womens.find({}).then(data => {
        res.json(data)
    })
})

router.get("/Mens/Cart", (req, res) =>{
    Cart.find(req.body).then((data) => {
        res.json(data)
    })
})


router.post("/Mens/Cart", (req, res) =>{
    Cart.create(req.body).then((data) => {
        res.json(data)
    })
})

router.get("/Mens/Cart/:id", (req, res) => {
    Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})

router.put("/Mens/Cart/:id", (req, res) => {
    Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})

router.delete("/Mens/Cart/:id", (req, res) => {
    Cart.findOneAndDelete({ _id: req.params.id }, req.body)
    .then(data => {
        res.json(data)
    })
})




router.set("port", process.env.PORT || 9080);

router.listen(router.get("port"), () => console.log("We're here! OVER 9080 BABY !..."));