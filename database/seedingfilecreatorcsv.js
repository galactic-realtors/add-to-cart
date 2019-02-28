const fs = require('fs');
const cart = require('./cart');
const client = require('./seedDBCassandra');

for (let i = 0; i < 100000; i++) {
  for (let j = 0; j < cart.length; j++) {
    let item = cart[j];
    let id = item.id + (i * 100);
    client.execute(`INSERT INTO testinginsert (id, product_name, price) VALUES (${id}, ${item.product_name}, ${item.price})`, (err) => {
      console.log('we got an err? ', err);
    })
  }
}
console.timeEnd("inserting");
