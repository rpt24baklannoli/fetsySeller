const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'seller',
  password: '',
  port: 3005
})

module.exports = pool;
