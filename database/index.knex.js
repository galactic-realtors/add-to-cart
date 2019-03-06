"use strict";
//this is for using knex
require("dotenv").config();
var env = "production";
var config = require("../knexfile.js");
var knex = require("knex")(config[env]); // eslint-disable-line
module.exports = knex;
