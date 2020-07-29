import React from 'react';
import { Link } from 'react-router-dom';
// import movies from '../services/movieData';
// import { getMovies } from '../services/movieAPI';
// import PropTypes from 'prop-types';

// AVISO: ainda falta o botão e não sei se estamos puxando as props corretamente

class ProductCard extends React.Component {
  render() {
    const { product, increaseQuantityHandler } = this.props;
    const { title, price, thumbnail, id } = product;
  
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={id} />
        <h2>{title}</h2>
        <p>{price}</p>
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={() => increaseQuantityHandler(product)}
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

// ProductCard.propTypes = {
//  movie: PropTypes.shape({
//    imagePath: PropTypes.string,
//    title: PropTypes.string.isRequired,
//    storyline: PropTypes.string.isRequired,
//    id: PropTypes.number.isRequired,
//  }).isRequired,
// };
