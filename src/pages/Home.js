import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductsList';
import * as API from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      category: '',
      products: []
    };

    this.getProductsFromInput = this.getProductsFromInput.bind(this);
    this.getProductsFromAPI = this.getProductsFromAPI.bind(this);
    this.searchByCategory = this.searchByCategory.bind(this);
    this.searchValueHandler = this.searchValueHandler.bind(this);
  }

  async getProductsFromInput() {
    const { inputValue } = this.state;
    const products = await API.getProductsFromCategoryAndQuery(inputValue);
    // console.log(products);
    this.setState({ products: products.results });
  }

  getProductsFromAPI() {
    const { category, inputValue } = this.state;
    API.getProductsFromCategoryAndQuery(category, inputValue)
      .then((categoryProducts) => {
        this.setState({ products: categoryProducts.results });
      });
  }

  async searchByCategory(selectedCategoryID) {
    await this.setState({ category: selectedCategoryID });
    this.getProductsFromAPI();
  }

  searchValueHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue, addToCart, searchValueHandler, getProductsFromInput } = this.props;
    const { products } = this.state;
    return (
      <div className="main-container">
        <div className="search-bar">
          <SearchBar
            inputValue={inputValue}
            searchValueHandler={searchValueHandler}
            getProductsFromInput={getProductsFromInput}
          />
        </div>
        <div className="cart-button">
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img
              className="cart-img"
              src="https://image.flaticon.com/icons/png/512/263/263142.png"
              alt="Shopping cart icon"
              width="50px"
            />
          </Link>
        </div>
        <div className="categories">
          <Categories onClick={this.searchByCategory} />
        </div>
        <div className="products-list">
          <ProductList products={products} addToCart={addToCart} />
        </div>
      </div>
    );
  }
}

export default Home;
