const fs = require('fs');
const cart = require('./cart');

fs.appendFileSync('./seedingfile.csv', 'id|product_name|price\n');

for (let i = 0; i < 100000; i++) {
  for (let j = 0; j < cart.length; j++) {
    let item = cart[j];
    let id = item.id + (i * 100);
    fs.appendFileSync('./seedingfile.csv', `${id}|${item.product_name}|${item.price}\n`);
  }
}
