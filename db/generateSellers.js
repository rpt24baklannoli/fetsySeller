const faker = require('faker')

function header() {
  let sellers = `seller_id,seller_rating,total_sales,seller_name,seller_city,seller_state,on_etsy_since,item_id\n`;
  return sellers;
}

function addSellers(start, num) {
  let sellers = ``;
  for (let i = start; i < start + num; i++) {
    let seller = createSellerInfo();
    sellers = `${sellers}${i},${seller},${i}\n`;
  }
  return sellers;
}

function createSellerInfo() {
  const rating = faker.random.number({ 'min': 1, 'max': 5 });
  const sales = faker.random.number(2500);
  const name = faker.internet.userName();
  const city = faker.address.city();
  const state = faker.address.state();
  const member_since = faker.random.number({ 'min': 2005, 'max': 2020 });

  return `${rating},${sales},${name},${city},${state},${member_since}`;
}

module.exports.header = header;
module.exports.addSellers = addSellers;