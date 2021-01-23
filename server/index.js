const express = require('express');
// const db = require('./../db/index.js');
const app = express();
const axios = require('axios');
const seller = require('../controller/index.js');
var compression = require('compression');

app.use(express.static('./react-client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// compress all responses
app.use(compression());

app.use('/items/:item_id', express.static('react-client/dist'));

app.get('/items/:item_id/seller', (req, res) => {
  let { item_id } = req.params;
  let args = [item_id];
  seller.read(args)
  .then(sellerData => {
    res.status(200).send(sellerData);
  })
  .catch(err => {
    res.status(404).send(err);
  });
});

app.get('/shopping/items', (req, res) => {
  axios.get('http://18.222.223.190:3004/shopping/items').then(function(response) {
    // console.log('shopping data: ', response.data)
    res.send(response.data);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

app.get('/item/images', (req, res) => {
  axios.get('http://13.52.213.118:3006/item/images').then(function (response) {
    // console.log('IMAGES', response.data)
    res.send(response.data);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

module.exports = app;
