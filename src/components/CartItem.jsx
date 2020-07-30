import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { addToCart, decreaseQuantity, removeFromCart, cartProduct } = this.props;
    const { title, price, thumbnail, quantity } = cartProduct;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade: {quantity}
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={() => decreaseQuantity(cartProduct)}
        >-</button>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={() => addToCart(cartProduct)}
        >+</button>
        <p>R${price * quantity}</p>
        <button type="button" onClick={() => removeFromCart(cartProduct)}>
          Remover do carrinho
        </button>
      </div>
    );
  }
}

export default CartItem;
