// Update with your config settings.
require('dotenv').config();
const path = require('path');

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: path.join(__dirname, '/knex/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/knex/seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_DEPLOY_HOST,
      database: 'sdc',
      user: process.env.PG_DEPLOY_USERNAME,
      password: process.env.PG_DEPLOY_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: `${__dirname }/knex/migrations`
    },
    seeds: {
      directory: `${__dirname }/knex/seeds`
    }
  }

};
