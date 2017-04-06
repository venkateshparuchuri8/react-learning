import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var Product = React.createClass({
  buy: function() {
    this.setState({qty: this.state.qty+1});
    this.props.handleTotal(this.props.price);
  },
  show: function(name) {
    alert('You selected '+name)
  },
  getInitialState: function() {
    return {qty: 0};
  },
  render: function() {
        return (
          <div className="App">

            <div>
              <p>{this.props.name}  - ${this.props.price}  <button onClick={this.buy}>Buy</button><button onClick={() => this.show(this.props.name)}>Show</button></p>
            </div>
            <div>Qty: {this.state.qty} item(s)</div>
            <hr />
          </div>
        );
      }
});




  var Total = React.createClass({
    render: function() {
      return(
        <div><h3>Total Cash: {this.props.total}</h3></div>
      )
    }
  });





  var ProductList = React.createClass({
    getInitialState: function() {
      return {total: 0};
    },
    calculateTotal: function(price) {
      this.setState({total: this.state.total + price});
    },
    render: function() {
      return(
        <div>
          <App />
          <Product name="Android" price={122} handleTotal={this.calculateTotal}/>
          <Product name="Ios" price={125} handleTotal={this.calculateTotal}/>
          <Product name="Windows" price={100} handleTotal={this.calculateTotal}/>
          <Total total={this.state.total}/>
        </div>
      )
    }
  })



  
ReactDOM.render(
  <ProductList />,
  document.getElementById('root')
);
