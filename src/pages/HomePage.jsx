import React from 'react';
import { Component } from 'react';
import ProductList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  // filterProducts() {} 

  render() {
    return(
      <div>
        <SearchBar />
        <ProductList />
      </div>
    )
  }
}

export default HomePage;
