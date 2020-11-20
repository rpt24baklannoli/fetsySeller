const express = require('express');
const pool = require('./../db/index.js');
const db = require('./../db/index.js');
const app = express()
const port = 3005

app.use(express.static('./react-client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/items/:item_id/seller', (req, res) => {
  let item_id = req.params.item_id;
  let query = 'SELECT * FROM seller_info WHERE item_id = $1';
  let args = [item_id]
  db.query(query, args, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports = app;
