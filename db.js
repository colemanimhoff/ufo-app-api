const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DEV_DB_USER_NAME,
  password: process.env.DEV_DB_PASSWORD,
  host: 'localhost',
  port: 5432,
  database: 'ufo_sightings',
});

module.exports = pool;