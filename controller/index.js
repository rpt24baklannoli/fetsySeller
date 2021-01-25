const model = require('../model/index.js');
const utils = require('../utils/index.js');

let seller = {
  create: model.post,
  read: model.get,
  update: (args, updateInfo) => {
    let query = utils.buildUpdateQuery(updateInfo, args);
    console.log(query);
    return model.put(query);
  },
  delete: model.delete
};

module.exports = seller;