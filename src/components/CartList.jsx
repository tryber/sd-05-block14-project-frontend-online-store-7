import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
  render() {
    const {
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      cartItems,
      updateTotal,
    } = this.props;

    if (cartItems.length < 1) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }

    return (
      <div>
        {cartItems.map((cartItem) => (
          <CartItem
            cartProduct={cartItem}
            increaseQuantity={increaseQuantity}
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
