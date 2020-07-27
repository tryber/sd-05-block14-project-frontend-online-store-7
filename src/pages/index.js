import React from 'react';
import { Component } from 'react';
import ProductList from '../components/ProductsList';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.filterProducts = this.filterProducts.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

// filterProducts() {}

  render() {
    if (this.state.searchText === '') {
      return (
        <div>
          <p data-testid='home-initial-message'>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      )
    }
    return (
      <div>
        <ProductList searchText={this.state.searchText} />
      </div>
    );
  }
}

export default index;
