import React from 'react';
import { Component } from 'react';
import ProductList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import * as API from '../services/api';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      category: '',
      SearchText: '',
    };
    this.onSearchResults = this.onSearchResults.bind(this);
  }

  onSearchResults = async text => {
    const response = await API.getProductsFromCategoryAndQuery(null, text)
      this.setState({ products: response})
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar onSubmit={this.onSearchResults}/>
        </div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default index; 
