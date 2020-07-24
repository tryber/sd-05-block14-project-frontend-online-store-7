import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';
// import getmovies from '../services/movieAPI';
import * as API from '../services/api';
// import Loading from '../components/Loading';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
    };
  }

  componentDidMount() {
    API.productsFromCategoryAndQuery().then((response) => this.setState({ products: response }));
  }

  render() {
    const { products } = this.state;
    const Results = products.results;
    return (
      <div data-testid="">
        {Results.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default ProductList;
