const express = require('express');
// const db = require('./../db/index.js');
const app = express();
const axios = require('axios');
const seller = require('../controller/index.js');
const OTHER_IPS = {
  shopping: '13.52.16.25:3004',
  images: '3.101.55.156:3006'
};
var compression = require('compression');

app.use(express.static('./react-client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// compress all responses
app.use(compression());

app.use('/items/:item_id', express.static('react-client/dist'));

app.post('/items/:item_id/seller', (req, res) => {
  let { item_id } = req.params;
  let { seller_rating, total_sales, seller_name, seller_city, seller_state, on_etsy_since } = req.body;
  let args = [seller_rating, total_sales, seller_name, seller_city, seller_state, on_etsy_since];
  seller.create(args)
  .then((data) => {
    res.status(200).send(data.rows[0]);
  })
  .catch(err => {
    res.status(404).send('Failed to add new seller, Error: ', err);
  });
});

app.get('/items/:item_id/seller', (req, res) => {
  let { item_id } = req.params;
  let args = [item_id];
  seller.read(args)
  .then(sellerData => {
    res.status(200).send(sellerData.rows[0]);
  })
  .catch(err => {
    res.status(404).send(err);
  });
});

app.put('/items/:item_id/seller', (req, res) => {
  let { item_id } = req.params;
  let args = [item_id];
  let body = req.body;
  seller.update(args, body)
  .then((data) => {
    res.status(200).send(data.rows[0]);
  })
  .catch(err => {
    res.status(404).send('Failed to update seller information, Error: ', err);
  });
});

app.delete('/items/:item_id/seller', (req, res) => {
  let { item_id } = req.params;
  let args = [item_id];
  seller.delete(args)
  .then((data) => {
    res.status(200).send(data.rows[0]);
  })
  .catch(err => {
    res.status(404).send('Failed to delete seller, Error: ', err);
  })
});

app.get('/shopping/items', (req, res) => {
  axios.get(`http://${OTHER_IPS.shopping}/shopping/items`).then(function(response) {
    // console.log('shopping data: ', response.data)
    res.send(response.data);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.get('/items/images', (req, res) => {
  axios.get(`http://${OTHER_IPS.images}/items/images`).then(function (response) {
    // console.log('IMAGES', response.data)
    res.send(response.data);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

module.exports = app;
