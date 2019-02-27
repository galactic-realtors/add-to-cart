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
  if (!isNaN(id)) {
    Cart.findOne({'id': id})
      .then((data) => {
        callback(null, data)
      })
      .catch((err) => {
        callback(err, null);
      });
  } else { callback( Error('ID supplied was not a number')) }
}

module.exports = { getAllProducts, Cart };