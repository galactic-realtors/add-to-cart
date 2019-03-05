"use strict";
//this is for using knex
require("dotenv").config();
var environment = process.env.NODE_ENV || "production";
var config = require("../..knexfile.js");
var knex = require("knex")(config[environment]); // eslint-disable-line
module.exports = knex;
