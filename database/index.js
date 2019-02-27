const mongoose = require('mongoose');
const Schema = mongoose.Schema;
      
mongoose.connect('mongodb://hannah:password2211@ds227185.mlab.com:27185/addtocart', { useNewUrlParser: true }) //mLab

const cartSchema = new Schema ({
    id: Number,
    product_name: String,
    price: String
  }, {
    versionKey: false 
})

const Cart = mongoose.model('Cart', cartSchema);

const getAllProducts = (id, callback) => {
  console.log('where is this going?????')
  Cart.findOne({'id': id})
    .then((data) => {
      console.log(data, 'grabbing all data from get all products')
      callback(null, data)
    })
    .catch(err => {
      console.log('errrr', err)
      callback(err, null);
    })
}

module.exports = { getAllProducts, Cart };