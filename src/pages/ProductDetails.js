import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as API from '../services/api';

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
    const { title, price, thumbnail } = product;
    const { increaseQuantity } = this.props;
    return (
      <section>
        <img alt="Fotenha" src={thumbnail} />
        <p data-testid="product-detail-name">{`Produto: ${title}`}</p>
        <p>{`Preço: R$ ${price}`}</p>
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={() => increaseQuantity(product)}
          >COMPRAR</button>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
        <div>
          <label htmlFor="evaluation">Avalie esse produto:</label>
          <input id="evaluation" type="text" data-testid="product-detail-evaluation" />
        </div>
      </section>
    );
  }
}

export default ProductDetails;
