const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.knex.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../dist'));

app.get('/api/getAll/:id', (req, res) => {
  let reqId = req.params.id
  console.log('reqID', reqId);
  db('testinsert')
  .select()
  .where('id', `${reqId}`)
  .then((data) => {
    res.json(data)
    console.log('grabbing id successful!!')
  })
  .catch((err) => {
    console.log(err, 'cannot grab id from database')
    res.end()
  });
})

  app.listen(port, () => console.log(`Server is listening on port ${port}!`))