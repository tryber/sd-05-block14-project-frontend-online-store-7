import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as API from '../services/api';
// import ShoppingCart from './ShoppingCart/ShoppingCart';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { search: null, category: null, value: null }; // , cart: []
    this.searchCategory = this.searchCategory.bind(this);
    this.searchValue = this.searchValue.bind(this);
    // this.resetCategory = this.resetCategory.bind(this);
    this.searchApi = this.searchApi.bind(this);
    // this.addCart = this.addCart.bind(this);
  }

  async searchValue(sValue) {
    await this.setState({ value: sValue });
    this.searchApi();
  }

  async searchCategory(selectedcategory) {
    await this.setState({ category: selectedcategory });
    this.searchApi();
  }

  async searchApi() {
    const { category, value } = this.state;
    const apiResponse = await API.getProductsFromCategoryAndQuery(category, value);
    this.setState({ search: apiResponse.results });
  }


  render() {
    const { search, value } = this.state; // cart
    return (
      <div>
        <div>
          <SearchBar search={search} value={value} />
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
        <div>
          <Categories onClick={this.searchCategory} value={value} />
        </div>
        <div>
          <ProductList products={search} value={search} />
        </div>
      </div>
    );
  }
}

export default index;
