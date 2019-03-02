import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { inherits } from 'util';

const border = {
  width: '242px',
  height: '461px',
  borderStyle: 'outset',
}
const buttonDivStyle = {
  marginBottom: '5px'
}
const cartButton = {
  display: 'inline-block',
  backgroundColor: '#f0c14b',
  fontFamily: 'Inherit',
  lineHeight: '19px',
  verticalAlign: 'middle',
  fontSize: '13px',
  lineHeight: '19px',
  width: '204px',
  height: '25px',
}


const buyNow = {
  display: 'inline-block',
  backgroundColor: '#e57839',
  fontFamily: 'Inherit',
  lineHeight: '19px',
  verticalAlign: 'middle',
  fontSize: '13px',
  lineHeight: '19px',
  width: '204px',
  height: '25px'
}

const priceColor = {
  color: '#b12704',
  fontFamily: 'Amazon Ember',
  fontSize: '17px',
}
const stockColor = {
  color: '#008a00',
  fontSize: '17px',
}
const smallPrice = {
  color: '#b12704',
  fontFamily: 'Amazon Ember',
  fontSize: '15px',
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsId: '',
      price: '',
      info: [],
      quantity: 1,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('newPage', (event) => {
      let id = event.detail 
      Axios.get(`/api/getAll/${id}`)
      .then(data => {
      console.log(data, "this is the data we are looking for ")
        this.setState({
          info: data.data
        });
    })
    .then()
    .catch((err) => console.log('oh no there was an error in Axios request', err))
  }, false)

      Axios.get('/api/getAll')
      .then(data => {
      console.log(data, "this is the data we are looking for ")
        this.setState({
          info: data.data
        });
    })
    .then()
    .catch((err) => console.log('oh no there was an error in Axios request', err))
 }


  handleClick() {
  console.log('click')
  let newQ = this.state.quantity;
  this.setState({ quantity: newQ + 1 });
} 

  
  render() {
    return (
      <div style={border}>
        <div style={priceColor}> ${this.state.info.price}</div>
        &
        <b> FREE Shipping </b>
        <br></br>
        <b> Get it as soon as Feb. 28 - March 4 </b> 
        when you choose
        <b> Standard Shipping </b>
        at checkout
        <div style={stockColor}><b>In stock</b></div>
        <label>Qty:</label>
        <select>
          <option value="1"selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        <br></br>
        <br></br>
        <div style={smallPrice}> {this.state.info.price} </div>
        <br></br>
        <div style={buttonDivStyle}>
        <input type="button" value="Add to cart" style={cartButton} onClick={this.handleClick}/></div>
        <input type="button" value="Buy Now" style={buyNow} onClick={this.handleClick}/>
      </div>
    );
  }
}
export default App;