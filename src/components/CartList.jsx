import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
  render() {
    const {
      addToCart,
      decreaseQuantity,
      removeFromCart,
      cartItems,
      updateTotal,
    } = this.props;

    if (cartItems.length < 1) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </p>
        </div>
      );
    }

    return (
      <div>
        {cartItems.map((cartProduct) => (
          <CartItem
            cartProduct={cartProduct}
            addToCart={addToCart}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
            updateTotal={updateTotal}
          />
        ))}
      </div>
    );
  }
}

export default CartList;
