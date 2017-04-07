import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Total from './components/Total';
import ProductAction from './components/productActions';
import './index.css';



// ////////    es5 code here
// var Product = React.createClass({
//   buy: function() {
//     this.setState({qty: this.state.qty+1});
//     this.props.handleTotal(this.props.price);
//   },
//   show: function(name) {
//     alert('You selected '+name)
//   },
//   getInitialState: function() {
//     return {qty: 0};
//   },
//   render: function() {
//         return (
//           <div className="App">
//
//             <div>
//               <p>{this.props.name}  - ${this.props.price}  <button onClick={this.buy}>Buy</button><button onClick={() => this.show(this.props.name)}>Show</button></p>
//             </div>
//             <div>Qty: {this.state.qty} item(s)</div>
//             <hr />
//           </div>
//         );
//       }
// });

// var Total = React.createClass({
//   render: function() {
//     return(
//       <div><h3>Total Cash: {this.props.total}</h3></div>
//     )
//   }
// });

  var ProductList = React.createClass({
    getInitialState: function() {
      return {
        total: 0,
        Products: [
          {name: 'Android', price: 122},
          {name: 'Ios', price: 125},
          {name: 'Windows', price: 100}
        ]
      };
    },
    calculateTotal: function(price) {
      this.setState({total: this.state.total + price});
    },
    render: function() {
      var that = this;
      var ProductHtml = this.state.Products.map(function(product) {
        return (
           <ProductAction name={product.name} price={product.price} handleTotal={that.calculateTotal}/>
        );
      });
      return(
        <div>
          <App />
          {ProductHtml}
          <Total total={this.state.total}/>
        </div>
      );
    }
  })




ReactDOM.render(
  <ProductList />,
  document.getElementById('root')
);



// es6 code here........................
//
// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {qty:0};
//   }
//   buy() {
//     this.setState({qty: this.state.qty+1});
//     this.props.handleTotal(this.props.price);
//   }
//   show(name) {
//     alert('You selected '+name)
//   }
//   render() {
//         return (
//           <div className="App">
//             <div>
//               <p>{this.props.name}  - ${this.props.price}  <button onClick={this.buy.bind(this)}>Buy</button><button onClick={() => this.show(this.props.name)}>Show</button></p>
//             </div>
//             <div>Qty: {this.state.qty} item(s)</div>
//             <hr />
//           </div>
//         );
//       }
// };
//
// class Total extends React.Component {
//     render() {
//       return(
//         <div><h3>Total Cash: {this.props.total}</h3></div>
//       )
//     }
//   };
//
// class ProductHtml extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         total:0,
//         Products: [
//           {name: 'Android', price: 122},
//           {name: 'Ios', price: 125},
//           {name: 'Windows', price: 100}
//         ]
//       };
//     }
//     calculateTotal(price) {
//       this.setState({total: this.state.total + price});
//     }
//     render() {
//       var that = this;
//       var productLoop = this.state.Products.map(key => {
//         return (
//            <Product name={key.name} price={key.price} handleTotal={that.calculateTotal.bind(this)}/>
//         )
//       });
//       return(
//         <div>
//           <App />
//           {productLoop}
//           <Total total={this.state.total}/>
//         </div>
//       )
//     }
//   }
// ReactDOM.render(
//   <ProductHtml />,
//   document.getElementById('root')
// );
