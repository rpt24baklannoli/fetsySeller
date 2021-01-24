const db = require('../db/index.js');

let model = {
  post: (args) => {
    let query = 'INSERT INTO seller_info (seller_rating, total_sales, seller_name, seller_city, seller_state, on_etsy_since) VALUES ($1, $2, $3, $4, $5, $6)';
    return new Promise((resolve, reject) => {
      db.query(query, args, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
  get: (args) => {
    let query = 'SELECT * FROM seller_info WHERE item_id = $1';
    return new Promise((resolve, reject) => {
      db.query(query, args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  put:  () => {
    console.log(`you've hit model.put endpoint`);
  },
  delete: (args) => {
    let query = 'DELETE FROM seller_info WHERE item_id = $1';
    return new Promise((resolve, reject) => {
      db.query(query, args, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
};

module.exports = model;