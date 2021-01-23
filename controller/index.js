const model = require('../model/index.js');

let seller = {
  create: model.post,
  read: model.get,
  update: model.put,
  delete: model.delete
};

module.exports = seller;