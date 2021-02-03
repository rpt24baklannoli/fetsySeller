let buildUpdateQuery = (updateObject, [ item_id ]) => {
  let updates = '';
  for (let prop in updateObject) {
    if (updates) {
      if (typeof updateObject[prop] === 'string') {
        updates += `, ${prop} = '${updateObject[prop]}'`;
      } else {
        updates += `, ${prop} = ${updateObject[prop]}`;
      }
    } else {
      if (typeof updateObject[prop] === 'string') {
        updates += `${prop} = '${updateObject[prop]}'`;
      } else {
        updates += `${prop} = ${updateObject[prop]}`;
      }
    }
  }
  return `UPDATE seller_info SET ${updates} WHERE item_id = ${item_id} RETURNING item_id`;
}

module.exports.buildUpdateQuery = buildUpdateQuery;