import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;
    if (products.length < 1) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    );
  }
}

export default ProductList;
