const fs = require('fs');
const faker = require('faker');

fs.appendFileSync('./seedingfile.csv', 'product_name|price\n');

for (let i = 0; i < 10000000; i++) {
  let product_name = faker.commerce.productName();
  let price = faker.commerce.price();
  fs.appendFileSync('./seedingfile.csv', `${i + 1}|${product_name}|${price}\n`);
  if (i % 100000 === 0) {
    console.log(i / 100000);
  }
}
