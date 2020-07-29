import React from 'react';
import { Link } from 'react-router-dom';
// import movies from '../services/movieData';
// import { getMovies } from '../services/movieAPI';
// import PropTypes from 'prop-types';

// AVISO: ainda falta o botão e não sei se estamos puxando as props corretamente

class ProductCard extends React.Component {
  render() {
    const { product: { title, price, thumbnail, id } } = this.props;
    console.log(this.props.product.id);

    return (
      <div data-testid="product">
        <img src={thumbnail} alt={id} />
        <h2>{title}</h2>
        <p>{price}</p>
        <div>
          <p>botão comprar</p>
          <Link data-testid="product-detail-link" to={`/products/${this.props.product.id}`}>VER DETALHES</Link>
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
