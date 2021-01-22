const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'joselopez',
  host: 'localhost',
  database: 'seller',
  password: '',
  port: 5432
})

module.exports = pool;
