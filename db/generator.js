const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv
const db = require('./index.js');

const lines = argv.lines || 1
const filename = argv.output || 'sellers.csv'
const stream = fs.createWriteStream(filename)

const createSeller = () => {
  const seller_rating = faker.random.number(5)
  const total_sales = faker.random.number(2500)
  const seller_name = faker.internet.userName()
  const seller_city = faker.address.city()
  const seller_country = faker.address.country()
  const on_etsy_since = faker.random.number({
    'mix': 2010,
    'max': 2020
  })

  return [seller_rating,total_sales,seller_name,seller_city,seller_country,on_etsy_since]
}

// TODO: refactor to use async await
const seed = () => {
  let i = lines;
  function writing(){
    while (i > 0) {
      i--
      let seller = createSeller()
      db.query('INSERT INTO seller_info (seller_rating, total_sales, seller_name, seller_city, seller_country, on_etsy_since) VALUES ($1, $2, $3, $4, $5, $6)', seller, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('insert seller info successfully')
        }
      })
    }
  }
  writing()
}

seed();
