import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((result) => this.setState({ product: result }));
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    const { addToCart } = this.props;
    return (
      <div className="details-container">
        <div className="go-back">
          <Link to="/">VOLTAR</Link>
        </div>
        <div className="product-detail">
          <h2 data-testid="product-detail-name">{`Produto: ${title}`}</h2>
          <img alt={title} src={thumbnail} />
          <p>{`Preço: R$ ${price}`}</p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={() => addToCart(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div className="evaluate-product">
          <label htmlFor="evaluation">Avalie esse produto:</label>
          <input id="evaluation" type="text" data-testid="product-detail-evaluation" />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
