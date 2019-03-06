
"use strict";
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");
var db = require("../../database/index.knex.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../dist"));
app.get("/api/product/:id", function (req, res) {
  var reqId = req.params.id;
  db("prices")
    .select()
    .where("id", "" + reqId)
    .then(function (data) {
      console.log("grabbing id successful!!");
      res.json(data);
  })
    .catch(function (err) {
      console.log(err, "cannot grab id from database");
      res.end();
  });
});
app.post("/api/product", function (req, res) {
  var reqId = req.params.id;
  db("prices")
    .select()
    .where("id", "" + reqId)
    .then(function (data) {
      console.log("grabbing id successful!!");
      res.json(data);
  })
    .catch(function (err) {
    console.log(err, "cannot grab id from database");
    res.end();
  });
});
app.listen(port, function () { return console.log("Server is listening on port " + port + "!"); });
