import React from 'react';
import { Component } from 'react';
import ProductList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';
import Categories from './components/Categories';
// import ShoppingCart from './ShoppingCart/ShoppingCart';


class index extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
    // this.state = { search: null, category: null, value: null, cart: [] };
    // // this.filterProducts = this.filterProducts.bind(this);
    // this.getCategory = this.getCategory.bind(this);
    // this.getValue = this.getValue.bind(this);
    // this.resetCategory = this.resetCategory.bind(this);
    // this.makeSearch = this.makeSearch.bind(this);
    // this.addCart = this.addCart.bind(this);
  }

  // async getValue(selectedValue) {
  //   await this.setState({ value: selectedValue });
  //   this.makeSearch();
  // }

  // async getCategory(selectedcategory) {
  //   await this.setState({ category: selectedcategory });
  //   this.makeSearch();

    // async makeSearch() {
    //   const { category, value } = this.state;
    //   const returnValue = await getProductsFromCategoryAndQuery(category, value);
    //   this.setState({ search: returnValue });
    // }


  render() {
    // const { search, value } = this.state;
    return (
      <div>
        <div>
          <SearchBar onClick={this.getValue} />;
        </div>
        <div className="cart-button">
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img
              className="cart-img"
              src="https://image.flaticon.com/icons/png/512/263/263142.png"
              alt="Open shopping cart"
              width="300px"
            />
          </Link>
        </div>
        <div>
          <Categories onClick={this.getCategory} value={value}/>
        </div>
        <div>
        <ProductList products={this.state.products} {...props} value={search} /> 
        </div>
      </div>
    );
  }
}

export default index;
