import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
// import getmovies from '../services/movieAPI';
// import * as API from '../services/api';

class ProductList extends Component {
  render() {
    const { products } = this.props; // Incluir add to cart aqui
    if (products === null) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
