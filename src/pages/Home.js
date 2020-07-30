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
    this.searchValueHandler = this.searchValueHandler.bind(this);
    this.byCategoryHandler = this.byCategoryHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.getProductsFromAPI();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    if (prevProps !== this.props && this.props.location.state) {
      this.getProductsFromAPI();
    }
    if (prevState.category !== category) {
      API.getProductsFromCategoryAndQuery(null, category)
        .then((categoryProducts) => {
          this.setState({ products: categoryProducts.results });
        });
    }
  }

  async getProductsFromInput() {
    const { inputValue } = this.state;
    const products = await API.getProductsFromCategoryAndQuery(inputValue);
    // console.log(products);
    this.setState({ products: products.results });
  }

  getProductsFromAPI() {
    const { category } = this.state;
    const { location: { state: { inputValue } } } = this.props;
    API.getProductsFromCategoryAndQuery(inputValue, category)
      .then((categoryProducts) => {
        this.setState({ products: categoryProducts.results });
      });
  }

  byCategoryHandler(event) {
    this.setState({ category: event.target.value });
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
          <Categories byCategoryHandler={this.byCategoryHandler} />
        </div>
        <div className="products-list">
          <ProductList products={products} addToCart={addToCart} />
        </div>
      </div>
    );
  }
}

export default Home;
