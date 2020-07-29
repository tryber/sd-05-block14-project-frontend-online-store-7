import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Home from './pages/index';

class App extends Component() {
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
        (product) => product.id === newCartItem.id
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
        (product) => product.id === subCartItem.id
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
        (product) => product.id === rmvCartItem.id
      );
      newCartItems.splice(index, 1);
      return { cartItems: newCartItems };
    });
  }

  routeCreator(page, path) {
    const PageName = page;
    const { cartItems } = this.state;
    return (
      <Route
        path={path}
        render={(props) => (
          <PageName
            {...props}
            increaseQuantity={this.increaseQuantityHandler}
            decreaseQuantity={this.decreaseQuantityHandler}
            removeFromCart={this.removeFromCart}
            cartItems={cartItems}
          />
        )}
      />
    );
  }

  /* tranferir para homepage este link:
<Link data-testid="shopping-cart-button" to="/shoppingCart">
  <img
    className="cart-img"
    src="https://image.flaticon.com/icons/png/512/263/263142.png"
    alt="Open shopping cart"
    width="50px"
  />
</Link> */

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {this.routeCreator(ProductDetails, '/product/:productID')}
            {this.routeCreator(ShoppingCart, '/shoppingCart')}
            {this.routeCreator(Home)}
          </Switch>
}

export default App;
