import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.increaseQuantityHandler = this.increaseQuantityHandler.bind(this);
    this.decreaseQuantityHandler = this.increaseQuantityHandler.bind(this);
    this.removeFromCartHandler = this.increaseQuantityHandler.bind(this);
  }

  increaseQuantityHandler(newCartItem) {
    this.setState((state) => ({
      cartItems: state.cartItems.some(
        (product) => product.id === newCartItem.id,
      )
        ? state.cartItems.map((product) => {
          if (product.id === newCartItem.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        })
        : [...state.cartItems, { ...newCartItem, quantity: 1 }],
    }));
  }

  decreaseQuantityHandler(subCartItem) {
    this.setState((state) => ({
      cartItems: state.cartItems.some(
        (product) => product.id === subCartItem.id,
      )
        ? state.cartItems.map((product) => {
          if (product.id === subCartItem.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        })
        : [...state.cartItems, { ...subCartItem, quantity: 1 }],
    }));
  }

  removeFromCart(rmvCartItem) {
    this.setState((state) => {
      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex(
        (product) => product.id === rmvCartItem.id,
      );
      newCartItems.splice(index, 1);
      return { cartItems: newCartItems };
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/shoppingCart"
              render={(props) => (
                <ShoppingCart
                  {...props}
                  increaseQuantity={this.increaseQuantityHandler}
                  decreaseQuantity={this.decreaseQuantityHandler}
                  removeFromCart={this.removeFromCart}
                  cartItems={cartItems}
                />)}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
