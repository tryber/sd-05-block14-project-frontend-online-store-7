import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';
// import getmovies from '../services/movieAPI';
import * as API from '../services/api';
// import Loading from '../components/Loading';

// AVISO: como não tem teste não sei se estamos puxando as props/states corretamente

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
  }

  // não sei se coloca ".results" aqui embaixo já 
  componentDidMount() {
    API.productsFromCategoryAndQuery().then((response) => this.setState({ products: response }));
  }

  render() {
    const { products } = this.state;
    const Results = products.results; // ou faz isso
    return (
      <div data-testid="">
        {Results.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default ProductList;
