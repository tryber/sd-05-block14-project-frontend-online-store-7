import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.increaseQuantityHandler = this.increaseQuantityHandler.bind(this);
    this.decreaseQuantityHandler = this.decreaseQuantityHandler.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  routeCreator(component, path) {
    const ComponentName = component;
    const { cartItems } = this.state;
    return (
      <Route
        path={path}
        render={(props) => (
          <ComponentName
            {...props}
            addToCart={this.increaseQuantityHandler}
            decreaseQuantity={this.decreaseQuantityHandler}
            removeFromCart={this.removeFromCart}
            cartItems={cartItems}
          />
        )} 
      />
    )
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
           {this.routeCreator(ProductDetails, '/product/:id')}
           {this.routeCreator(ShoppingCart, '/shoppingCart')}
           {this.routeCreator(Home)}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
