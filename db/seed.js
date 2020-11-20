const generator = require('./generator.js');
const db = require('./index.js');

// TODO: refactor to use async await
const seed = () => {
  let i = 10;
  function writing() {
    while (i > 0) {
      i--
      let seller = generator.createSeller()
      db.query('INSERT INTO seller_info (seller_rating, total_sales, seller_name, seller_city, seller_state, on_etsy_since) VALUES ($1, $2, $3, $4, $5, $6)', seller, (err) => {
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
