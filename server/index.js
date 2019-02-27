const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');
// const Cart = require('../database/index.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../dist'));

app.get('/api/getAll', (req, res) => {
  db.getAllProducts(22, (err, data) => {
    if(err) {
      console.log(err, 'error on get api')
      res.end()
    }
      res.json(data)
      console.log('get request successful!')
    })
  })

app.get('/api/getAll/:id', (req, res) => {
  let reqId = req.params.id
  console.log('reqID', reqId);
  db.getAllProducts(reqId, (err, data) => {
    if(err) {
      console.log(err, 'cannot grab id from database')
      res.end()
    }
    res.json(data)
    console.log('grabbing id successful!!')
  })
})
// console.log(__dirname);

  app.listen(port, () => console.log(`Server is listening on port ${port}!`))