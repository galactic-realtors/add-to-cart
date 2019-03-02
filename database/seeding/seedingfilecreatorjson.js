const fs = require('fs');
const cart = require('./cart');

fs.appendFileSync('./seedingfile.json', '[');

for (let i = 0; i < 100000; i++) {
  for (let j = 0; j < cart.length; j++) {
    let item = cart[j];
    let id = item.id + (i * 100);
    if (i === 99999 && j === cart.length - 1) {
      fs.appendFileSync('./seedingfile.json', `{
        "id": ${id},
        "product_name": "${item.product_name}",
        "price": "${item.price}"
      }`);
    } else {
      fs.appendFileSync('./seedingfile.json', `{
        "id": ${id},
        "product_name": "${item.product_name}",
        "price": "${item.price}"
      }, `);
    }
  }
  if (i % 1000 === 0) console.log(i/1000);
}

fs.appendFileSync('./seedingfile.json', ']');
