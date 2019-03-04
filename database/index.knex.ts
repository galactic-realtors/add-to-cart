//this is for using knex

require("dotenv").config();

const environment = process.env.NODE_ENV || "production";
const config = require("../knexfile.js");
const knex = require("knex")(config[environment]); // eslint-disable-line

module.exports = knex;
