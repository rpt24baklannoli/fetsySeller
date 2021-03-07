require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || '3.141.168.86',
  database: 'seller',
  password: '',
  port: 5432
})

module.exports = pool;
