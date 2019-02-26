const cartItem = require('../database/index.js').Cart
const cartData = require('../database/cart.json')

cartItem.insertMany(cartData, (err) => {
    if(err) {
        console.log(err, 'failed to insert documents')
    }
    console.log('sucessfully inserted items')
})

