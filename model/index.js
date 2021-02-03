const db = require('../db/index.js');

let model = {
  post: (args) => {
    let query = 'INSERT INTO seller_info (seller_rating, total_sales, seller_name, seller_city, seller_state, on_etsy_since) VALUES ($1, $2, $3, $4, $5, $6) RETURNING item_id';
    return db.query(query, args);
  },
  get: (args) => {
    let query = 'SELECT * FROM seller_info WHERE item_id = $1';
    return db.query(query, args);
  },
  put: (query) => {
    return db.query(query);
  },
  delete: (args) => {
    let query = 'DELETE FROM seller_info WHERE item_id = $1 RETURNING item_id';
    return db.query(query, args);
  }
};

module.exports = model;