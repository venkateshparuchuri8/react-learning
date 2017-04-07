import React, { Component } from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {qty:0};
  }
  buy() {
    this.setState({qty: this.state.qty+1});
    this.props.handleTotal(this.props.price);
  }
  show(name) {
    alert('You selected '+name)
  }
  render() {
        return (
          <div className="App">
            <div>
              <p>{this.props.name}  - ${this.props.price}  <button onClick={this.buy.bind(this)}>Buy</button><button onClick={() => this.show(this.props.name)}>Show</button></p>
            </div>
            <div>Qty: {this.state.qty} item(s)</div>
            <hr />
          </div>
        );
      }
};

export default Product;
