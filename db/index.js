const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/fetsy', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('we are connected!');
// });



const sellerSchema = new Schema({
  seller_rating: Number,
  total_sales: Number,
  seller_name: String,
  seller_city: String,
  seller_state: String,
  on_etsy_since: Number,
  item_id: Number
  // item_id: {
  //   type: Number,
  //   index: true,
  //   unique: true
  // }
});

const Seller = mongoose.model('Seller', sellerSchema);

// let seller = new Seller({
//   seller_rating: 5,
//   total_sales: 1024,
//   seller_name: 'Jose',
//   seller_city: 'Cityville',
//   seller_state: 'Colorado',
//   on_etsy_since: 1995,
//   item_id: 2
// });

// seller.save()
//   .then(() => {
//     db.close();
//   })
//   .catch(err => {
//     console.error(err);
//   });

  module.exports = {
    Seller: Seller,
    Connection: db
  };
