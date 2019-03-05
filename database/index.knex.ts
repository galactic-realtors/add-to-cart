//this is for using knex

require("dotenv").config();

const env: string = "production";
const config = require("../knexfile.js");
const knex = require("knex")(config[env]); // eslint-disable-line

module.exports = knex;
