import React from 'react';
// import { Link } from 'react-router-dom';
// import movies from '../services/movieData';
// import { getMovies } from '../services/movieAPI';
// import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product: { title, price, thumbnail, id } } = this.props;

    return (
      <div data-testid="product">
        <image src={thumbnail} alt={id} />
        <h2>{title}</h2>
        <p>{price}</p>
        <div>
          <p> botão link to "/product/:$id` VER DETALHES </p>
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
