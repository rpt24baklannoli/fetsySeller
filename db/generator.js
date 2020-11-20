const fs = require('fs')
const faker = require('faker')

const createSeller = () => {
  const seller_rating = faker.random.number({
    'min': 3,
    'max': 5
  })
  const total_sales = faker.random.number(2500)
  const seller_name = faker.internet.userName()
  const seller_city = faker.address.city()
  const seller_state = faker.address.state()
  const on_etsy_since = faker.random.number({
    'min': 2010,
    'max': 2020
  })

  return [seller_rating, total_sales, seller_name, seller_city, seller_state,on_etsy_since]
}


exports.createSeller = createSeller;
