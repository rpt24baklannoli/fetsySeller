require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || '3.17.207.149',
  database: 'seller',
  password: process.env.DB_PASSWORD || 'student',
  port: 5432
})

module.exports = pool;
