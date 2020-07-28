import React from 'react';

// import ProductCard from './ProductCard'; *pode ser necessário pra lógica*

class ShoppingCart extends React.Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default ShoppingCart;
