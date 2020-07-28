import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { increaseQuantity, decreaseQuantity, removeFromCart, cartProduct } = this.props;
    const { name, price, thumb, quantity } = cartProduct;

    return (
      <div>
        <img src={thumb} alt={name} />
        <p data-testid="shopping-cart-product-name">{name}</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade: {quantity}
        </p>
        <button type="button"
          data-testid="product-decrease-quantity"
          onClick={() => decreaseQuantity(cartProduct)}
        >-</button>
        <button type="button"
          data-testid="product-increase-quantity"
          onClick={() => increaseQuantity(cartProduct)}
        >+</button>
        <p>Preço Total: R${price * quantity}</p>
        <button type="button" onClick={() => removeFromCart(cartProduct)}>
          Remover do carrinho
        </button>
      </div>
    );
  }
}

export default CartItem;
