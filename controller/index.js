const model = require('../model/index.js');
const utils = require('../utils/index.js');

let seller = {
  create: model.post,
  read: model.get,
  update: (args, updateInfo) => {
    return new Promise((resolve, reject) => {
      utils.buildUpdateQuery(updateInfo, args)
      .then(query => {
        model.put(query)
        .then(data => {
          resolve(data);
        })
      })
      .catch(err => {
        reject(err);
      });
    });
  },
  delete: model.delete
};

module.exports = seller;