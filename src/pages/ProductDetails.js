// Adicione o atributo data-testid com o valor product-detail-name
// no elemento que possui o nome do produto na tela de detalhes.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import * as API from '../services/api';
// import { Loading } from '../components';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // const { id } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({ product: result }));
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <section>
        <img alt="Fotenha" src={thumbnail} />
        <p data-testid="product-detail-name">{`Produto: ${title}`}</p>
        <p>{`Preço: r$${price}`}</p>
        <p>{`Descrição: ${attributes.value_name}`}</p>
        <div>
          <Link data-testid="product-detail-add-to-cart" to={'/ShoppingCart'}>COMPRAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
        <div>
          <label htmlFor="evaluation">Avalie esse produto:</label>
          <input id="evaluation" type="text" data-testid="product-detail-evaluation" />
          <p>botão do submit?!</p>
        </div>
      </section>
    );
  }
}

export default ProductDetails;

// MovieDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
//   }).isRequired,
// };
