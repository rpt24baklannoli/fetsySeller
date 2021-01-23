const db = require('../db/index.js');

let model = {
  post: () => {
    console.log(`you've hit model.post endpoint`);
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
  delete: () => {
    console.log(`you've hit model.delete endpoint`);
  }
};

module.exports = model;