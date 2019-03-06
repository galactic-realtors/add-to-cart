"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var compression = require("compression");
var cors = require("cors");
var bodyParser = require("body-parser");
var db = require("../database/index.knex");
var app = express();
var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../dist"));
app.use(cors());
app.use(compression());
app.get("*.js", function callback(req, res, next) {
    req.url += ".gz";
    res.set("Content-Encoding", "gzip");
    next();
});
app.get("/api/product/:id", function (req, res) {
    var reqId = req.params.id;
    db("prices")
        .select()
        .where("id", reqId)
        .then(function (data) {
        res.json(data);
    })
        .catch(function (err) {
        res.end();
    });
});
app.post("/api/product/", function (req, res) {
    var _a = req.body, product_name = _a.product_name, price = _a.price;
    var payload = {
        product_name: product_name,
        price: price
    };
    db("prices")
        .insert(payload)
        .returning(["id", "product_name", "price"])
        .then(function (data) {
        res.json(data);
    })
        .catch(function (err) {
        res.end();
    });
});
app.listen(port, function () { return console.log("Server is listening on port " + port + "!"); });
