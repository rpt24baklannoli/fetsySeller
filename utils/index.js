let buildUpdateQuery = (updateObject, [ item_id ]) => {
  let updates = '';
  for (prop in updateObject) {
    if (updates) {
      updates += `, ${prop} = ${updateObject[prop]}`;
    } else {
      updates += `${prop} = ${updateObject[prop]}`;
    }
  }
  return `UPDATE seller_info SET ${updates} WHERE item_id = ${item_id}`
}

module.exports.buildUpdateQuery = buildUpdateQuery;