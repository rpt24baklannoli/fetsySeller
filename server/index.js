const express = require('express');
const pool = require('./../db/index.js');
const path = require('path');
const db = require('./../db/index.js');
const app = express()
const port = 3005

app.use(express.static('./react-client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/seller/items/', (req, res) => {
  db.query('SELECT * FROM seller_info', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
