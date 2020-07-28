// Adicione o atributo data-testid com o valor product-detail-name
// no elemento que possui o nome do produto na tela de detalhes.
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import * as API from '../services/api';
// import { Loading } from '../components';

// class ProductDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: '',
//     };
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     API.getProductsFromCategoryAndQuery(categoryId, query)(id)
// .then((response) => this.setState({ movie: response, loading: false }));
//   }

//   render() {
    // const { movie, loading } = this.state;

    // if (loading) return <Loading />;
    // const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // return (
    //   <div data-testid="movie-details">
    //     <img alt="Movie Cover" src={`../${imagePath}`} />
    //     <p>{`Title: ${title}`}</p>
    //     <p>{`Subtitle: ${subtitle}`}</p>
    //     <p>{`Storyline: ${storyline}`}</p>
    //     <p>{`Genre: ${genre}`}</p>
    //     <p>{`Rating: ${rating}`}</p>
    //     <div>
    //       <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
    //       <Link to="/">VOLTAR</Link>
    //     </div>
    //   </div>
//     // );
//   }
// }

// export default ProductDetails;

// MovieDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
//   }).isRequired,
// };
