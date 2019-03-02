//this is for using no knex

require('dotenv').config();
const { Client } = require('pg')
const client = new Client()

client.connect()

module.exports = client;