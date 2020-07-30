import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, increaseQuantity } = this.props;
    const { title, price, thumbnail, id } = product;

    return (
      <div data-testid="product">
        <img src={thumbnail} alt={id} />
        <h2>{title}</h2>
        <p>{price}</p>
        <div>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={() => increaseQuantity(product)}
          >
            COMPRAR
          </button>
          <Link
            data-testid="product-detail-link"
            to={`/products/${this.props.product.id}`}
          >
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductCard;
