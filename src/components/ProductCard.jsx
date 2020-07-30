import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={thumbnail} alt={title} />
        <p>Preço: R${price}</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
        <Link
            data-testid="product-detail-link"
            to={`/products/${this.props.product.id}`}
        >
          Ver detalhes
        </Link>
        </div>
    );
  }
}

export default ProductCard;
