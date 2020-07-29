import React from 'react';
import { Component } from 'react';
import ProductList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
    // this.filterProducts = this.filterProducts.bind(this);
  }

// filterProducts() {}

  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default index;
